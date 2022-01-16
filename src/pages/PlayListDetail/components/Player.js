import { Flex, Text, Box } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useState, useEffect, useCallback } from 'react';
import { getSrc } from '../../../utils/getSrc';

const Player = ({ video, handleOnEndedPlaying }) => {
	const [url, setUrl] = useState('');

	const getUrlToPlay = useCallback(async (handler) => {
		try {
			const urlToPlay = await getSrc(handler);
			setUrl(urlToPlay);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getUrlToPlay(video?.handler);
	}, [video, getUrlToPlay]);

	return (
		<Flex mb='4' align='center' direction='column'>
			<Text mb='2'>{video?.title}</Text>
			<Box>
				<ReactPlayer
					height='50vh'
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
