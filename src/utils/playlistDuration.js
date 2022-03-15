import { db } from '../models/db';

// allows calculating playlist duration either pssing videos collection or playlist id
const totalPlaylistDuration = async ({ playlistId = null, videos = null } = {}) => {
	console.log({ playlistId });
	if (!videos) {
		videos = await db.videos.filter((item) => item.playlistId === playlistId).toArray();
	}
	const duration = videos.reduce((sum, current) => (sum = sum + current.duration), 0);
	return duration;
};

const completedPlaylistDuration = (videos) => {
	return videos?.reduce((sum, current) => {
		return current.completed ? (sum = sum + current.duration) : sum;
	}, 0);
};

export default { totalPlaylistDuration, completedPlaylistDuration };
