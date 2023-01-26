"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateErrorChannel = exports.updateMemberCountChannel = exports.updatelogChannel = exports.updateGuild = exports.getGuild = exports.getAllGuild = exports.deleteGuild = exports.createGuild = void 0;
const Session_1 = require("./Session");
const { GuildDB } = require('./Schema/Guild');
const createGuild = async (guildId) => {
    const blindtestSession = await (0, Session_1.createSession)(guildId);
    const guild = new GuildDB({
        guildId,
        language: "es",
        blindtestSession,
        musicSystem: false,
    });
    await guild.save();
    return guild;
};
exports.createGuild = createGuild;
const deleteGuild = async (guildId) => {
    return GuildDB.findOneAndDelete({ guildId });
};
exports.deleteGuild = deleteGuild;
const getAllGuild = async () => {
    const data = await GuildDB.find();
    for (let guild of data) {
        guild.blindtestSession.member = new Map(Object.entries(guild.blindtestSession.member));
        guild.blindtestSession.result = new Map(Object.entries(guild.blindtestSession.result));
    }
    return data;
};
exports.getAllGuild = getAllGuild;
const getGuild = async (guildId) => {
    const guild = await GuildDB.findOne({
        guildId
    });
    guild.blindtestSession.member = new Map(Object.entries(guild.blindtestSession.member));
    guild.blindtestSession.result = new Map(Object.entries(guild.blindtestSession.result));
    return guild;
};
exports.getGuild = getGuild;
const updateGuild = async (guildId, guild) => {
    return GuildDB.findOneAndUpdate({ guildId }, { ...guild });
};
exports.updateGuild = updateGuild;
const updatelogChannel = async (guildId, logChannel, enable, client) => {
    const channel = {
        id: enable ? logChannel.id : "",
        enable
    };
    await GuildDB.findOneAndUpdate({ guildId }, {
        logChannel: channel
    });
    const guild = client.config.Guild.get(guildId);
    if (!guild)
        return;
    guild.logChannel = channel;
};
exports.updatelogChannel = updatelogChannel;
const updateMemberCountChannel = async (guildId, memberCount, enable, client) => {
    const channel = {
        id: enable ? memberCount.id : "",
        enable,
        lastName: memberCount.name
    };
    await GuildDB.findOneAndUpdate({ guildId }, {
        memberCoutChannel: channel
    });
    const guild = client.config.Guild.get(guildId);
    if (!guild)
        return;
    guild.memberCoutChannel = channel;
};
exports.updateMemberCountChannel = updateMemberCountChannel;
const updateErrorChannel = async (guildId, errorChannel, enable, client) => {
    const channel = {
        id: enable ? errorChannel.id : "",
        enable
    };
    await GuildDB.findOneAndUpdate({ guildId }, {
        errorChannel: channel
    });
    const guild = client.config.Guild.get(guildId);
    if (!guild)
        return;
    guild.errorChannel = channel;
};
exports.updateErrorChannel = updateErrorChannel;
