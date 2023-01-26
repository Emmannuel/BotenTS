"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ButtonBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');
module.exports = async (client, interaction) => {
  let button_public_invite = new ButtonBuilder().setStyle('5').setLabel("Invitar al bot").setURL("https://discord.com/api/oauth2/authorize?client_id=959103746560897104&permissions=8&scope=bot%20applications.commands")
	    let button_support_dc = new ButtonBuilder().setStyle('5').setLabel("Servidor").setURL("https://discord.gg/YZFZnemwMK")
        let button_invite = new ButtonBuilder().setStyle('5').setLabel("Web").setURL("https://emmaa.ga")
        const allbuttons = [new ActionRowBuilder().addComponents([button_public_invite, button_support_dc, button_invite])]
  return interaction.reply({ embeds: [new EmbedBuilder()
            .setColor(client.config.color)
            .setTimestamp()
            .setTitle("Informacion del desarollador.")
            .setDescription(`[**・Nombre:** \`Emmanuel\` ]\n[**・Languajes:** \`C/C++, JS/TS, JAVA, HTML\` ]\n[**・Edad:** \`16\` ] \n[**・Pais:** \`México\` :flag_mx: ]\n[**・H3GroupLTD:** \`Owner\` -> \`.gg/KgupwEGWNX\` ]\n[**・Instagram:** \`@its_a.emmaa\`\n ** ・Github:** \`@Emmannuel\` ] `)
            .setImage('https://cdn.discordapp.com/attachments/1022301803896901643/1043936356818235413/languages.png')], components: allbuttons })                          
};
/* 
  Author @Emmanuel 20/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/