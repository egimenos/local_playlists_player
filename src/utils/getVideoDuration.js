/* const getVideoDuration = async (fileHandler) => {
	const video = document.createElement('video');
	video.preload = 'metadata';
	video.onloadedmetadata = function () {
		window.URL.revokeObjectURL(video.src);
		return video.duration;
	};
	video.src = URL.createObjectURL(await fileHandler.getFile());
}; */

const getVideoDuration = async (fileHandler) => {
	const file = await fileHandler.getFile();
	return new Promise((resolve, reject) => {
		try {
			let video = document.createElement('video');
			video.preload = 'metadata';

			video.onloadedmetadata = function () {
				resolve(video.duration);
			};

			video.onerror = function () {
				reject('Invalid video. Please select a video file.');
			};

			video.src = window.URL.createObjectURL(file);
		} catch (error) {
			reject(error);
		}
	});
};

export default getVideoDuration;
