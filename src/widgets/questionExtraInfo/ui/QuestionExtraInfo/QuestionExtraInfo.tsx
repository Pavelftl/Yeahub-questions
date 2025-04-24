import { MetaInfo, Sidebar } from '@/shared/ui';

import { IQuestion } from '@/entities/question/model/types';

import { KeywordsList, SkillsList } from '@/features/filters/choose-filters';

import styles from './styles.module.scss';

interface Props {
	question: IQuestion;
}

export const QuestionExtraInfo = ({ question }: Props) => {
	return (
		<Sidebar>
			<div className={styles.container}>
				<h3 className={styles.title}>Уровень:</h3>
				<MetaInfo rate={question.rate} complexity={question.complexity} />
			</div>
			<SkillsList questionSkills={question.questionSkills} isCurrent />
			<KeywordsList keywords={question.keywords} />
		</Sidebar>
	);
};
