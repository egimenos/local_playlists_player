import { Flex } from '@chakra-ui/react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, handlePlayVideo, handleDeleteVideo }) => {
	return (
		<Flex direction='column'>
			{videos.map((video) => (
				<VideoListItem
					key={video.id}
					video={video}
					handlePlayVideo={handlePlayVideo}
					handleDeleteVideo={handleDeleteVideo}
				/>
			))}
		</Flex>
	);
};

export default VideoList;
