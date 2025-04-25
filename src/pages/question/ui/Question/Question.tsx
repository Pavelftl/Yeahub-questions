import { useParams } from 'react-router';

import {
	BackButton,
	Container,
	ErrorMessage,
	Section,
	Sidebar,
	Skeleton,
} from '@/shared/ui';

import { useGetQuestionByIdQuery } from '@/entities/question/api/questionApi';

import { QuestionExtraInfo } from '@/widgets/questionExtraInfo/ui/QuestionExtraInfo/QuestionExtraInfo';
import { QuestionMainInfo } from '@/widgets/quiestionMainInfo';

const Question = () => {
	const { id } = useParams();

	const {
		data: question,
		isLoading,
		isError,
		refetch,
	} = useGetQuestionByIdQuery(id!);

	if (isLoading) {
		return (
			<Container>
				<Section>
					<Skeleton height='151px' borderRadius='12px' marginBottom='16px' />
					<Skeleton height='171px' borderRadius='12px' marginBottom='16px' />
					<Skeleton height='350px' borderRadius='12px' marginBottom='16px' />
				</Section>
				<Sidebar>
					<Skeleton height='266px' borderRadius='12px' marginBottom='16px' />
				</Sidebar>
			</Container>
		);
	}

	if (isError || !question) {
		return (
			<Section>
				<ErrorMessage message='Не удалось загрузить вопрос' onRetry={refetch} />
			</Section>
		);
	}

	return (
		<>
			<BackButton />
			<Container>
				<QuestionMainInfo question={question} />
				<QuestionExtraInfo question={question} />
			</Container>
		</>
	);
};

export default Question;
