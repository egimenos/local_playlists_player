import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import VideoList from './components/VideoList';
import Player from './components/Player';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';
import { useState } from 'react';

const PlaylistDetail = () => {
	const params = useParams();
	const playlistId = params.playlistId;

	const playlist = useLiveQuery(() => db.playlists.where({ id: Number(playlistId) }).toArray(), []);
	const videos = useLiveQuery(() => db.videos.where({ playlistId: Number(playlistId) }).toArray(), []);

	const [videoPlaying, setVideoPlaying] = useState(null); // video url to play

	const handlePlayVideo = async (video) => {
		setVideoPlaying({ ...video });
	};

	const handleOnEndedPlaying = async () => {
		db.updateCompletedVideoStatus(videoPlaying.id, true);
		db.updateLastCompletedVideo(playlistId, videoPlaying.id);
		const nextVideo = await nextVideoOntheList();
		if (nextVideo[0]) {
			handlePlayVideo(nextVideo[0]);
		}
	};

	const nextVideoOntheList = () => {
		const currentPosition = videoPlaying.position;
		return db.videos.where({ position: currentPosition + 1 }).toArray();
	};

	if (!videos || !playlist)
		return (
			<Center my='4' color='purple.700' size='xl'>
				<Spinner />
			</Center>
		);

	if (playlist && playlist.length === 0) {
		return (
			<Flex>
				<Text p='4' color='purple.700' fontSize='3xl' fontWeight='bolder'>
					Playlist not found: {playlistId}
				</Text>
			</Flex>
		);
	}

	if (videos && videos.length === 0)
		return (
			<Flex>
				<Text p='4' color='purple.700' fontSize='3xl' fontWeight='bolder'>
					No videos found for this playlist! {playlist[0].title}
				</Text>
			</Flex>
		);

	return (
		<Flex p='4' direction='column'>
			<Flex justify='start'>
				<Text mr='4' color='purple.700' fontSize='2xl' fontWeight='bolder'>
					Playlist:
				</Text>
				<Text color='purple.700' fontSize='2xl' fontWeight='bolder'>
					{playlist[0].title}
				</Text>
			</Flex>

			<Player handleOnEndedPlaying={handleOnEndedPlaying} video={videoPlaying} />
			<VideoList handlePlayVideo={handlePlayVideo} videos={videos} />
		</Flex>
	);
};

export default PlaylistDetail;
