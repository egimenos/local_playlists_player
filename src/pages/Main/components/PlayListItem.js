import { Flex, IconButton, Text, Tag } from '@chakra-ui/react';
import { DeleteIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import playlistDuration from '../../../utils/playlistDuration';
import humanizedDuration from '../../../utils/timeUtils';

const PlayListItem = ({ playlist, handleDeletePlaylist }) => {
	const navigate = useNavigate();

	const [duration, setDuration] = useState();

	const getTotalDuration = useCallback(async () => {
		const duration = await playlistDuration.totalPlaylistDuration({ playlistId: playlist.id });
		setDuration(duration);
	}, [playlist.id]);

	useEffect(() => {
		getTotalDuration();
	}, [getTotalDuration]);

	const handleNavigateToPlaylistDetail = async () => {
		navigate(`/playlists/${playlist.id}`);
	};
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
			<Tag mr='4'>{playlist.id}</Tag>
			<Text fontSize='xl' color='purple.700' fontWeight='bold'>
				{playlist.title}
			</Text>
			<Text ml='2'>{duration && humanizedDuration(duration)}</Text>
			<IconButton
				ml='auto'
				mr='4'
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='accent'
				color='white'
				aria-label='go to playlist detail'
				icon={<ArrowRightIcon />}
				_hover={{ backgroundColor: 'teal.200' }}
				onClick={handleNavigateToPlaylistDetail}
			/>
			<IconButton
				boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
				backgroundColor='red.300'
				color='white'
				onClick={() => handleDeletePlaylist(playlist.id)}
				aria-label='delete playlist'
				icon={<DeleteIcon />}
				_hover={{ backgroundColor: 'red.100' }}
			/>
		</Flex>
	);
};

export default PlayListItem;
