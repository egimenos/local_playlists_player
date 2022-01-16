import Dexie from 'dexie';

class PlayListsDB extends Dexie {
	constructor() {
		super('PlayListsDB');
		this.version(1).stores({
			playlists: '++id,title, lastPlayed',
			videos: '++id, title, handler, completed, playlistId, [position+playlistId]',
		});
	}

	addPlaylist(playlist) {
		const sortedVideos = playlist.videos.sort((a, b) => a.name - b.name);
		return this.playlists
			.add({
				title: playlist.title,
				lastPlayed: 1,
			})
			.then((id) => {
				for (const [index, video] of sortedVideos.entries()) {
					this.videos.add({ title: video.name, handler: video, completed: false, playlistId: id, position: index + 1 });
				}
				return id;
			});
	}

	async addVideosToPlaylist(playlistId, videos) {
		for (const [index, video] of videos.entries()) {
			console.log(video, index);
			const result = await this.videos.add({
				title: video.name,
				handler: video,
				completed: false,
				playlistId: playlistId,
				position: index + 1,
			});

			console.log(result);
		}
	}

	deletePlaylist(playlistId) {
		return this.transaction('rw', this.playlists, this.videos, () => {
			this.videos.where({ playlistId }).delete();
			this.playlists.delete(playlistId);
		});
	}

	deleteVideo(videoId) {
		this.videos.delete(videoId);
	}

	updateCompletedVideoStatus(id, status) {
		this.videos.update(id, { completed: status });
	}

	updateLastCompletedVideo(playlistId, videoId) {
		this.playlists.update(Number(playlistId), { lastPlayed: videoId });
	}
}

export const db = new PlayListsDB();
