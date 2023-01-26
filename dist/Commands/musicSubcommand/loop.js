"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    const { options } = interaction;
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const mode = options.getInteger("type");
    if (queue.repeatMode === mode)
        return await client.Reply(interaction, `Command loop`, "❌", `the loop mode : ${queue.repeatMode} is already enable`, true);
    queue.setRepeatMode(mode);
    await client.Reply(interaction, "Command loop", "✅", `Loop mode set to : ${mode}`);
};
