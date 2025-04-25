export const getPaginationRange = (current: number, total: number) => {
	const pages: (number | string)[] = [];

	if (total <= 7) {
		for (let i = 1; i <= total; i++) pages.push(i);
		return pages;
	}

	// Если текущая страница в начале (первые 5)
	if (current <= 5) {
		for (let i = 1; i <= 6; i++) pages.push(i);
		pages.push('...');
		pages.push(total);
	}
	// Если текущая страница ближе к концу
	else if (current >= total - 5) {
		pages.push(1);
		pages.push('...');
		for (let i = total - 5; i <= total; i++) pages.push(i);
	}
	// Если в середине
	else {
		pages.push(1);
		pages.push('...');
		for (let i = current - 2; i <= current + 2; i++) pages.push(i);
		pages.push('...');
		pages.push(total);
	}

	return pages;
};
