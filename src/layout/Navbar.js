import { Box, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
	return (
		<Box boxShadow='lg' bgColor='cyan.200'>
			<Flex justify='end'>
				<ColorModeSwitcher />
			</Flex>
		</Box>
	);
};

export default Navbar;
