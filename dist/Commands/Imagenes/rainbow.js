"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const canvacord =  require("canvacord");
module.exports = async (client, interaction) => {
  const { options } = interaction;
  const m = interaction.member.user;
      var u = options.getUser("usuario");
      let avatar = u.displayAvatarURL({
      dynamic: false,
      format: "png", 
      size: 4096
    });
  let image = await canvacord.Canvas.rainbow(avatar);
    let attachment = await new AttachmentBuilder(image, "rainbow.png");
  interaction.reply({files: [attachment]})
};
