import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const PlayListDetail = (props) => {
	const params = useParams();
	const id = params.playlistId;
	return <Text>Detail Page {id}</Text>;
};

export default PlayListDetail;
