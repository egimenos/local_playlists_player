import { Flex, Text, Box } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const Player = ({ url, title, handleOnEndedPlaying }) => {
	return (
		<Flex mb='4' align='center' direction='column'>
			<Text mb='2'>{title}</Text>
			<Box>
				<ReactPlayer
					height='100%'
					width='100%'
					onEnded={handleOnEndedPlaying}
					playing={true}
					controls={true}
					url={url}
				/>
			</Box>
		</Flex>
	);
};

export default Player;
