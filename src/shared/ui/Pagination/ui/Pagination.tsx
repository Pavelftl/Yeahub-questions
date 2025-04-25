import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import { IPaginationsProps } from '../model/types/types';
import { getPaginationRange } from '../model/utils/helpers';

import styles from './styles.module.scss';

export const Pagination = ({
	currentPage,
	totalPages,
	onPage,
	onPrevPage,
	onNextPage,
}: IPaginationsProps) => {
	const pages = getPaginationRange(currentPage, totalPages);

	return (
		<div className={styles.pagination}>
			<button
				disabled={currentPage === 1}
				onClick={onPrevPage}
				className={styles.arrow}
			>
				<FaArrowLeftLong />
			</button>

			{pages.map((page, i) => (
				<button
					key={i}
					className={`${styles.paginationButton} ${
						currentPage === page ? styles.active : ''
					}`}
					onClick={() => onPage(page as number)}
					disabled={page === currentPage}
				>
					{page}
				</button>
			))}

			<button
				className={styles.arrow}
				onClick={onNextPage}
				disabled={currentPage === totalPages || totalPages === 0}
			>
				<FaArrowRightLong />
			</button>
		</div>
	);
};
