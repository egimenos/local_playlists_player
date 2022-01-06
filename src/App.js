import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import Navbar from './layout/Navbar';
import Main from './pages/Main/Main';
import '@fontsource/kanit';
import '@fontsource/aldrich';

function App() {
	const bg = 'linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%)';
	const theme = extendTheme({
		colors: {
			backgroundMain: bg,
			accent: 'rgb(31, 199, 212)',
		},
		fonts: {
			heading: 'Aldrich',
			body: 'Kanit',
		},
	});
	return (
		<ChakraProvider theme={theme}>
			<Box minH='100vh' bg='backgroundMain'>
				<Navbar />
				<Main />
			</Box>
		</ChakraProvider>
	);
}

export default App;
