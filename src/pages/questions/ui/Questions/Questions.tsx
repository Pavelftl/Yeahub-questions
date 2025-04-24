import { useFiltersFromUrl } from '@/features/filters/lib/useFiltersFromUrl';
import { Container } from '@/shared/ui';

import { Filters } from '@/widgets/filters/ui';
import { QuestionList } from '@/widgets/questionExtraInfo';

export const Questions = () => {
	useFiltersFromUrl();

	return (
		<Container>
			<QuestionList />
			<Filters />
		</Container>
	);
};
