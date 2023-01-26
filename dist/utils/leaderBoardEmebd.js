"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlindtestLeaderboardEmbed = void 0;
const embed_1 = require("./embed");
const BlindtestLeaderboardEmbed = async (session, client) => {
    const embed = await (0, embed_1.createEmbed)(client);
    embed.setTitle("Blindtest session");
    let leaderboardUser = '';
    const sortedUser = new Map([...session.member.entries()].sort((a, b) => b[1].point - a[1].point).slice(0, 3));
    let i = 1;
    for (let value of sortedUser.values()) {
        leaderboardUser += `${i} - **${value.tag}**\n`;
        i++;
    }
    embed.addFields({
        name: "User leaderboard",
        value: leaderboardUser ?? ""
    });
    let response = [];
    let size = 0;
    for (let [key, value] of session.result) {
        const s = `${parseInt(key, 10) + 1} - **${value.trackName}** by **${value.artistName}** [link](${value.trackUrl})\n`;
        if (size + s.length > 1000) {
            embed.addFields({
                name: "Track info :",
                value: response.join(" ")
            });
            size = 0;
            response = [];
        }
        response.push(s);
        size += s.length;
    }
    if (response) {
        embed.addFields({
            name: "Track info :",
            value: response.join(" ") ?? ""
        });
    }
    return embed;
};
exports.BlindtestLeaderboardEmbed = BlindtestLeaderboardEmbed;
