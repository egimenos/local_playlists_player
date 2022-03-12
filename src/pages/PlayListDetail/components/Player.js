import { Flex, Box, Tag } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const Player = ({ url, title, handleOnEndedPlaying }) => {
	return (
		<Flex mb='4' align='center' direction='column'>
			<Tag color='white' backgroundColor='purple.300' alignSelf='start' my='2'>
				{title}
			</Tag>
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
