"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: discord_js_1.Events.Warn,
    once: false,
    async execute(warn, client) {
        throw warn;
    }
};