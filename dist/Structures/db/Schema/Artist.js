"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistDB = exports.ArtistSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ArtistSchema = new mongoose_1.Schema({
    artistName: {
        type: mongoose_1.Schema.Types.String,
        index: true,
        required: true
    },
    tracks: {
        type: mongoose_1.Schema.Types.Map,
        required: true,
        default: null
    }
});
exports.ArtistDB = (0, mongoose_1.model)('Artist', exports.ArtistSchema);
