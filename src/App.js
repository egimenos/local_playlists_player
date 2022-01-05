import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './layout/Navbar';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box>
				<Navbar />
				Main component
			</Box>
		</ChakraProvider>
	);
}

export default App;
