import { Flex, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { useState, useEffect, useCallback } from 'react';
import { getSrc } from '../../../utils/getSrc';

const Player = ({ video, handleOnEndedPlaying }) => {
	const [url, setUrl] = useState('');

	const getUrlToPlay = useCallback(async (handler) => {
		const urlToPlay = await getSrc(handler);
		setUrl(urlToPlay);
	}, []);

	useEffect(() => {
		getUrlToPlay(video?.handler);
	}, [video, getUrlToPlay]);

	return (
		<Flex mb='4' align='center' direction='column'>
			<Text mb='2'>{video?.title}</Text>
			<ReactPlayer onEnded={handleOnEndedPlaying} playing={true} controls={true} url={url} />
		</Flex>
	);
};

export default Player;
