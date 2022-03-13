import { formatDistance } from 'date-fns';

const humanizedDuration = (s) => formatDistance(0, s * 1000, { includeSeconds: true });

export default humanizedDuration;
