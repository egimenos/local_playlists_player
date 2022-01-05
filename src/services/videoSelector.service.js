const selectVideoFiles = async () => {
	const pickerOpts = {
		types: [
			{
				description: 'Videos',
				accept: {
					'video/*': ['.mp4'],
				},
			},
		],
		excludeAcceptAllOption: true,
		multiple: true,
	};
	const fileHandlers = await window.showOpenFilePicker(pickerOpts);
	return fileHandlers;
};

export { selectVideoFiles };
