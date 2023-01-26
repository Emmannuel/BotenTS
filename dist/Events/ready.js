"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ms_1 = tslib_1.__importDefault(require("ms"));
const Guild_1 = require("../Structures/db/Guild");
const { createGuild } = require('../Structures/db/Guild');
module.exports = {
    name: discord_js_1.Events.ClientReady,
    once: true,
    async execute(client) {
        const activityName = ["Spirit in TS soon..."];
        let status;
        let activity;
        setInterval(async () => {
            if (new Date().getHours() < 23 && new Date().getHours() > 6) {
                status = "online";
                activity = activityName[Math.floor(Math.random() * (activityName.length - 1))] + "  |  use /help";
            }
            else {
                status = "idle";
                activity = "go bed right now";
            }
            await client.user?.setPresence({ activities: [{ name: activity, type: discord_js_1.ActivityType.Watching }], status });
        }, (0, ms_1.default)("3m"));
        const guildDB = await (0, Guild_1.getAllGuild)();
        for (let guild of guildDB) {
            client.config.Guild?.set(guild.guildId, guild);
        }
        const guildsBot = await client.guilds.fetch();
        for (let guild of guildsBot.values()) {
            if (!client.config.Guild?.has(guild.id)) {
                client.config.Guild.set(guild.id, await createGuild(guild.id));
            }
        }
        await client.logger("Evento", "Ready", `Enecendido en: ${client?.user?.tag || "No se conecto"}`);
    }
};
