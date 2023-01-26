"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ButtonBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const {inspect} = require('util');
module.exports = async (client, interaction) => {
  const { options } = interaction;
  let a = "780153320722923540";
  if(!a.includes(interaction?.member?.id)){
    return interaction.reply({ embeds: [new EmbedBuilder().setTitle("Lo siento :(").setDescription("Este comando solo esta disponible para:\nEmmaanuel#3838 - 780153320722923540").setColor(client.config.color)]})
  }
  var u = options.getString("codigo");
  try {
          const en = u
            const evaluado = await eval(u);
            const truncado = truncar(inspect(evaluado), 2045);
            interaction.reply({
                embeds: [new EmbedBuilder()
                .setTitle(`Evaluación JS/TS`)
                .setDescription(`**Salida**\n\`\`\`js\n${truncado}\`\`\``)
                .addFields({ name:"Entrada", value: `\`\`\`ini\n[${en}]\`\`\``},{ name: "Tiempo", value:`\`\`\`fix\n${client.ws.ping}ms\`\`\``})
                .setColor(client.config.color)
                .setTimestamp()
            ]
            })
        } catch (e){
              interaction.reply({ embeds: [new EmbedBuilder()
                .setTitle(`Error de evaluación`)
                .setDescription(`\`\`\`js\n${e.toString().substring(0, 2048)}\`\`\``)
                .setColor("FF0000")
                .setTimestamp()
            ]
            })
        }
}
function truncar(texto, n){
    if(texto.length > n){
        return texto.substring(0, n) + "..."
    } else {
        return texto;
    }
} 