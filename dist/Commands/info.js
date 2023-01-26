"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: "informacion",
    description: "Comandos de Informacion",
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "ping",
            description: "Devuelve el estado de respuesta del bot."  
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "desarollador",
            description: "Devuelve la informacion del desarollador."
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "uptime",
            description: "Devuelve el tiempo de encendido."
        }, 
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand, 
        name: "avatar", 
        description: "Devuelve el avatar del usuario. ",
        options: [{
          type: discord_js_1.ApplicationCommandOptionType.User,
                    name: "usuario",
                    description: "Usuario deseado.",
                    required: true
        }]
      },
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand,
        name: "botinfo",
        description: "Devuelve la informacion del bot.",
      }, 
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand,
        name: "eval", 
        description: "Evaluas un codigo. Solo owners.", 
        options: [{
          type: discord_js_1.ApplicationCommandOptionType.String, 
          name: "codigo", 
          description: "Ingresa el codigo a evaluar JS/TS.",
          required: true
        }]
      },
      {
        type: discord_js_1.ApplicationCommandOptionType.Subcommand,
        name: "color",
        description: "Devuelve informacion del color proporcionado.",
        options: [{
          type: discord_js_1.ApplicationCommandOptionType.String,
          name: "hex",
          description: "Color en hex. (#fffff).",
          required: true
        }]
      }
    ],
    async execute(client, interaction) {
        const { options } = interaction;
        const subcommand = options.getSubcommand();
        await require(`./Info/${subcommand}`)(client, interaction);
    }
};