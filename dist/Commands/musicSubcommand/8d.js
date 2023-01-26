"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async (client, queue, interaction) => {
    if (!queue || !queue.playing) {
        return await client.Reply(interaction, `Command ${interaction?.options.getSubcommand()}`, "❌", "I don't find music on your channel sorry", true);
    }
    const enable = interaction?.options.getBoolean("enable");
    const actualFilter = queue.getFiltersEnabled();
    let filter = {
        "8D": enable
    };
    actualFilter.forEach(f => {
        if (f !== "8D") {
            filter[f] = true;
        }
        else {
            filter[f] = enable;
        }
    });
    await queue.setFilters(filter);
    return await client.Reply(interaction, "Command 8D", "✅", `8D filter set to **${enable ? "enable" : "disable"}**`, true);
};
