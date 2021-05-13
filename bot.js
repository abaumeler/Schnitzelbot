// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory, ActivityTypes } = require('botbuilder');
const randomAnswerCommandProcessor = require('./commandProcessors/randomAnswerCommandProcessor.js');
const questionAnswerCommandProcessor = require('./commandProcessors/questionAnswerCommandProcessor.js');
const danceCommandProcessor = require('./commandProcessors/danceCommandProcessor.js');

class EchoBot extends ActivityHandler {
    constructor() {
        super();

        // respond to user messages
        this.onMessage(async (context, next) => {
            let replyText;
            let replyAttachment;
            if (context.activity.text.includes('?')) {
                console.log('question');
                replyText = questionAnswerCommandProcessor.getQuestionAnswer();
            } else if (context.activity.text.includes('dance')) {
                console.log('dance');
                replyText = 'dancing';
                replyAttachment = [danceCommandProcessor.getDanceGif()];
            } else {
                console.log('message');
                replyText = randomAnswerCommandProcessor.getRandomAnswer();
            };

            await context.sendActivities([
                { type: ActivityTypes.Typing },
                { type: 'delay', value: Math.random() * 600 },
                { type: ActivityTypes.Message, text: replyText },
                { type: ActivityTypes.Message, attachments: replyAttachment }
            ]);

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
