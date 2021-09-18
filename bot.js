// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory, ActivityTypes } = require('botbuilder');
const randomAnswerCommandProcessor = require('./commandProcessors/randomAnswerCommandProcessor.js');
const questionAnswerCommandProcessor = require('./commandProcessors/questionAnswerCommandProcessor.js');
const danceCommandProcessor = require('./commandProcessors/danceCommandProcessor.js');
const ddgAnswerCommandProcessor = require('./commandProcessors/ddgAnswerCommandProcessor.js');

class EchoBot extends ActivityHandler {
    constructor() {
        super();

        // respond to user messages
        this.onMessage(async (context, next) => {
            let replyText;
            let replyAttachment;
            if (context.activity.text.includes('search')) {
                console.log('ddg');
                let query = context.activity.text;
                query = query.replace("search", "");
                query = query.replace("@schnitzelbot", "");
                let reply = await ddgAnswerCommandProcessor.getDDGAnswer(query);
                await context.sendActivities([
                    { type: ActivityTypes.Typing },
                    { type: 'delay', value: Math.random() * 600 },           
                    { type: ActivityTypes.Message, text: replyText, attachments: [
                        {
                            "contentType": "application/vnd.microsoft.card.hero",
                            "content": {
                              "title": reply.Heading,
                              "subtitle": reply.Entity,
                              "text": reply.AbstractText,
                             "buttons": [
                               {
                                  "type": "openUrl",
                                  "title": reply.AbstractSource,
                                  "value": reply.AbstractURL
                                }
                              ]
                            }
                         }
                    ]}          
                ]);
            } else if (context.activity.text.includes('?')) {
                console.log('question');
                replyText = questionAnswerCommandProcessor.getQuestionAnswer();
                await context.sendActivities([
                    { type: ActivityTypes.Typing },
                    { type: 'delay', value: Math.random() * 600 },
                    { type: ActivityTypes.Message, text: replyText }
                ]);
            } else if (context.activity.text.includes('dance')) {
                console.log('dance');
                replyAttachment = [danceCommandProcessor.getDanceGif()];
                await context.sendActivities([
                    { type: ActivityTypes.Typing },
                    { type: 'delay', value: Math.random() * 600 },
                    { type: ActivityTypes.Message, attachments: replyAttachment }
                ]);
            } else {
                console.log('message');
                replyText = randomAnswerCommandProcessor.getRandomAnswer();
                await context.sendActivities([
                    { type: ActivityTypes.Typing },
                    { type: 'delay', value: Math.random() * 600 },
                    { type: ActivityTypes.Message, text: replyText}
                ]);
            };

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        // send welcome message when a new user is added
        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Alter wie geht ihr denn ab?!';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
