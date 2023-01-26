"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
const discord_player_1 = require("discord-player");
const Guild_1 = require("./db/Guild");
const embed_1 = require("../utils/embed");
const consola = require('consola');
const Spotify = require("spotify-api.js");
class Bot extends discord_js_1.Client {
    commands;
    config;
    spotifyClient;
    player;
    constructor(options, config) {
        super(options);
        this.commands = new discord_js_1.Collection();
        this.config = config;
        this.player = new discord_player_1.Player(this);
        this.spotifyClient = new Spotify.Client({ token: { clientID: this.config.env.spotifyClientId, clientSecret: this.config.env.spotifySecret } });
    }
    async Reply(interaction, title, emoji, content, ephemeral = false) {
        const e = await (0, embed_1.createEmbed)(this);
        e.setDescription(emoji + ' | ' + content).setTitle(title);
        try {
            await interaction?.reply({ embeds: [e], ephemeral: ephemeral });
        }
        catch (e) {
            console.log(e);
        }
    }
    async editReply(interaction, title, emoji, content) {
        const e = await (0, embed_1.createEmbed)(this);
        e.setDescription(emoji + ' | ' + content).setTitle(title);
        try {
            await interaction?.editReply({ embeds: [e] });
        }
        catch (e) {
            console.log(e);
        }
    }
    async replyEmbed(interaction, embed) {
        try {
            await interaction?.reply({ embeds: [embed] });
        }
        catch (e) {
            console.log(e);
        }
    }
    async logger(type, name, description, guild = null) {
        consola.success(`[${type}][${name}] ${description}`);
        if (!guild)
            return;
        const guildDB = await (0, Guild_1.getGuild)(guild.id);
        if (!guildDB.logChannel?.enable)
            return;
        const channelId = guildDB.logChannel?.id;
        if (!channelId)
            return;
        const channel = await this.channels.fetch(channelId);
        if (!channel || !channel?.isTextBased())
            return;
        const e = await (0, embed_1.createEmbed)(this);
        e.setTitle(`Log | type : ${type}`).setDescription(`${name} | ${description}`);
        await channel.send({ embeds: [e] });
    }
}
exports.Bot = Bot;
