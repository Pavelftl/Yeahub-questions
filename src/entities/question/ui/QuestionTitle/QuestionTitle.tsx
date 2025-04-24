import { Section } from '@/shared/ui';

import { IQuestion } from '../../model/types';

import styles from './styles.module.scss';

interface Props {
	question: IQuestion;
}

export const QuestionTitle = ({ question }: Props) => {
	return (
		<Section>
			<div className={styles.container}>
				<img src={question.imageSrc} alt='TitleImage' />
				<div>
					<h1 className={styles.title}>{question.title}</h1>
					<p className={styles.description}>{question.description}</p>
				</div>
			</div>
		</Section>
	);
};
