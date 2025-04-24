export const filterParams = <T extends object>(params: T): Partial<T> => {
	const filteredParams: Partial<T> = {};
	Object.entries(params).forEach(([key, value]) => {
		if (value.length !== 0) {
			filteredParams[key as keyof T] = value;
		}
	});
	return filteredParams;
};
