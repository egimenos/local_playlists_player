import { db } from '../models/db';

const totalPlaylistDuration = async (playlistId) => {
	const videos = await db.videos.filter((item) => item.playlistId === playlistId).toArray();
	const duration = videos.reduce((sum, current) => (sum = sum + current.duration), 0);
	return duration;
};

export default { totalPlaylistDuration };
