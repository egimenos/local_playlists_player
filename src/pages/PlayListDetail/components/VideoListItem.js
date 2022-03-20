import { Text, Flex, IconButton, Tag, Icon, Badge } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsPlayFill } from 'react-icons/bs';
import humanizedDuration from '../../../utils/timeUtils';

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
			<Text isTruncated flexBasis='50%' justifySelf='start' mr='4' fontSize='md' color='purple.700' fontWeight='bold'>
				{video.title}
			</Text>
			<Text fontSize='md' color='purple.700' fontWeight='bold'>
				{humanizedDuration(video.duration)}
			</Text>
			{video.completed && (
				<Badge mr='4' ml='auto' variant='subtle' colorScheme='green'>
					completed
				</Badge>
			)}
			<IconButton
				ml={!video.completed ? 'auto' : ''}
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
