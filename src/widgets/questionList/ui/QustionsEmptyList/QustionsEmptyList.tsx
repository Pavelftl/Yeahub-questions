import { useAppDispatch } from '@/app/appStore';

import { Button } from '@/shared/ui';

import { resetFilters } from '@/entities/filters/model/filtersSlice';

import styles from './styles.module.scss';

export const QustionsEmptyList = () => {
	const dispatch = useAppDispatch();

	const onResetClick = () => {
		dispatch(resetFilters());
	};

	return (
		<div className={styles.container}>
			<p>По данным фильтрам вопросов нет</p>
			<Button onClick={onResetClick}>Сбросить фильтры</Button>
		</div>
	);
};
