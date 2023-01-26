"use strict";
module.exports = () => {
    if (!process.env.BOT_TOKEN) {
        throw new Error("Invalid discord token");
    }
    if (!process.env.SPOTIFY_CLIENTID) {
        throw new Error("Invalid spotify client id");
    }
    if (!process.env.SPOTIFY_SECRET) {
        throw new Error("Invalid spotify client id");
    }
    if (!process.env.DATABASE_URI) {
        throw new Error("Invalid mongo uri");
    }
    return true;
};
