import { json } from "express";

const playlists = [
  { id: 1, name: "Funk 2022", tags: ["funk"], musics: [] },
  { id: 2, name: "Sertanejo Hits", tags: ["sertanejo"], musics: [] },
  { id: 3, name: "Rock Clássico", tags: ["rock", "clássico"], musics: [] },
  { id: 4, name: "Pop Internacional", tags: ["pop"], musics: [] },
  { id: 5, name: "Hip Hop Vibes", tags: ["hip hop"], musics: [] },
  {
    id: 6,
    name: "Eletrônica Party",
    tags: ["eletrônica", "dance"],
    musics: [],
  },
  { id: 7, name: "MPB Essencial", tags: ["mpb"], musics: [] },
  { id: 8, name: "Indie Relax", tags: ["indie"], musics: [] },
];
class Playlist {
  constructor(name, tags = [], musics = []) {
    this.id = Math.floor(Math.random() * 99999);
    this.name = name;
    this.tags = tags;
    this.musics = musics;
  }
}
class Music {
  constructor(title, year, album) {
    this.id = Math.floor(Math.random() * 999999);
    this.title = title;
    this.year = year;
    this.album = album;
  }
}

export const playlistController = {
  index: (req, res) => {
    res.json(playlists);
  },

  findPlaylistById: (req, res) => {
    const { id } = req.params;

    const playlistId = playlists.find((playlist) => playlist.id === +id);
    if (!playlistId) {
      res.json({ message: "Erro ao procurar playlist" });
    } else {
      res.json(playlistId);
    }
  },

  newPlaylist: (req, res) => {
    const { name, tags, musics } = req.body;

    const newPlaylist = new Playlist(name, tags, musics);
    playlists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  addTagsPlaylist: (req, res) => {
    const { id } = req.params;
    const { tags } = req.body;

    const playlistIndex = playlists.findIndex(
      (playlist) => playlist.id === +id,
    );

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "fruta nao encontrada" });
    }

    if (playlists[playlistIndex].tags.includes(tags)) {
      return res.status(400).json({ message: "tags invalidos" });
    }

    playlists[playlistIndex].tags.push(tags);

    res.json(playlists[playlistIndex]);
  },

  deletePlaylist: (req, res) => {
    const { id } = req.params;

    const playlistIndex = playlists.findIndex(
      (playlist) => playlist.id === +id,
    );

    playlists.splice(playlistIndex, 1);

    return res.status(200).json({ message: "Playlist removida com sucesso" });
  },

  deleteTagPlaylist: (req, res) => {
    const { id } = req.params;
    const { nameTag } = req.body;

    const playlistIndex = playlists.findIndex(
      (playlist) => playlist.id === +id,
    );

    if (fruitIndex === -1) {
      return res.status(404).json({ message: "fruta nao encontrada" });
    }

    if (
      typeof nameTag != "string" ||
      !playlists[playlistIndex].tags.includes(nameTag)
    ) {
      return res.status(400).json({ message: "Tag inexistente" });
    }

    playlists[playlistIndex].tags = playlists[playlistIndex].tags.filter(
      (tag) => tag !== nameTag,
    );

    res.status(200).json(playlists[playlistIndex]);
  },
};
