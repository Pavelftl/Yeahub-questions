import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

import { useAppDispatch } from '@/app/appStore';

import { setAllFilters } from '@/entities/filters/model/filtersSlice';
import { IFilters } from '@/entities/filters/model/types';

export const useFiltersFromUrl = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const result = {} as Partial<IFilters>;

		searchParams.forEach((value, key) => {
			if (key === 'page') {
				result.page = Number(value);
			} else if (['skills', 'complexity', 'rate'].includes(key)) {
				result[key as 'skills' | 'complexity' | 'rate'] =
					searchParams.getAll(key);
			} else if (['title', 'specialization', 'keywords'].includes(key)) {
				result[key as 'title' | 'specialization' | 'keywords'] = value;
			}
		});

		dispatch(setAllFilters(result));
	}, [dispatch, searchParams]);
};
