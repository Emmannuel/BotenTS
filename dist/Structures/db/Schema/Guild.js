"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildDB = exports.Guild = void 0;
const mongoose_1 = require("mongoose");
exports.Guild = new mongoose_1.Schema({
    guildId: {
        type: String,
        index: true,
        required: true
    },
    language: {
        type: mongoose_1.Schema.Types.String,
        default: "en"
    },
    logChannel: {
        id: {
            type: mongoose_1.Schema.Types.String
        },
        enable: {
            type: mongoose_1.Schema.Types.Boolean,
            default: false
        }
    },
    errorChannel: {
        id: {
            type: mongoose_1.Schema.Types.String
        },
        enable: {
            type: mongoose_1.Schema.Types.Boolean,
            default: false
        }
    },
    memberCoutChannel: {
        id: {
            type: mongoose_1.Schema.Types.String
        },
        enable: {
            type: mongoose_1.Schema.Types.Boolean,
            default: false
        },
        lastName: {
            type: mongoose_1.Schema.Types.String,
            default: ""
        }
    },
    blindtestSession: Object,
    musicSystem: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
    }
});
exports.GuildDB = (0, mongoose_1.model)('Guild', exports.Guild);
