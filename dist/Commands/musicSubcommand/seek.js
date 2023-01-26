"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    const { options } = interaction;
    if (!queue || !queue.playing) {
        return await client.Reply(interaction `Command ${client.interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const time = options.getInteger('time');
    await queue.seek(time * 1000);
    await client.Reply(interaction, 'Command seek', "✅", `Seeked to ${time} secondes`);
};
