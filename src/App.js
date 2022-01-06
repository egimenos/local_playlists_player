import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './layout/Navbar';
import Main from './pages/Main/Main';
import '@fontsource/kanit';
import '@fontsource/aldrich';

function App() {
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
