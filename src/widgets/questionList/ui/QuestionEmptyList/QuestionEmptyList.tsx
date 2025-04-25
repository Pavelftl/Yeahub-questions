import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

import { resetFilters } from '@/entities/question/model/questionsSlice';

import styles from './styles.module.scss';

export const QuestionEmptyList = () => {
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
