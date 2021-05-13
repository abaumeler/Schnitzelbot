const fs = require('fs');

function getDanceGif() {
    const imageData = fs.readFileSync(path.join(__dirname, '../media/schnitzel_dance.gif'));
    const base64Image = Buffer.from(imageData).toString('base64');

    return {
        name: 'schnitzel_dance.gif',
        contentType: 'image/gif',
        contentUrl: `data:image/gif;base64,${ base64Image }`
    };
}

module.exports.getDanceGif = getDanceGif;