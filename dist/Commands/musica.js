"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_player_1 = require("discord-player");
const discord_js_1 = require("discord.js");
module.exports = {
    name: "musica",
    description: "Administrador de musica",
    options: [
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "play",
            description: "Reproduce una canción. ",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "nombre",
                    description: "Nombre o url de la canción. ",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "stop",
            description: "Paras la música. ",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "skip",
            description: "Salta la canción.",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "pause",
            description: "Pausas la canción. ",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "resume",
            description: "Vuelve a reproducir la canción. ",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "shuffle",
            description: "MEzclar la musica.",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "queue",
            description: "Muestra la lista de canciones.",
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "nowplaying",
            description: "Muestra la cancion actual."
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "back",
            description: "Vuelve a la cancion anterior."
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "clear",
            description: "Limpia la lista."
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "info",
            description: "Muestra informacion de la cancnion actual."
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "spotify",
            description: "Spotify playlist",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "type",
                    description: "Tipo de busqueda.",
                    required: true,
                    choices: [
                        {
                            name: "album",
                            value: "album"
                        },
                        {
                            name: "track",
                            value: "track"
                        },
                        {
                            name: "episode",
                            value: "episode"
                        }
                    ]
                },
                {
                    type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "name",
                    description: "Nombre de la busqueda.",
                    required: true,
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "skip_to",
            description: "Saltar a la posicion deseada.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Integer,
                    name: "position",
                    description: "Posición a la cancion en la espera 0 - n",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "insert",
            description: "Inserta una pista.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "name",
                    description: "Nombre o url de la cancion.",
                    required: true
                },
                {
                    type: discord_js_1.ApplicationCommandOptionType.Integer,
                    name: "index",
                    description: "Index",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "seek",
            description: "Seek to the given time",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Integer,
                    name: "time",
                    description: "Tiempo (segundos).",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "volume",
            description: "Ajustar el volumen de la pista.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Integer,
                    name: "set",
                    description: "Volumen - (0/100).",
                    required: true
                },
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "playnext",
            description: "Agregar una canción al principio de la lista.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.String,
                    name: "name",
                    description: "Nombre o url de la cancion.",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "bassboost",
            description: "Establecer el filtro de mejora de graves.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Boolean,
                    name: "enable",
                    description: "Habilita o desabilita el filtro.",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "8d",
            description: "Configure el filtro 8D (puede ser triste con música ultra potenciada)",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Boolean,
                    name: "enable",
                    description: "enable or disable the filter",
                    required: true
                }
            ]
        },
        {
            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
            name: "loop",
            description: "Establece un modo bucle.",
            options: [
                {
                    type: discord_js_1.ApplicationCommandOptionType.Integer,
                    name: "type",
                    description: "Tipo de modo.",
                    required: true,
                    choices: [
                        {
                            name: 'Off',
                            value: discord_player_1.QueueRepeatMode.OFF
                        },
                        {
                            name: 'Track',
                            value: discord_player_1.QueueRepeatMode.TRACK
                        },
                        {
                            name: 'Queue',
                            value: discord_player_1.QueueRepeatMode.QUEUE
                        },
                        {
                            name: 'Autoplay',
                            value: discord_player_1.QueueRepeatMode.AUTOPLAY
                        }
                    ]
                }
            ]
        },
    ],
    async execute(client, interaction) {
        const { options, guild } = interaction;
        /*if (!client.config.Guild.get(guild?.id)?.blindtestSession?.terminate) {
            return await interaction.reply({ content: "You can't use music system with a blindtest session i'm sorry  😥", ephemeral: true });
        }*/
        const member = interaction.member;
        const subcommand = options.getSubcommand();
        const queue = client.player.getQueue(guild);
        if (!member?.voice.channel)
            return client.Reply(interaction, `Comando ${subcommand}`, "❌", "No estás en un canal de voz.", true);
        await require(`./musicSubcommand/${subcommand}`)(client, queue, interaction);
    }
};
