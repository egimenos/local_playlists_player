import { Flex, Image, Heading } from '@chakra-ui/react';
import playlistLogo from '../assets/playlist.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Flex py='2' px='4' align='center' boxShadow='sm' bgColor='white' justify='start'>
			<Link to='/'>
				<Image mr='4' boxSize='50px' src={playlistLogo} alt='local playlist logo' />
			</Link>
			<Heading fontSize='xl' fontWeight='bold'>
				Local Playlists Player
			</Heading>
		</Flex>
	);
};

export default Navbar;
