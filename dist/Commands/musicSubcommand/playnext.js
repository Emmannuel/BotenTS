"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = async (client, queue, interaction) => {
    const { options, user } = interaction;
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const query = options.getString("name");
    const tracks = await client.player.search(query, {
        requestedBy: user,
    });
    if (!tracks || !tracks.tracks.length)
        return await client.Reply(interaction, "Music command", "❌", `I'm sorry but track **${query}** not found`, true);
    await queue.insert(tracks.tracks[0]);
    const embed = new discord_js_1.EmbedBuilder()
        .setImage(tracks.tracks[0].thumbnail)
        .setTitle("✅ | Insert track **" + tracks.tracks[0].title + "** at the position at the top af the queue")
        .setDescription(`By : ${tracks.tracks[0].author} | duration : ${tracks.tracks[0].duration} | request by ${tracks.tracks[0].requestedBy}`)
        .setColor(client.config.color)
        .setURL(tracks.tracks[0].url);
    await client.replyEmbed(interaction, embed);
};
