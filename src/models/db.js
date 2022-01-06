import Dexie from 'dexie';

class PlayListsDB extends Dexie {
	constructor() {
		super('PlayListsDB');
		this.version(1).stores({ playlists: '++id,title', videos: '++id, title, handler, completed, playlistId' });
	}

	addPlaylist(playlist) {
		return this.playlists
			.add({
				title: playlist.title,
			})
			.then((id) => {
				for (const video of playlist.videos) {
					this.videos.add({ title: video.name, handler: video, completed: false, playlistId: id });
				}
				return id;
			});
	}
}

export const db = new PlayListsDB();
