import { Box, Flex, Text, Input, IconButton, Divider } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { useState } from 'react';

const AddPlayList = ({ handleAddPlayList }) => {
	const [title, setTitle] = useState(null);

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	return (
		<Box>
			<Flex
				px='12px'
				pt='24px'
				pb='12px'
				borderRadius='24px'
				backgroundColor='white'
				boxShadow='sm'
				direction='column'
				align='center'
			>
				<Text fontSize='xl' color='purple.700' fontWeight='bold' mb='4'>
					Add new playlist
				</Text>
				<Divider mb='4' />
				<Box
					minW='90%'
					boxShadow='rgb(238, 234, 244) 0px 0px 5px inset'
					mb='4'
					p='4'
					borderRadius='16px'
					background='purple.50'
					fontWeight='semibold'
				>
					<Input
						fontSize='16px'
						outline='none'
						variant='unstyled'
						placeholder='Playlist Title'
						onChange={handleTitleChange}
					/>
				</Box>
				<IconButton
					boxShadow='rgb(14 14 44 / 40%) 0px -1px 0px 0px inset'
					disabled={!title}
					backgroundColor='accent'
					color='white'
					onClick={() => handleAddPlayList(title)}
					aria-label='add new playlist'
					icon={<AddIcon />}
					_hover={{ backgroundColor: 'teal.200' }}
				/>
			</Flex>
		</Box>
	);
};

export default AddPlayList;
