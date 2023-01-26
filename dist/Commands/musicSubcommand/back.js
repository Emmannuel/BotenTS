"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    await queue.back();
    const song = await queue.current;
    await client.Reply(interaction, "Command back", "✅", `Back to **${song.title}**`);
};
