import { setAllFilters } from '@/entities/question/model/questionsSlice';
import { IQuestionFilters } from '@/entities/question/model/types';
import { useAppDispatch } from '@/shared/lib/hooks';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

export const useFiltersFromUrl = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const result = {} as Partial<IQuestionFilters>;

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
