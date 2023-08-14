#!/usr/bin/env node

import { commands } from "./cli/commands.cjs";
import { checkData } from "./cli/check_data.cjs";
import { fileSearch } from "./cli/file_search.cjs";
import { linkSearch } from "./cli/link_search.cjs";
import { outputData } from "./cli/output_data.cjs";

(async () => {
    const data = await commands();
    const checked = checkData(data);

    if (typeof checked == 'string') {
        console.log(checked);
        return;
    };

    let newData = {};
    if (checked.choice == 'file') {
        newData = await fileSearch(checked.path);
    } else {
        newData = await linkSearch(checked.path);
    };

    outputData(newData);
})();