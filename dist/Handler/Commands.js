"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const fs = tslib_1.__importStar(require("fs"));
const ms_1 = tslib_1.__importDefault(require("ms"));
module.exports = async (client) => {
    const minMusicCommand = ["play", "stop", "pause", "resume", "skip", "nowplaying", "queue", "set"];
    const commandFiles = fs.readdirSync(`./${client.config.dev}/Commands/`).filter(file => (file.endsWith(client.config.dev === "src" ? ".ts" : '.js')));
    const pushCommand = async () => {
        const guilds = await client.guilds.fetch();
        for (let guild of guilds.values()) {
            const full = client.config.Guild.get(guild.id)?.musicSystem;
            const CommandsArray = [];
            commandFiles.map(async (file) => {
                const command = require(`../Commands/${file}`);
                const data = { ...command };
                await client.commands.set(data.name, data);
                if (file === "music.js" && !full) {
                    data.options = data.options.filter((option) => minMusicCommand.includes(option.name));
                }
                CommandsArray.push(data);
            });
            client.guilds.fetch(guild.id).then(async (guildData) => {
                await guildData.commands.set([...CommandsArray]);
            });
        }
        setInterval(async () => await pushCommand(), (0, ms_1.default)("60s"));
    };
    client.once(discord_js_1.Events.ClientReady, async () => {
        await pushCommand();
    });
};
