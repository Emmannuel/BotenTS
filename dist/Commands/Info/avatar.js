"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ButtonBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');
module.exports = async (client, interaction) => {
  const { options } = interaction;
  var u = options.getUser("usuario");
    let avatar = u.displayAvatarURL({
      dynamic: false,
      format: "png", 
      size: 4096
    });
  let apng =  new ButtonBuilder().setStyle('5').setLabel("PNG").setURL(`${avatar.replace('webp', 'png')}`)
  let ajpg =  new ButtonBuilder().setStyle('5').setLabel("JPG").setURL(`${avatar.replace('webp', 'jpg')}`)
  let awebp =  new ButtonBuilder().setStyle('5').setLabel("WEBP").setURL(`${avatar}`)
  interaction.reply({ embeds: [new EmbedBuilder().setTitle(`Avatar de: ${u.tag}`).setColor(client.config.color).setImage(`${avatar.replace('webp', 'png')}`)], components: [new ActionRowBuilder().addComponents([apng, ajpg, awebp])]})
} 
/* 
  Author @Emmanuel 20/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/