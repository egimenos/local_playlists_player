import { Center, Flex, Spinner, Text, IconButton, Box, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useParams } from 'react-router-dom';
import VideoList from './components/VideoList';
import Player from './components/Player';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';
import { useState, useEffect } from 'react';
import { selectVideoFiles } from '../../services/videoSelector.service';
import getUrlToPlay from '../../utils/getUrlToPlay';
import usePlaylistStats from '../../hooks/usePlaylistStats';
import PlaylistStats from './components/PlaylistStats';

const PlaylistDetail = () => {
	const params = useParams();
	const playlistId = params.playlistId;

	const playlist = useLiveQuery(() => db.playlists.where({ id: Number(playlistId) }).toArray(), []);
	const videos = useLiveQuery(() => db.videos.where({ playlistId: Number(playlistId) }).toArray(), []);

	const [videoPlaying, setVideoPlaying] = useState(null); // video to play
	const [url, setUrl] = useState(null);
	const [title, setTitle] = useState(null);
	const { duration, completed, progress } = usePlaylistStats(videos);

	useEffect(() => {
		if (playlist) {
			const lastPlayed = playlist[0]?.lastPlayed;
			db.videos.get(lastPlayed).then((video) => {
				setVideoPlaying(video);
			});
		}
	}, [playlist]);

	const handlePlayVideo = async (video) => {
		setVideoPlaying({ ...video });
		const urlToPlay = await getUrlToPlay(video.handler);
		const title = video.title;
		setUrl(urlToPlay);
		setTitle(title);
	};

	const handleNextVideo = async () => {
		if (!url) {
			handlePlayVideo(videoPlaying);
		} else {
			const nextVideo = await nextVideoOntheList();
			if (nextVideo[0]) {
				await handlePlayVideo(nextVideo[0]);
			} else setVideoPlaying(null);
		}
	};

	const handleOnEndedPlaying = async () => {
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

	const handleAddVideos = async () => {
		const fileHandlers = await selectVideoFiles();
		await db.addVideosToPlaylist(Number(playlistId), fileHandlers);
	};

	const AddVideos = () => {
		return (
			<Flex ml='auto' align='center'>
				<Text color='purple.700' mr='2'>
					Add more videos
				</Text>
				<IconButton
					boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
					backgroundColor='accent'
					color='white'
					onClick={handleAddVideos}
					aria-label='add more videos'
					icon={<AddIcon />}
					_hover={{ backgroundColor: 'teal.200' }}
				/>
			</Flex>
		);
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
			<Flex m='4'>
				<Text color='purple.700' fontSize='3xl' fontWeight='bolder'>
					No videos found for this playlist! {playlist[0].title}
				</Text>
				<AddVideos />
			</Flex>
		);

	return (
		<Flex p='4' direction='column'>
			<Flex align='center' justify='start'>
				<Text mr='4' color='purple.700' fontSize='2xl' fontWeight='bolder'>
					Playlist:
				</Text>
				<Text mr='2' color='purple.700' fontSize='2xl' fontWeight='bolder'>
					{playlist[0].title}
				</Text>

				{videoPlaying && (
					<Button
						boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
						backgroundColor='accent'
						color='white'
						onClick={handleNextVideo}
						aria-label='add more videos'
						icon={<AddIcon />}
						_hover={{ backgroundColor: 'teal.200' }}
						ml='auto'
					>
						Play Next video
					</Button>
				)}
				<AddVideos />
			</Flex>
			<Box alignSelf='start'>
				<PlaylistStats stats={{ duration, completed, progress }} />
			</Box>
			{url ? (
				<Player handleOnEndedPlaying={handleOnEndedPlaying} url={url} title={title} />
			) : (
				<Text textAlign='center' my='5' color='purple.700' fontSize='2xl' fontWeight='bolder'>
					Choose video to play!
				</Text>
			)}
			<Box>
				<VideoList handleDeleteVideo={handleDeleteVideo} handlePlayVideo={handlePlayVideo} videos={videos} />
			</Box>
		</Flex>
	);
};

export default PlaylistDetail;
