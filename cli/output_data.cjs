const pen = require('felt-pen');

module.exports.outputData = (data) => {
    console.log(`${pen.green('✅Found!')}
Title Native: ${data.anilist.title.native}
Title Romaji: ${data.anilist.title.romaji}
Title English: ${data.anilist.title.english}
Similarity: ${data.similarity}
Episode: ${data.episode}
From: ${data.from}
To: ${data.to}
Is Adult: ${data.anilist.isAdult}`
    );
    console.log(data);
};