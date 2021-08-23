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
    'und schon wieder müde',
    'hast du da ne call nummer',
    'gibts da ein call',
    'das leben ist kein Wunschkonzert',
    'einmal mit Profis',
    'falsche antwort   ääääääääääääääääääääää',
    'das war bei der cenit schon so',
    'hast du kurz telefon',
    'habe ne 1/2 Stunde gebraucht bis der server wieder oben  war',
    'muste in auf einen andere esx schieben',
    'nee nur der serveer',
    'alter so ein scheissssss',
    'was wolltest diu ',
    'ja das versthen aber die GL und pl nicht',
    'doch muss rumpsteak essen weil der kurze  es will muste mich opfern',
    'ich geht kurz den kurzen zur schule bringen',
    'alter wie geht ihr denn ab?!',
    'wart mal bist du kinder hast  dann kommen die richtigen herausforderungen',
    'wer braucht schon glücklich',
    'bin im meeting',
    'ich muss mehr platte anhängen',
    'ist vollgelaufen',
    'falscher chat#',
    'ich werd schone wieder ignoriert',
    'am arsch die waldfee',
    'Wer glaubt das ein Zitronenfalter Zitronenfaltet, glaubt auch dass ein Abteilungsleiter die Abteilung leitet',
    'Dein papa verkauft schnitzel'
    'werf du deinen AUsweis weg  und du bekommst rente nachbezahlt'];

function getRandomAnswer() {
    return getMessage();
}

function getMessage() {
    var messageID = Math.floor((Math.random() * messages.length));
    console.log(messageID);
    return messages[messageID];
}

module.exports.getRandomAnswer = getRandomAnswer;
