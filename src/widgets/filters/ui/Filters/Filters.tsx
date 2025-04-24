import { useAppDispatch, useAppSelector } from '@/app/appStore';

import {
	COMPLEXITY_OPTIONS,
	INITIAL_LIMIT,
	RATE_OPTIONS,
} from '@/shared/constants/constants';
import { ErrorMessage, Sidebar, Skeleton } from '@/shared/ui';

import { setComplexity, setRate } from '@/entities/filters/model/filtersSlice';
import { useGetAllSkillsQuery } from '@/entities/skills/api/skillsApi';
import { useGetAllSpecializationsQuery } from '@/entities/specializations/api/specializations';

import {
	ExpandableFilterList,
	FilterGroup,
	SkillsList,
	SpecializationsList,
} from '@/features/filters/choose-filters';
import { SearchInput } from '@/features/filters/search-question';

export const Filters = () => {
	const dispatch = useAppDispatch();

	const { specialization, rate, complexity } = useAppSelector(
		state => state.filters
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
			<ExpandableFilterList total={specializations?.total}>
				{limit => <SpecializationsList limit={limit} />}
			</ExpandableFilterList>
			<ExpandableFilterList total={skills?.total}>
				{limit => <SkillsList limit={limit} />}
			</ExpandableFilterList>
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
