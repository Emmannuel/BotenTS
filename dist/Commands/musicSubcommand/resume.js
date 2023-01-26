"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${client.interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    queue.setPaused(false);
    await client.Reply(interaction, "Command resume", "✅", "Tracke paused");
};
