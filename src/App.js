import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './layout/Navbar';
import Main from './pages/Main/Main';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box width='100%'>
				<Navbar />
				<Main />
			</Box>
		</ChakraProvider>
	);
}

export default App;
