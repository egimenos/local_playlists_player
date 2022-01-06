import { extendTheme } from '@chakra-ui/react';

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

export default theme;
