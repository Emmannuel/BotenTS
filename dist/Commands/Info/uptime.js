"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");require('moment-duration-format');
moment.locale("es-mx")
const discord_js_1 = require("discord.js");
module.exports = async (client, interaction) => {
      let oldate = new Date().getMilliseconds()
      let newtime = new Date().getMilliseconds() - oldate;
      if(newtime < 0) newtime*=-1;
      let date = new Date()
      let timestamp = date.getTime() - Math.floor(client.uptime);
      let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      totalSeconds %= 86400;
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);
      let uptime = `${days} d, ${hours} h, ${minutes} m y ${seconds} s.`;
      interaction.reply({ embeds: [new  discord_js_1.EmbedBuilder()
      .setTitle("Tiempo Activo")
      .setDescription(` \`\`\`css\nUptime: ${uptime} \`\`\` `)
      .addFields({ name: "**Fecha de Inicio**", value: ` ${moment(timestamp).format("LLLL")} ` })
      .setColor(client.config.color)
      ]})
};
/* 
  Author @Emmanuel 19/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/