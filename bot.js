// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory, ActivityTypes } = require('botbuilder');
const randomAnswerCommandProcessor = require('./CommandProcessors/randomAnswerCommandProcessor.js');
const questionAnswerCommandProcessor = require ('./commandProcessors/questionAnswerCommandProcessor.js');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        
        // respond to user messages
        this.onMessage(async (context, next) => {
            let replyText
            if(context.activity.text.includes('?')){
                console.log("question");
                replyText = questionAnswerCommandProcessor.getQuestionAnswer();
            }else{   
                console.log("message");         
                replyText = randomAnswerCommandProcessor.getRandomAnswer();
            };
            
            await context.sendActivities([
                { type: ActivityTypes.Typing },
                { type: 'delay', value: Math.random() * 300 },
                { type: ActivityTypes.Message, text: replyText }
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
