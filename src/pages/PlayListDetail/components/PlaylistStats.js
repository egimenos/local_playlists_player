import { Text, Flex, Box } from '@chakra-ui/react';
import humanizedDuration from '../../../utils/timeUtils';
import { Progress } from '@chakra-ui/react';

const PlaylistStats = ({ stats }) => {
	return (
		<Box>
			<Flex
				mb='2'
				direction='column'
				color='purple.700'
				justifyContent='space-between'
				px='6'
				py='2'
				borderRadius='12'
				backgroundColor='white'
				boxShadow='sm'
				align='center'
			>
				<Text>Time left: {humanizedDuration(stats.duration - stats.completed)}</Text>
				<Text>Time left: {(stats.duration - stats.completed) / 60}</Text>
				<Text>Time total: {humanizedDuration(stats.duration)}</Text>
				<Text>Time completed: {humanizedDuration(stats.completed)}</Text>
			</Flex>
			<Progress size='lg' hasStripe colorScheme='blue' value={stats.progress * 100} />
		</Box>
	);
};

export default PlaylistStats;
