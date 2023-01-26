"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${client.interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    queue.skip();
    const track = queue.tracks[0];
    return await client.Reply(interaction, "Command skip", "✅", `Music skip to : **${track.title}**`);
};
