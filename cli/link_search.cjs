module.exports.linkSearch = async (link) => {
    return await fetch(
        `https://api.trace.moe/search?url=${encodeURIComponent(link)}`
      ).then((e) => e.json());
};

// https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg