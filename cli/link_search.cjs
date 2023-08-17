module.exports.linkSearch = async (link) => {
    try {
        return await fetch(
            `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(link)}`
        )
            .then((result) => result.json())
            .then((result) => result.result[0])
    } catch (error) {
        return false;
    };
};