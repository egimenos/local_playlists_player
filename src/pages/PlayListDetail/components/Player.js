import { Flex } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const Player = ({ url }) => {
	return (
		<Flex mb='4' align='center' direction='column'>
			<ReactPlayer controls='true' url={url} />
		</Flex>
	);
};

export default Player;
