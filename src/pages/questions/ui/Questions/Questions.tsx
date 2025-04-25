import { Container } from '@/shared/ui';

import { useFiltersFromUrl } from '@/features/questions/sync-url-filters';

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
