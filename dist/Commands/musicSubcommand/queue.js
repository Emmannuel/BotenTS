"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${client.interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const embed = new discord_js_1.EmbedBuilder()
        .setTitle("Queue");
    const tracks = queue.tracks.slice(0, 7).map((m, i) => {
        return `${i + 1}. **${m.title}** duration : \`${m.duration}\` ([link](${m.url}))`;
    });
    if (tracks.length > 0) {
        embed.setDescription(`${tracks.join('\n')}${queue.tracks.length > 5 ? `\n...${queue.tracks.length - 5} more track(s)` : ''}`);
    }
    embed.addFields({
        name: "nowplaying",
        value: `title : **${queue.current.title}**`
    });
    await client.replyEmbed(interaction, embed);
};
