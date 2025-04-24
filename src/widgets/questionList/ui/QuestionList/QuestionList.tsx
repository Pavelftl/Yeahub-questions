import { useAppSelector } from '@/app/appStore';

import { ErrorMessage, Section, Skeleton } from '@/shared/ui';

import { QuestionItem } from '@/entities/question';
import { useGetAllQuestionsQuery } from '@/entities/question/api/questionApi';
import { useGetSpecializationByIdQuery } from '@/entities/specializations/api/specializations';

import { QustionsEmptyList } from '../QustionsEmptyList/QustionsEmptyList';

import { useSyncFiltersWithUrl } from '@/features/filters/lib/useSincFiltersWithUrl';
import { Pagination } from '@/features/pagination';
import styles from './styles.module.scss';

export const QuestionList = () => {
	const filters = useAppSelector(state => state.filters);

	useSyncFiltersWithUrl(filters);

	const {
		data: questions,
		isError,
		isLoading,
		refetch,
	} = useGetAllQuestionsQuery(filters);

	const { data: specialization } = useGetSpecializationByIdQuery(
		filters.specialization
	);

	if (isError) {
		return (
			<Section>
				<ErrorMessage
					message='Не удалось загрузить список вопросов'
					onRetry={refetch}
				/>
			</Section>
		);
	}

	if (isLoading) {
		return (
			<Section>
				<div>
					{Array.from({ length: 10 }).map((_, i) => (
						<Skeleton
							key={i}
							height='50px'
							borderRadius='12px'
							marginBottom='16px'
						/>
					))}
				</div>
			</Section>
		);
	}

	return (
		<Section>
			<h1 className={styles.title}>Вопросы {specialization?.title}</h1>
			{questions?.data.length === 0 ? (
				<QustionsEmptyList />
			) : (
				<ul>
					{questions?.data.map(question => (
						<QuestionItem key={question.id} question={question} />
					))}
					<Pagination
						total={questions?.total ?? 0}
						limit={questions?.limit ?? 0}
					/>
				</ul>
			)}
		</Section>
	);
};
