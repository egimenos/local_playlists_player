import { Flex } from '@chakra-ui/react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, handlePlayVideo }) => {
	return (
		<Flex direction='column'>
			{videos.map((video) => (
				<VideoListItem key={video.id} video={video} handlePlayVideo={handlePlayVideo} />
			))}
		</Flex>
	);
};

export default VideoList;
