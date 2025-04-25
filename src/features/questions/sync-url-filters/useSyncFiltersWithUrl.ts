import { IQuestionFilters } from '@/entities/question/model/types';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

export const useSyncFiltersWithUrl = (filters: IQuestionFilters) => {
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
