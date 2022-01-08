import { Text } from '@chakra-ui/react';

const Player = ({ url }) => {
	return <Text>Playing {JSON.stringify(url)}</Text>;
};

export default Player;
