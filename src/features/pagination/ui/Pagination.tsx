import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import { useAppDispatch, useAppSelector } from '@/app/appStore';

import { setPage } from '@/entities/filters/model/filtersSlice';

import { getPaginationRange } from '../model/utils/helpers';

import styles from './styles.module.scss';

interface Props {
	total: number;
	limit: number;
}

export const Pagination = ({ total, limit }: Props) => {
	const dispatch = useAppDispatch();
	const currentPage = useAppSelector(state => state.filters.page);
	const totalPages = Math.ceil(total / limit);
	const pages = getPaginationRange(currentPage, totalPages);

	const changePage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			dispatch(setPage(page));
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				disabled={currentPage === 1}
				onClick={() => changePage(currentPage - 1)}
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
					onClick={() => changePage(page as number)}
					disabled={page === currentPage}
				>
					{page}
				</button>
			))}

			<button
				className={styles.arrow}
				onClick={() => changePage(currentPage + 1)}
				disabled={currentPage === totalPages || totalPages === 0}
			>
				<FaArrowRightLong />
			</button>
		</div>
	);
};
