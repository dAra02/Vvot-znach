export const formatDate = (date) => {
	const day = String(date.getDate());
	const month = String(date.getMonth() + 1);
	const year = date.getFullYear();
	const hours = String(date.getHours());
	const minutes = String(date.getMinutes());
	const seconds = String(date.getSeconds());

	return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
