#!/usr/bin/env node

import { commands } from "./cli/commands.cjs";

(async () => {
    console.log(await commands());
})();