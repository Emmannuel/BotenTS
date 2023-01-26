"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const np = queue.nowPlaying();
    const pb = queue.createProgressBar();
    const embed = new discord_js_1.EmbedBuilder()
        .setTitle(np.title ? np.title : null)
        .setDescription(np.description ? np.description + "\n" + pb : pb)
        .setURL(np.url ? np.url : null)
        .setThumbnail(np.thumbnail);
    await client.replyEmbed(interaction, embed);
};
