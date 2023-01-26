"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
module.exports = async (client) => {
    const eventFiles = fs.readdirSync(`./dist/MusicEvents/`).filter(file => (file.endsWith(client.config.dev === "src" ? '.ts' : '.js')));
    eventFiles.forEach(file => {
        const event = require(`../MusicEvents/${file}`);
        client.player.on(event.name, async (...args) => await event.execute(...args, client));
    });
};
