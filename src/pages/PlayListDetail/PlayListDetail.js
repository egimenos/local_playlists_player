import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import VideoList from './components/VideoList';
import Player from './components/Player';

const PlayListDetail = () => {
	const params = useParams();
	const id = params.playlistId;
	return (
		<Flex p='4' direction='column'>
			<Player />
			<VideoList />
		</Flex>
	);
};

export default PlayListDetail;
