import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import theme from './theme';
import Navbar from './layout/Navbar';
import Main from './pages/Main/Main';
import '@fontsource/kanit';
import '@fontsource/aldrich';
import PlaylistDetail from './pages/PlaylistDetail/PlaylistDetail';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box minH='100vh' bg='backgroundMain'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/playlists' element={<Main />} />
					<Route path='/playlists/:playlistId' element={<PlaylistDetail />} />
				</Routes>
			</Box>
		</ChakraProvider>
	);
}

export default App;
