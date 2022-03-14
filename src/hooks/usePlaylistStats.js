import { useEffect, useState } from 'react';
import durationUtils from '../utils/playlistDuration.js';

const usePlaylistStats = (videos) => {
	const [stats, setStats] = useState({ duration: 0, completed: 0, progress: 0 });

	useEffect(() => {
		if (videos) {
			const totalDuration = videos.reduce((sum, current) => (sum = sum + current.duration), 0);
			const completedTime = durationUtils.completedPlaylistDuration(videos);
			const progress = totalDuration > 0 ? completedTime / totalDuration : 0;
			setStats({ duration: totalDuration, completed: completedTime, progress: progress });
		}
	}, [videos]);

	return stats;
};

export default usePlaylistStats;
