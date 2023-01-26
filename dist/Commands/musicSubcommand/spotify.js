"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = require("../../utils/embed");
module.exports = async (client, queue, interaction) => {
    const { options, user, guild, channel, member } = interaction;
    await interaction?.deferReply();
    const spotifyClient = client.spotifyClient;
    const query = options.getString('name');
    const type = options.getString('type');
    const option = { types: [type], limit: 1 };
    const { albums, tracks, episodes } = await spotifyClient.search(query, option);
    const musicUrl = albums ? albums : tracks ? tracks : episodes ? episodes : null;
    if (!musicUrl || !musicUrl[0])
        return await client.editReply(interaction, "Music command", "❌", `I'm sorry but track **${query}** not found`);
    let url = musicUrl[0].externalURL?.spotify;
    if (!queue) {
        queue = await client.player.createQueue(guild, {
            metadata: {
                channel: channel,
                leaveOnEmptyCooldown: 100,
                leaveOnStop: true
            },
            ytdlOptions: {
                filter: 'audioonly',
                highWaterMark: 1 << 30,
                dlChunkSize: 0,
            },
        });
    }
    try {
        if (!queue.connection) {
            await queue.connect(member.voice.channel);
        }
    }
    catch (err) {
        client.player.deleteQueue(guild);
        return await client.editReply(interaction, "Error music", "❌", "Could not join your voice channel!");
    }
    if (!url)
        return;
    const tracksPlayer = await client.player.search(url, {
        requestedBy: user,
    });
    if (!tracksPlayer || !tracksPlayer.tracks.length)
        return await client.editReply(interaction, "Music command", "❌", `I'm sorry but track **${query}** not found`);
    tracksPlayer.playlist ? queue.addTracks(tracksPlayer.tracks) : queue.addTrack(tracksPlayer.tracks[0]);
    if (!queue.playing)
        await queue.play();
    const embed = await (0, embed_1.createEmbed)(client);
    embed.setImage(tracksPlayer.tracks[0].thumbnail)
        .setTitle("✅ | Add to queue - **" + tracksPlayer.tracks[0].title + "**")
        .setDescription(`By : ${tracksPlayer.tracks[0].author} | duration : ${tracksPlayer.tracks[0].duration} | request by ${tracksPlayer.tracks[0].requestedBy}`)
        .setURL(tracksPlayer.tracks[0].url);
    await interaction.editReply({ embeds: [embed] });
};
