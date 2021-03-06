import Dexie from 'dexie';
import getVideoDuration from '../utils/getVideoDuration';

class PlayListsDB extends Dexie {
	constructor() {
		super('PlayListsDB');
		this.version(1).stores({
			playlists: '++id,title, lastPlayed',
			videos: '++id, title, handler, completed, playlistId, [position+playlistId], duration',
		});
	}

	addPlaylist(playlist) {
		const sortedVideos = playlist.videos.sort((a, b) => a.name - b.name);
		db.transaction('rw', db.playlists, db.videos, async function () {
			const id = await this.playlists.add({
				title: playlist.title,
				lastPlayed: 1,
			});
			const videos = [];
			for (const [index, video] of sortedVideos.entries()) {
				const duration = await Dexie.waitFor(getVideoDuration(video));
				const item = {
					title: video.name,
					handler: video,
					completed: false,
					playlistId: id,
					position: index + 1,
					duration: duration,
				};
				videos.push(item);
			}
			this.videos.bulkAdd(videos);
		}).then((id) => id);
	}

	async addVideosToPlaylist(playlistId, videos) {
		for (const [index, video] of videos.entries()) {
			const duration = await getVideoDuration(video);
			this.videos.add({
				title: video.name,
				handler: video,
				completed: false,
				playlistId: playlistId,
				position: index + 1,
				duration: duration,
			});
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
