import { Box, Flex, Text, Editable, EditableInput, EditablePreview, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { useState } from 'react';

const AddPlayList = ({ handleAddPlayList }) => {
	const [title, setTitle] = useState(null);

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};
	return (
		<Box>
			<Flex p='2' backgroundColor='gray.100' boxShadow='xl' direction='column' align='center'>
				<Text mb='4'>Add new playlist</Text>

				<Editable mb='4' px='2' placeholder='Change this title'>
					<EditablePreview />
					<EditableInput onChange={handleTitleChange} />
				</Editable>

				<IconButton
					disabled={!title}
					backgroundColor='green.300'
					onClick={() => handleAddPlayList(title)}
					aria-label='add new playlist'
					icon={<AddIcon />}
				/>
			</Flex>
		</Box>
	);
};

export default AddPlayList;
