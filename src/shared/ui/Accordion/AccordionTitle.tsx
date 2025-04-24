import { IoIosArrowDown } from 'react-icons/io';

import styles from './styles.module.scss';

interface Props {
	title: string;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const AccordionTitle = ({ title, isOpen, setIsOpen }: Props) => {
	return (
		<div className={styles.info} onClick={() => setIsOpen(!isOpen)}>
			<p className={styles.title}>{title}</p>
			<IoIosArrowDown
				className={`${styles.arrow} ${isOpen ? styles.active : ''}`}
			/>
		</div>
	);
};
