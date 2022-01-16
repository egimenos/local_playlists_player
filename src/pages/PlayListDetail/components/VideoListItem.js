import { Text, Flex, IconButton, Tag, Icon } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsPlayFill } from 'react-icons/bs';

const VideoListItem = ({ video, handlePlayVideo, handleDeleteVideo }) => {
	return (
		<Flex
			justifyContent='space-between'
			px='6'
			py='1'
			borderRadius='6px'
			backgroundColor='white'
			boxShadow='sm'
			align='center'
			border='1px'
			borderColor='gray.200'
		>
			<Tag mr='4'>{video.position}</Tag>
			<Text fontSize='md' color='purple.700' fontWeight='bold'>
				{video.title}
			</Text>
			{video.completed && (
				<Text fontWeight='bold' color='purple.700' mr='4' ml='auto'>
					COMPLETED!
				</Text>
			)}
			<IconButton
				ml='auto'
				mr='4'
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='accent'
				color='white'
				aria-label='play this video'
				icon={<Icon as={BsPlayFill} />}
				_hover={{ backgroundColor: 'teal.200' }}
				onClick={() => handlePlayVideo(video)}
			/>
			<IconButton
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='red.300'
				color='white'
				aria-label='delete video from playlist'
				icon={<DeleteIcon />}
				_hover={{ backgroundColor: 'red.100' }}
				onClick={() => handleDeleteVideo(video.id)}
			/>
		</Flex>
	);
};

export default VideoListItem;
