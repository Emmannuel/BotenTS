"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ButtonBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');
const colors = require('colors');
module.exports = async (client, interaction) => {
  const { options } = interaction;
  let color = options.getString("hex");
		try {
      const url = (`https://api.alexflipnote.dev/colour/${color.includes("#") ?color.split("#")[1] : color }`)
      let json;
      try {
        json = await fetch(url).then(res => res.json())
      } catch (e) {
        return interaction.reply({content: `\`\`\`fix\n${e.message ? e.message : e}\n\`\`\``, ephemeral: true})
      }
      if (json.error) return interaction.reply({content: `\`\`fix\n${json.error}\n\`\`\``, ephemeral: true})
      const embed = new EmbedBuilder()
        .setTitle(`Informacion del color ${color}`)
        .addFields({name:"・**Nombre:**", value:json.name},{name:"・**Hex:**", value: json.hex},{name:"・**RGB:**", value: json.rgb},{name: `**Brightness:**`, value: json.brightness})
        .setThumbnail(json.image)
        .setColor(json.hex)
      interaction.reply({ embeds: [embed] })
    } catch (e) {
      console.log(e)
    }
}