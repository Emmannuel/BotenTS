"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionUser = exports.createSession = void 0;
const createSession = async (guildId) => {
    return {
        guildId,
        round: 0,
        createdAt: new Date(),
        terminate: true,
        result: new Map(),
        member: new Map(),
    };
};
exports.createSession = createSession;
const createSessionUser = (user, guildId) => {
    return {
        id: user.id,
        tag: user.tag,
        guildId,
        resultRound: new Map(),
        point: 0
    };
};
exports.createSessionUser = createSessionUser;
