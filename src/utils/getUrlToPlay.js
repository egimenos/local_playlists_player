import { getSrc } from './getSrc';
const getUrlToPlay = async (handler) => {
	try {
		const urlToPlay = await getSrc(handler);
		return urlToPlay;
	} catch (error) {
		console.log(error);
	}
};

export default getUrlToPlay;
