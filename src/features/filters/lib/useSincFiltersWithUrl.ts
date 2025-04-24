import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { IFilters } from '@/entities/filters/model/types';

export const useSyncFiltersWithUrl = (filters: IFilters) => {
	const [_, setSearchParams] = useSearchParams();

	useEffect(() => {
		const params = new URLSearchParams();

		Object.entries(filters).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				value.forEach(v => params.append(key, v));
			} else if (value) {
				params.set(key, value.toString());
			}
		});

		setSearchParams(params, { replace: true });
	}, [filters]);
};
