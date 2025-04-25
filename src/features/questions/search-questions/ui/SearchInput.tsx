import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

import { setTitle } from '@/entities/question/model/questionsSlice';

import styles from './styles.module.scss';

export const SearchInput = () => {
	const dispatch = useAppDispatch();

	const title = useAppSelector(state => state.questions.filters.title);

	const [searchValue, setSearchValue] = useState<string>(title);
	const debouncedSearch = useDebounce(searchValue, 700);

	useEffect(() => {
		dispatch(setTitle(debouncedSearch));
	}, [debouncedSearch]);

	useEffect(() => {
		setSearchValue(title);
	}, [title]);

	return (
		<div className={styles.search}>
			<CiSearch size={24} color='var(--color-black-300)' />
			<input
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				placeholder='Введите запрос...'
			/>
		</div>
	);
};
