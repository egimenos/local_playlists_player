import { formatDuration, intervalToDuration } from 'date-fns';

const humanizedDuration = (s) => formatDuration(intervalToDuration({ start: 0, end: s * 1000 }));

export default humanizedDuration;
