const postive_messages = [
    "Ja",
    "ok",
    "is gut",
    "von mir aus",
    "wieso nicht",
    "definitiv",
    "denke schon",
    "passt"
];

const negative_messages = [
    "Nein",
    "Nee",
    "Nö",
    "sicher nicht",
    "denke nicht",
    "definitiv nicht",
    "auf keinen fall",
    "kannste vergessen",
    "lieber nicht",
    "geht nicht"  
];

function getPositiveMessage() {
    var messageID = Math.floor((Math.random() * postive_messages.length));
    console.log(messageID);
    return postive_messages[messageID];
}

function getNegativeMessage() {
    var messageID = Math.floor((Math.random() * negative_messages.length));
    console.log(messageID);
    return messages[messageID];
}

function getQuestionAnswer() {
    //should be true in ~50% of the time
    let positiveAnswer = Math.random() < 0.5;
    if(positiveAnswer){
        return getPositiveMessage();
    }else{
        return getNegativeMessage();
    }
} 

module.exports.getQuestionAnswer = getQuestionAnswer;