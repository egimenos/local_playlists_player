import { Flex } from '@chakra-ui/react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
	return (
		<Flex direction='column'>
			{videos.map((video) => (
				<VideoListItem key={video.id} video={video} />
			))}
		</Flex>
	);
};

export default VideoList;
