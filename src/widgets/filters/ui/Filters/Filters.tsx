import {
	COMPLEXITY_OPTIONS,
	INITIAL_LIMIT,
	RATE_OPTIONS,
} from '@/shared/constants/constants';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { ErrorMessage, ExpandableButton, Sidebar, Skeleton } from '@/shared/ui';

import {
	setComplexity,
	setRate,
} from '@/entities/question/model/questionsSlice';
import { useGetAllSkillsQuery } from '@/entities/skills/api/skillsApi';
import { useGetAllSpecializationsQuery } from '@/entities/specializations/api/specializations';

import { FilterGroup } from '@/features/questions/choose-filter-group';
import { SearchInput } from '@/features/questions/search-questions';
import { SkillsList } from '@/features/skills/choose-skills';
import { SpecializationsList } from '@/features/specializations/choose-specializations';

export const Filters = () => {
	const dispatch = useAppDispatch();

	const { specialization, rate, complexity } = useAppSelector(
		state => state.questions.filters
	);

	const { data: specializations, isLoading } =
		useGetAllSpecializationsQuery(INITIAL_LIMIT);

	const { data: skills, isLoading: IsLoadingSkills } = useGetAllSkillsQuery({
		specialization: specialization,
		limit: INITIAL_LIMIT,
	});

	if (isLoading || IsLoadingSkills) {
		return (
			<Sidebar>
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
			</Sidebar>
		);
	}

	if (!specializations || !skills) {
		return (
			<Sidebar>
				<ErrorMessage message='Не удалось загрузить фильтры' />
			</Sidebar>
		);
	}

	return (
		<Sidebar>
			<SearchInput />
			<ExpandableButton total={specializations?.total}>
				{limit => <SpecializationsList limit={limit} />}
			</ExpandableButton>
			<ExpandableButton total={skills?.total}>
				{limit => <SkillsList limit={limit} />}
			</ExpandableButton>
			<FilterGroup
				selected={complexity}
				onClick={value => dispatch(setComplexity(value))}
				title='Уровень сложности'
				options={COMPLEXITY_OPTIONS}
			/>
			<FilterGroup
				selected={rate}
				onClick={value => dispatch(setRate(value))}
				title='Рейтинг'
				options={RATE_OPTIONS}
			/>
		</Sidebar>
	);
};
