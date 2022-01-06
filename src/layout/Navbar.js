import { Flex, Image, Heading } from '@chakra-ui/react';
import playlistLogo from '../assets/playlist.png';

const Navbar = () => {
	return (
		<Flex py='2' px='4' align='center' boxShadow='sm' bgColor='white' justify='start'>
			<Image mr='4' boxSize='50px' src={playlistLogo} alt='local playlist logo' />
			<Heading fontSize='xl' fontWeight='bold'>
				Local Playlists Player
			</Heading>
		</Flex>
	);
};

export default Navbar;
