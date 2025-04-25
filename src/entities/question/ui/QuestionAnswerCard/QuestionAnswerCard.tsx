import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Section, TextHTML } from '@/shared/ui';

import styles from './styles.module.scss';

interface Props {
	answer: string;
	isLongAnswer?: boolean;
}

export const QuestionAnswerCard = ({ answer, isLongAnswer = false }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [height, setHeight] = useState<number>(0);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? contentRef.current.scrollHeight : 400);
		}
	}, [isOpen]);

	return (
		<Section>
			<h2 className={styles.title}>
				{isLongAnswer ? 'Развернутый ответ' : 'Краткий ответ'}
			</h2>
			<div
				ref={contentRef}
				className={`${isLongAnswer ? styles.longAnswer : ''}`}
				style={{ maxHeight: `${height}px` }}
			>
				<TextHTML text={answer} />
				{isLongAnswer && (
					<div
						className={`${styles.buttonContainer} ${isOpen ? styles.open : ''}`}
					>
						<button
							className={styles.button}
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? 'Свернуть' : 'Развернуть'}
							<IoIosArrowDown
								className={`${styles.arrow} ${isOpen ? styles.active : ''}`}
							/>
						</button>
					</div>
				)}
			</div>
		</Section>
	);
};
