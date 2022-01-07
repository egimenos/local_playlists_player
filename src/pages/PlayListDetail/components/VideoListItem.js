import { Text, Flex, IconButton, Tag, Icon } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';

const VideoListItem = ({ video }) => {
	return (
		<Flex
			justifyContent='space-between'
			px='6'
			py='2'
			borderRadius='24px'
			backgroundColor='white'
			boxShadow='sm'
			align='center'
			mb='4'
		>
			<Tag mr='4'>{video.position}</Tag>
			<Text fontSize='xl' color='purple.700' fontWeight='bold'>
				{video.title}
			</Text>
			<IconButton
				ml='auto'
				mr='4'
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='accent'
				color='white'
				aria-label='play this video'
				icon={<Icon as={MdSettings} />}
				_hover={{ backgroundColor: 'teal.200' }}
			/>
			<IconButton
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='red.300'
				color='white'
				aria-label='delete video from playlist'
				icon={<DeleteIcon />}
				_hover={{ backgroundColor: 'red.100' }}
			/>
		</Flex>
	);
};

export default VideoListItem;
