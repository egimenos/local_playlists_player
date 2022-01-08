const getUrl = async (fileHandle) => {
	const src = URL.createObjectURL(await fileHandle.getFile());
	return src;
};

export const getSrc = async (fileHandle) => {
	if (fileHandle) {
		if ((await fileHandle.queryPermission()) === 'granted') {
			return await getUrl(fileHandle);
		} else {
			await fileHandle.requestPermission();
			return await getUrl(fileHandle);
		}
	}
};
