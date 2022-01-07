import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import VideoList from './components/VideoList';
import Player from './components/Player';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';

const PlayListDetail = () => {
	const params = useParams();
	const id = params.playlistId;

	const playlist = useLiveQuery(() => db.playlists.where({ id: Number(id) }).toArray(), []);
	const videos = useLiveQuery(() => db.videos.where({ playlistId: Number(id) }).toArray(), []);

	if (!videos || !playlist)
		return (
			<Center my='4' color='purple.700' size='xl'>
				<Spinner />
			</Center>
		);

	if (playlist && playlist.length === 0) {
		<Flex>
			<Text p='4' color='purple.700' fontSize='3xl' fontWeight='bolder'>
				Playlist not found: {id}
			</Text>
		</Flex>;
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

			<Player />
			<VideoList videos={videos} />
		</Flex>
	);
};

export default PlayListDetail;
