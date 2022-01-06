import { Flex, Text } from '@chakra-ui/react';
import PlayListItem from './PlayListItem';

const PlayListSelector = ({ playlists, handleDeletePlaylist }) => {
	if (!playlists || playlists.length === 0)
		return (
			<Text color='purple.700' fontSize='3xl' fontWeight='bolder'>
				No Playlists found, create a new one!
			</Text>
		);
	return (
		<Flex direction='column'>
			<Text fontSize='xl' color='purple.700' fontWeight='bold' mb='4'>
				List of playlists
			</Text>
			{playlists.map((playlist) => (
				<PlayListItem handleDeletePlaylist={handleDeletePlaylist} playlist={playlist} key={playlist.id} />
			))}
		</Flex>
	);
};

export default PlayListSelector;
