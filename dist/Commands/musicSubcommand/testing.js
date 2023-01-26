"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_player_1 = require("discord-player");
module.exports = async (client, queue, interaction) => {
    if (!interaction)
        return;
    const { options, user, guild, channel, member } = interaction;
    queue = await client.player.createQueue(guild, {
        metadata: {
            channel: channel,
            leaveOnEmptyCooldown: 1000,
            leaveOnStop: true
        },
        ytdlOptions: {
            filter: 'audioonly',
            highWaterMark: 1 << 30,
            dlChunkSize: 0,
        },
    });
    try {
        if (!queue.connection) {
            await queue.connect(member.voice.channel);
        }
    }
    catch (err) {
        client.player.deleteQueue(guild);
        return await client.Reply(interaction, "Error music", "❌", "Could not join your voice channel!", true);
    }
    const tracks = await client.player.search("https://www.youtube.com/watch?v=o5u0iyr8DT4&list=OLAK5uy_kWvGPCOHvJjV3-dr3t1dDARSwYgvCyYaE", {
        requestedBy: user,
    });
    if (!tracks || !tracks.tracks.length)
        return await client.Reply(interaction, "Music command", "❌", `no track found`, true);
    tracks.playlist ? queue.addTracks(tracks.tracks) : queue.addTrack(tracks.tracks[0]);
    if (!queue.playing) {
        await queue.play();
    }
    queue.shuffle();
    await queue.setFilters({
        normalizer: true,
        bassboost_low: true
    });
    queue.setRepeatMode(discord_player_1.QueueRepeatMode.QUEUE);
    return client.Reply(interaction, "Oops", "👹", "You want to play lets play", true);
};
