import { LinkButton, MetaInfo, TextHTML } from '@/shared/ui';
import { Accordion } from '@/shared/ui/Accordion/Accordion';

import { IQuestion } from '../../model/types';

import styles from './styles.module.scss';

interface Props {
	question: IQuestion;
}

export const QuestionItem = ({ question }: Props) => {
	return (
		<li key={question.id} className={styles.listItem}>
			<Accordion
				link={<LinkButton id={question.id} />}
				body={
					<MetaInfo
						className={styles.meta}
						rate={question.rate}
						complexity={question.complexity}
					/>
				}
				title={question.title}
			>
				<TextHTML text={question.shortAnswer} />
			</Accordion>
		</li>
	);
};
