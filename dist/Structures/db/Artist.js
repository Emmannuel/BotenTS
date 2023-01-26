"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomTrack = exports.getRandomTrackName = exports.getRandomArtist = exports.getTrack = exports.getArtist = exports.addTracks = exports.addArtist = void 0;
const Artist_1 = require("./Schema/Artist");
const addArtist = async (artistName) => {
    const data = new Artist_1.ArtistDB({
        artistName,
        tracks: new Map()
    });
    await data.save();
};
exports.addArtist = addArtist;
const addTracks = async (artistName, trackName, trackUrl) => {
    trackName.replace(/[^0-9a-z]/gi, '');
    artistName.replace(/[^0-9a-z]/gi, '');
    let data = await Artist_1.ArtistDB.findOne({
        artistName
    });
    if (!data) {
        data = new Artist_1.ArtistDB({
            artistName,
            tracks: new Map()
        });
        data.tracks.set(trackName, trackUrl);
        await data.save();
    }
    else {
        if (!data.tracks.has(trackName)) {
            data.tracks.set(trackName, trackUrl);
            await data.save();
        }
    }
};
exports.addTracks = addTracks;
const getArtist = async (artistName) => {
    return Artist_1.ArtistDB.findOne({
        artistName
    });
};
exports.getArtist = getArtist;
const getTrack = async (artistName, trackName) => {
    const data = await Artist_1.ArtistDB.findOne({
        artistName
    });
    if (!data)
        return null;
    return data.tracks.get(trackName);
};
exports.getTrack = getTrack;
const getRandomArtist = async () => {
    const data = await Artist_1.ArtistDB.find();
    return data[Math.floor(Math.random() * data.length)];
};
exports.getRandomArtist = getRandomArtist;
const getRandomTrackName = async (artistName) => {
    const artist = await Artist_1.ArtistDB.findOne({ artistName });
    if (!artist)
        return undefined;
    let keys = Array.from(artist.tracks.keys());
    let key = keys[Math.floor(Math.random() * keys.length)];
    return { trackName: key, trackUrl: artist.tracks.get(key) };
};
exports.getRandomTrackName = getRandomTrackName;
const getRandomTrack = async () => {
    const artist = await (0, exports.getRandomArtist)();
    const artistName = artist.artistName;
    const track = await (0, exports.getRandomTrackName)(artistName);
    if (!track || !track.trackName || !track.trackUrl)
        return null;
    return {
        artistName,
        trackName: track.trackName,
        trackUrl: track.trackUrl,
    };
};
exports.getRandomTrack = getRandomTrack;
