import Dexie from 'dexie';

class PlayListsDB extends Dexie {
	constructor() {
		super('PlayListsDB');
		this.version(1).stores({ playlists: '++id,title,videos' });
	}

	addPlaylist(playlist) {
		this.playlists.add({
			title: playlist.title,
			videos: playlist.videos,
		});
	}
}

export const db = new PlayListsDB();
