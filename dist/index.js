"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const { GatewayIntentBits } = require("discord-api-types/v10");
const { Partials, Collection } = require("discord.js");
const { Bot } = require('./Structures/Bot');
const validEnv = require('./utils/validEnv');
(async () => {
    validEnv();
    const config = {
        env: {
            token: process.env.BOT_TOK,
            spotifyClientId: process.env.SPOTIFY_CLIENTID,
            spotifySecret: process.env.SPOTIFY_SECRET,
            mongoUri: process.env.DATABASE_URI,
        },
        color: "#2f3136",
        dev: process.env.MODE || "dist",
        Guild: new Map()
    };
    const client = new Bot({
        intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.Guilds, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.MessageContent],
        partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User, Partials.GuildScheduledEvent],
        allowedMentions: { parse: ["everyone", "users", "roles"] }
    }, config);
    client.commands = new Collection();
    const files = fs.readdirSync(`./${client.config.dev}/Handler`);
    files.forEach(file => {
        require(`./Handler/${file}`)(client);
    });
    await mongoose_1.default.connect(client.config.env.mongoUri);
    module.exports = client;
    await client.login(client.config.env.token);
  const Meme = require("memer-api");
client.memer = new Meme("cvkjPoeisHJ"); 
})();
/* 
  Author @Emmanuel 19/11/2022
  Spirit Version 1.0 (JS/TS).
  Discord.js@14.6.0 / NodeJS@16.13.2 - Version LTS 
*/

