"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ButtonBuilder, ActionRowBuilder, EmbedBuilder , discord } = require('discord.js');
const os = require('os');
const cpuStat = require("cpu-stat");
module.exports = async (client, interaction) => {
  cpuStat.usagePercent(function (e, percent, seconds) {
    interaction.reply({ 
      embeds: [new EmbedBuilder()   .setColor(client.config.color)  .addFields({ name: '<:edit:969160338023014450> General', value: `\`\`\`yaml\nNombre: ${client.user.tag}\nPing: ${Math.round(client.ws.ping)}ms\nUptime: ${Math.floor(client.uptime / 86400000)} dias, ${Math.floor(client.uptime / 3600000) % 24} horas, ${Math.floor(client.uptime / 60000) % 60} minutos, ${Math.floor(client.uptime / 1000) % 60} segundos\`\`\``},{name: '<:users:969158481418551317> Informacion', value: `\`\`\`yaml\nServidores: ${Math.ceil(client.guilds.cache.size)} \nUsuarios: ${client.guilds.cache.map(x => x.memberCount ?? 0).reduce((a, b) => a + b)} (Cantidad de usuarios que usaron el bot una semana atras.)\nFecha de creación: 12-11-2022\nComandos: 30\`\`\``},{name:'<:pin:969158404314628106> Desarollo', value:  `\`\`\`yaml\nVersion: v1.0.0-dev\nNodeJS: ${process.version}\nPython: v3.8.11\nDiscord.js: 14.6.0\`\`\``},{name: '<:os:969165529422131201> Sistema', value: `\`\`\`yaml\nOS: Linux | Ubuntu\nCPU Uso: ${percent.toFixed(2)}/100\nCPU Modelo: ${os.cpus().map((i) => i.model)[0]}\nRAM Uso: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/64 GB\nBackups: 1/3\nDatabase: 1/3\nHost: Google Cloud LLC\`\`\``},{name: '<:owner:969158499596652594> Desarollador', value: `\`\`\`yaml\nNombre: Emmaanuel#3838 | 780153320722923540\`\`\``},{name: '<:links:969160320583102494> Links Importantes', value: `**[Invitame](https://discord.com/api/oauth2/authorize?client_id=959103746560897104&permissions=8&scope=bot%20applications.commands)・[Soporte](https://discord.gg/YZFZnemwMK)・[Web](https://botspirit.me)**`})] 
    }); })
}
/* 
  Author @Emmanuel 20/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/