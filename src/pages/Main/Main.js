import { Box, Flex } from '@chakra-ui/react';
import AddPlayList from './components/AddPlayList';
import PlayListSelector from './components/PlaylistsSelector';
const Main = () => {
	const handleAddPlaylist = (title) => {
		console.log(title);
	};

	return (
		<Flex p='4'>
			<Box mr='6' flexGrow='1'>
				<PlayListSelector />
			</Box>
			<Box flexBasis='30%'>
				<AddPlayList handleAddPlayList={handleAddPlaylist} />
			</Box>
		</Flex>
	);
};

export default Main;
