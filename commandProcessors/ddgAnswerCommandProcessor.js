const ddg = require ('node-duckduckgo');

async function getDDGAnswer(query) {
    try {
        console.log(query)
        const result = await ddg.duckIt(query, {skipDisambig: true});
        console.log(result.data);
        return result.data;
    } catch (err) {
        console.error('DDG Error', err);
        return 'Ich kann deine Frage zur Zeit leider nicht beantworten';
    }
}

module.exports.getDDGAnswer = getDDGAnswer;

