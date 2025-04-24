import { QuestionAnswerCard, QuestionTitle } from '@/entities/question';
import { IQuestion } from '@/entities/question/model/types';

import styles from './styles.module.scss';

interface Props {
	question: IQuestion;
}

export const QuestionMainInfo = ({ question }: Props) => {
	return (
		<div className={styles.container}>
			<QuestionTitle question={question} />
			<QuestionAnswerCard answer={question.shortAnswer} />
			<QuestionAnswerCard answer={question.longAnswer} isLongAnswer={true} />
		</div>
	);
};
