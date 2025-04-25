import { useState } from 'react';

import { INITIAL_LIMIT } from '@/shared/constants/constants';

import styles from './styles.module.scss';

interface Props {
	children: (limit: number) => React.ReactNode;
	total: number;
}

export const ExpandableButton = ({
	children,
	total = INITIAL_LIMIT,
}: Props) => {
	const [showAll, setShowAll] = useState(false);

	const limit = showAll ? total : INITIAL_LIMIT;

	return (
		<div>
			{children(limit)}
			{total > INITIAL_LIMIT && (
				<button
					className={styles.extButton}
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? 'Скрыть' : 'Посмотреть все'}
				</button>
			)}
		</div>
	);
};
