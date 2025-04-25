import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Pagination } from '@/shared/ui';

import { setPage } from '@/entities/question/model/questionsSlice';

interface Props {
	total: number;
	limit: number;
}

export const QuestionPagination = ({ total, limit }: Props) => {
	const dispatch = useAppDispatch();

	const currentPage = useAppSelector(state => state.questions.filters.page);
	const totalPages = Math.ceil(total / limit);

	const onPage = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			dispatch(setPage(page));
		}
	};

	const onNextPage = () => {
		dispatch(setPage(currentPage + 1));
	};

	const onPrevPage = () => {
		if (currentPage > 1) dispatch(setPage(currentPage - 1));
	};

	return (
		<Pagination
			currentPage={currentPage}
			totalPages={totalPages}
			onPage={onPage}
			onPrevPage={onPrevPage}
			onNextPage={onNextPage}
		/>
	);
};
