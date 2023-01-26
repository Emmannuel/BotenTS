"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
module.exports = {
    name: discord_js_1.Events.InteractionCreate,
    once: false,
    async execute(interaction, client) {
        const { user, guild, commandName, type } = interaction;
        if (type !== discord_js_1.InteractionType.ApplicationCommand)
            return;
        const command = client.commands.get(commandName);
        if (!command) {
            await interaction.reply({ embed: [new discord_js_1.EmbedBuilder().setTitle("Ocurrio un error").setDescription(`Parece que el comando que ejecutaste ya no existe :(.\nBorrando el comando del servidor en 5 segundos.`).setColor(client.config.color) ], ephemeral: true});
            return client.commands.delete(command);
        }
        await command.execute(client, interaction);
        await client.logger("Comando", interaction.commandName, ` | Usuario : ${user.tag} - ${user.id} en el servidor : ${guild?.name} - ${guild?.id}`, guild);
    }
};
