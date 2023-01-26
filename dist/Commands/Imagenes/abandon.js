"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
module.exports = async (client, interaction) => {
  const { options } = interaction;
  const m = interaction.member;
      var text = options.getString("texto");
      client.memer.abandon(text).then(image => {
        var attachment = new AttachmentBuilder(image, "abandon.png");
        interaction.reply({/*embeds : [ new EmbedBuilder()          .setColor(client.config.color)
.setAuthor({ name: "Meme de:"})
          .setImage(new AttachmentBuilder(image, "abandon.png"))
        ]*/ files: [attachment ]}).catch(() => null)
      })
};
