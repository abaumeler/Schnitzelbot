const messages = [
    'na schnitzel',
    'wenn man immer schläft kann man auch nichts verdienen',
    'das problem ist kofax',
    'aufwachen',
    'schläft der dicke?',
    'das war im call dokumentiert',
    'du kannst wenigstens im Büro schlafen',
    'alzheimer was war das? Habs schon wieder vergessen',
    'gestern standen wir am abgrund, heute sind wir schon einen schritt weiter',
    'reboot',
    'welches Wartungsfenster?',
    'hab die kiste gestern nacht mal durchgestartet',
    'Habs vergessen, zu langer urlaub',
    'Ihr habt nur grüze im kopf',
    'Hey aufwachen gleich ist mittag',
    'alle am schnarchen',
    'ich glaube ihr habt furzologie studiert',
    'wie immer alle am schlafen',
    'das kennst du eh nicht',
    'lach nur',
    'will nach ZH zu viel Arbeit',
    'so ihr schnitzel',
    'habs vergessen',
    'könnte auch im SVN sein',
    'jammer lappen',
    'nur scheiss an der backe',
    'alte eier schauckel',
    'du mus nur den neuen Treiber von Kodak haben und denvon Kofax',
    'ist der schläfer neben dir auch da?',
    'hau rein',
    'schnitzel',
    'bin ein ebi clon geworden',
    'arbeit arbeit',
    'ich bin erledigt',
    'noch am schlafen?',
    'sap ist ein kack',
    'genau',
    'kann sein',
    'eher nicht',
    'und schon wieder müde',
    'hast du da ne call nummer',
    'gibts da ein call',
    'sicher nicht',
    'definitiv',
    'ja',
    'nein',
    'das leben ist kein Wunschkonzert',
    'einmal mit Profis'];

function answerRandomly() {
    return getMessage();
}

function getMessage() {
    var messageID = Math.floor((Math.random() * messages.length));
    console.log(messageID);
    return messages[messageID];
}

module.exports.answerRandomly = answerRandomly;
