const fs = require('fs');

module.exports.fileSearch = async (file) => {
    return await fetch("https://api.trace.moe/search?anilistInfo", {
        method: "POST",
        body: fs.readFileSync(file),
        headers: {
            "Content-type": "image/jpeg"
        },
    })
        .then((result) => result.json())
        .then((result) => result.result[0])
        .catch(() => console.log(false));
};