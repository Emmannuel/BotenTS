"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: "trackStart",
    async execute(queue, track, client) {
        const guild = queue.guild;
        if (!client.config.Guild.get(guild.id)?.blindtestSession?.terminate)
            return;
        const voiceChannel = queue.connection.channel;
        if (!voiceChannel || !voiceChannel.isTextBased())
            return;
        const embed = new discord_js_1.EmbedBuilder()
            .setTitle("✅ | Reproduciendo " + track.title)
            .setDescription(`Por : ${track.author} | Duracion : ${track.duration} | Pedido por: ${track.requestedBy}`)
            .setColor(client.config.color)
            .setURL(track.url);
        return await voiceChannel.send({ embeds: [embed] });
    }
};
