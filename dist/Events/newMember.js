"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: discord_js_1.Events.GuildMemberAdd,
    once: false,
    async execute(member, client) {
        const memberCoutChannelId = client.config?.Guild?.get(member.guild.id)?.memberCoutChannel?.id;
        if (!memberCoutChannelId)
            return;
        const channel = await client.channels.fetch(memberCoutChannelId);
        if (!channel)
            return;
        const guild = await client.guilds.fetch(member.guild.id);
        if (!guild)
            return;
        const memberCount = guild.memberCount;
        channel.setName(`Member count - ${memberCount}`);
    }
};
