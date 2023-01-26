"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: "imagenes",
    description: "Comandos de imagenes divertidos.",
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "abandon",
            description: ".", 
            options: [ {
              type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "texto",
                    description: "Texto deseado.",
                    required: true
            }
           ]
        },
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand, 
        name: "rainbow", 
        description: "Gay?! 👀 ",
        options: [{
          type: discord_js_1.ApplicationCommandOptionType.User,
                    name: "usuario",
                    description: "Usuario deseado.",
                    required: true
        }]
      },
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand, 
        name: "affect", 
        description: " a",
        options: [{
          type: discord_js_1.ApplicationCommandOptionType.User,
                    name: "usuario",
                    description: "Usuario deseado.",
                    required: true
        }]
      }
    ],
    async execute(client, interaction) {
        const { options } = interaction;
      const member = interaction.member;
        const subcommand = options.getSubcommand();
        await require(`./Imagenes/${subcommand}`)(client, interaction);
    }
};