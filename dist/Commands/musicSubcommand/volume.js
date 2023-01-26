"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    const { options } = interaction;
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const vol = options.getInteger("set");
    if (vol > 100 || vol < 0)
        return await client.Reply(interaction, 'Command volume', "❌", "Volume must be between 0 and 100", true);
    queue.setVolume(vol);
    await client.Reply(interaction, 'Command volume', "✅", `Volume set to \`${vol}\``);
};
