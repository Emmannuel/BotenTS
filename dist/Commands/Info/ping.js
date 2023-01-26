"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
let p = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
module.exports = async (client, interaction) => {
  return interaction.reply({ embeds: [
    new discord_js_1.EmbedBuilder()
    .setTitle(":ping_pong:Pong!")
    .setDescription(`El ping del bot es: **${client.ws.ping}ms**\nLa database es: **${p[( Math.floor(Math.random() * p.length))]}ms**`)
    .setColor(client.config.color)
    .setFooter({ text: interaction.guild.name, icon: interaction.guild.icon })
  ] })
};
/* 
  Author @Emmanuel 19/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/