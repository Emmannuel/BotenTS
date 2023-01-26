"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Guild_1 = require("../Structures/db/Guild");
module.exports = {
    name: "set",
    description: "set the different logs channel",
    defaultMemberPermissions: discord_js_1.PermissionsBitField.StageModerator,
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "log",
            description: "set the general log channel",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Boolean,
                    name: "enable_log",
                    description: "set enable or disable the log system",
                    required: true
                },
                {
                    type: discord_js_1.ApplicationCommandOptionType.Channel,
                    name: "channel",
                    description: "channel",
                    required: false
                },
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "error",
            description: "set the error log channel",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Boolean,
                    name: "enable_error",
                    description: "set enable or disable the error log system",
                    required: true
                },
                {
                    type: discord_js_1.ApplicationCommandOptionType.Channel,
                    name: "channel",
                    description: "channel",
                    required: false
                },
            ]
        },
    ],
    async execute(client, interaction) {
        const { options, guildId } = interaction;
        const subCommand = options.getSubcommand();
        let channelQuery = options.getChannel("channel");
        const enable = options.getBoolean("enable_log") || options.getBoolean("enable_error") || false;
        if (enable && !channelQuery) {
            return client.Reply(interaction, "set log", "❌", "You have to input a channel if you want to set on the log", true);
        }
        if ((!channelQuery || !channelQuery.isTextBased()) && enable)
            return client.Reply(interaction, "Commmand log", "❌", "The channel provided is not a text based channel", true);
        switch (subCommand) {
            case "log": {
                await (0, Guild_1.updatelogChannel)(guildId, channelQuery, enable, client);
                await client.Reply(interaction, "Set log", "✅", `The log channel is now ${enable ? `set on : **${channelQuery}**` : '**disable**'}`, true);
                break;
            }
            case "error": {
                await (0, Guild_1.updateErrorChannel)(guildId, channelQuery, enable, client);
                await client.Reply(interaction, "Set log", "✅", `The error log channel is now ${enable ? `set on : **${channelQuery}**` : '**disable**'}`, true);
                break;
            }
            default: {
                return client.Reply(interaction, "Commmand log", "❌", "Error while updating the channel", true);
            }
        }
    }
};
