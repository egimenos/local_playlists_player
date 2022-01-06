import { Box, Flex, Text } from '@chakra-ui/react';

const PlayListSelector = ({ playlists }) => {
	if (!playlists || playlists.length === 0)
		return (
			<Text color='purple.700' fontSize='3xl' fontWeight='bolder'>
				No Playlists found, create a new one!
			</Text>
		);
	return (
		<Box bgColor='yellow.200'>
			<Flex p='2'>List of playlists</Flex>
		</Box>
	);
};

export default PlayListSelector;
