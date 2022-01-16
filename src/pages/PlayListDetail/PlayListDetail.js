import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import VideoList from './components/VideoList';
import Player from './components/Player';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';
import { useState, useEffect } from 'react';

const PlaylistDetail = () => {
	const params = useParams();
	const playlistId = params.playlistId;

	const playlist = useLiveQuery(() => db.playlists.where({ id: Number(playlistId) }).toArray(), []);
	const videos = useLiveQuery(() => db.videos.where({ playlistId: Number(playlistId) }).toArray(), []);

	const [videoPlaying, setVideoPlaying] = useState(null); // video url to play

	useEffect(() => {
		if (playlist) {
			const lastPlayed = playlist[0].lastPlayed;
			db.videos.get(lastPlayed).then((video) => setVideoPlaying(video));
		}
	}, [playlist]);

	const handlePlayVideo = async (video) => {
		setVideoPlaying({ ...video });
	};

	const handleNextVideo = async () => {
		const nextVideo = await nextVideoOntheList();
		if (nextVideo[0]) {
			await handlePlayVideo(nextVideo[0]);
		} else setVideoPlaying(null);
	};

	const handleOnEndedPlaying = () => {
		db.updateCompletedVideoStatus(videoPlaying.id, true);
		db.updateLastCompletedVideo(playlistId, videoPlaying.id);
	};

	const nextVideoOntheList = () => {
		const currentPosition = videoPlaying.position;
		return db.videos.where({ position: currentPosition + 1, playlistId: Number(playlistId) }).toArray();
	};

	const handleDeleteVideo = (videoId) => {
		db.deleteVideo(videoId);
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

			{videoPlaying ? (
				<Player handleNextVideo={handleNextVideo} handleOnEndedPlaying={handleOnEndedPlaying} video={videoPlaying} />
			) : (
				<Text textAlign='center' mb='10' color='purple.700' fontSize='2xl' fontWeight='bolder'>
					Choose video to play!
				</Text>
			)}
			<VideoList handleDeleteVideo={handleDeleteVideo} handlePlayVideo={handlePlayVideo} videos={videos} />
		</Flex>
	);
};

export default PlaylistDetail;
