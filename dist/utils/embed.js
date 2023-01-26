"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmbed = void 0;
const discord_js_1 = require("discord.js");
const createEmbed = async (client) => {
    return new discord_js_1.EmbedBuilder().setColor(client.config.color).setTimestamp().setFooter({
        text: `Prueba en TS`,
        iconURL: client.guild?.icon()
    });
};
exports.createEmbed = createEmbed;
