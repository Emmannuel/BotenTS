"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: discord_js_1.Events.Error,
    once: false,
    async execute(error, client) {
        throw error;
    }
};
