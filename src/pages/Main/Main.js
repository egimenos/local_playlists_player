import { Box, Flex } from '@chakra-ui/react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../models/db';

import { selectVideoFiles } from '../../services/videoSelector.service';
import AddPlayList from './components/AddPlayList';
import PlayListSelector from './components/PlaylistsSelector';
const Main = () => {
	const playlists = useLiveQuery(() => db.playlists.toArray(), []);
	const addPlaylistToDb = async (playlist) => {
		const result = db.addPlaylist(playlist);
		console.log(result);
	};

	const handleAddPlaylist = async (title) => {
		const fileHandlers = await selectVideoFiles();
		const newPlaylist = { title: title, videos: fileHandlers };
		console.log(newPlaylist);
		addPlaylistToDb(newPlaylist);
	};

	return (
		<Flex p='4'>
			<Box mr='6' flexGrow='1'>
				<PlayListSelector playlists={playlists} />
			</Box>
			<Box flexBasis='30%'>
				<AddPlayList handleAddPlayList={handleAddPlaylist} />
			</Box>
		</Flex>
	);
};

export default Main;
