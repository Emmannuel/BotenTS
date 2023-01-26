"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Guild_1 = require("../Structures/db/Guild");
module.exports = {
    name: "member_count",
    description: "set the member count channel",
    defaultMemberPermissions: discord_js_1.PermissionsBitField.StageModerator,
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Boolean,
            name: "enable",
            description: "set enable or disable the member count channel",
            required: true
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Channel,
            name: "channel",
            description: "channel",
            required: false
        },
    ],
    async execute(client, interaction) {
        const { options, guildId, guild } = interaction;
        const lastChannel = client.config.Guild.get(guildId)?.memberCoutChannel;
        if (lastChannel && lastChannel.id && lastChannel.lastName.length > 1) {
            const channel = await client.channels.fetch(lastChannel?.id);
            if (channel) {
                await channel.setName(lastChannel.lastName);
            }
        }
        const channelQuery = options.getChannel("channel");
        const enable = options.getBoolean("enable");
        if (enable && !channelQuery) {
            return client.Reply(interaction, "set log", "❌", "You have to input a channel if you want to set on the member count display", true);
        }
        await (0, Guild_1.updateMemberCountChannel)(guildId, channelQuery, enable, client);
        if (enable) {
            const memberCount = guild?.memberCount.toString();
            if (!memberCount)
                return;
            await channelQuery.setName(`Member count - ${memberCount}`);
        }
        await client.Reply(interaction, "Set log", "✅", `The member count channel is now ${enable ? `set on : **${channelQuery}**` : '**disable**'}`, true);
    }
};
