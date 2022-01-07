import { Box, Flex } from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';
import { selectVideoFiles } from '../../services/videoSelector.service';
import AddPlayList from './components/AddPlayList';
import PlayListSelector from './components/PlaylistsSelector';
const Main = () => {
	const playlists = useLiveQuery(() => db.playlists.toArray(), []);

	const handleAddPlaylist = async (title) => {
		const fileHandlers = await selectVideoFiles();
		const newPlaylist = { title: title, videos: fileHandlers };
		await db.addPlaylist(newPlaylist);
	};

	const handleDeletePlaylist = (id) => {
		db.deletePlaylist(id);
	};

	return (
		<Flex p='4'>
			<Box mr='6' flexGrow='1'>
				<PlayListSelector playlists={playlists} handleDeletePlaylist={handleDeletePlaylist} />
			</Box>
			<Box flexBasis='30%'>
				<AddPlayList handleAddPlayList={handleAddPlaylist} />
			</Box>
		</Flex>
	);
};

export default Main;
