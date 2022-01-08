import { Flex } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const Player = ({ url, handleOnEndedPlaying }) => {
	return (
		<Flex mb='4' align='center' direction='column'>
			<ReactPlayer onEnded={handleOnEndedPlaying} playing={true} controls={true} url={url} />
		</Flex>
	);
};

export default Player;
