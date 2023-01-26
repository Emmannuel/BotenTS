"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const DIG = require("discord-image-generation");
module.exports = async (client, interaction) => {
  const { options } = interaction;
  const m = interaction.member.user;
  var u = options.getUser("usuario");
  const avatar = u.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });
        new DIG.Affect().getImage(avatar.replace('webp', 'png'), 43);
        let img = await new DIG.Affect().getImage(avatar.replace('webp', 'png'));
        let attach = new AttachmentBuilder(img, "affect.png");
        interaction.reply({files: [attach]})
};
