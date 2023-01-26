"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = require("../utils/embed");
module.exports = async (client) => {
    const embed = await (0, embed_1.createEmbed)(client);
    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, p);
        const Channel = client.channels.cache.get("1042863098761068564");
        if (!Channel || !Channel.isTextBased())
            return;
        Channel.send({
            embeds: [
                embed.setDescription("**Unhandled Rejection/Catch :\n\n** ```js\n" + reason + "```")
            ]
        });
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(err, origin);
        const Channel = client.channels.cache.get("1042863098761068564");
        if (!Channel || !Channel.isTextBased())
            return;
        Channel.send({
            embeds: [
                embed.setDescription("**Uncaught Exception/Catch :\n\n** ```js\n" + err + "\n\n" + origin.toString() + "```")
            ]
        });
    });
    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(err, origin);
        const Channel = client.channels.cache.get("1042863098761068564");
        if (!Channel || !Channel.isTextBased())
            return;
        Channel.send({
            embeds: [
                embed.setDescription("**Uncaught Exception/Catch (MONITOR):\n\n** ```js\n" + err + "\n\n" + origin.toString() + "```")
            ]
        });
    });
};
