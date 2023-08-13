module.exports.linkSearch = async (link) => {
    return await fetch(
        `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(link)}`
    )
        .then((result) => result.json())
        .then((result) => result.result[0])
        .catch(() => console.log(false));
};

// https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg