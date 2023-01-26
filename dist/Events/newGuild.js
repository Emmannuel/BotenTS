"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Guild_1 = require("../Structures/db/Guild");
module.exports = {
    name: discord_js_1.Events.GuildCreate,
    once: false,
    async execute(guild, client, interaction) {
        const data = await (0, Guild_1.createGuild)(guild.id);
        client.config.Guild.set(data.guildId, data);
        const c = client.channels.cache.get("1044309552218255411");
        const u = guild.ownerId;
        if(!Channel || !Channel.isTextBased())
            return;
        await Channel.send({ embeds: [new discord_js_1.EmbedBuilder().setTitle("Nuevo Servidor.").setDescription(`**__Informacion del servidor:__**\nNombre: ${guild.name} - ${guild.id}\nDueño: ${u.tag} - ${guild.ownerId}`).setThumbnail({url: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=4096`}) ]});
      
          /*client.logger("Event", "Guild add", `Guild name : ${guild.name} | guild id : ${guild.id}`);*/
        
    }
};
