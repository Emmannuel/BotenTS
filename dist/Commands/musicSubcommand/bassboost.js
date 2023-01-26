"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const enable = interaction.options.getBoolean("enable");
    const actualFilter = queue.getFiltersEnabled();
    let filter = {
        bassboost_high: enable,
    };
    actualFilter.forEach(f => {
        if (f !== "bassboost_high") {
            filter[f] = true;
        }
        else {
            filter[f] = enable;
        }
    });
    await queue.setFilters(filter);
    return await client.Reply(interaction, "Command bassboost", "✅", `bassboost filter set to **${enable ? "enable" : "disable"}**`, true);
};
