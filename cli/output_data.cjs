const pen = require('felt-pen');

module.exports.outputData = (data) => {
    if (data) {
        return `${pen.green('✅Found!')}
⛩️Title Native: ${data.anilist.title.native}
🗻Title Romaji: ${data.anilist.title.romaji}
🗽Title English: ${data.anilist.title.english}
📊Similarity: ${pen.green(data.similarity)}
📺Episode: ${pen.cyan(data.episode)}
➡️From: ${pen.cyan(data.from)}
➡️To: ${pen.cyan(data.to)}
🕕Is Adult: ${data.anilist.isAdult ? pen.red(true) : pen.green(false)}`;
    } else {
        return pen.red('Error! Some data is incorrect.');
    };
};