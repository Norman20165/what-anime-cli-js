module.exports.checkData = (data) => {
    if (data._ === undefined) {
        return checkPromptData(data);
    } else {
        return checkYargsData(data);
    };
};

function checkPromptData(data) {
    if (data.path === '') {
        return 'Error! Not enough data.';
    };
    return data;
};

function checkYargsData(data) {
    handler = {};

    if (data._[0] == 'file' || data._[0] == 'f') {
        handler.choice = 'file';
    } else if (data._[0] == 'link' || data._[0] == 'l') {
        handler.choice = 'link';
    } else {
        return 'Error! Not enough data.';
    };
    handler.path = data._[1];

    return handler;
};