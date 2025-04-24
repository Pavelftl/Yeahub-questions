import styles from './styles.module.scss';

interface Props {
	isOpen: boolean;
	link: React.ReactNode;
	body: React.ReactNode;
	children: React.ReactNode;
}

export const AccordionBody = ({ isOpen, link, body, children }: Props) => {
	return (
		<div className={`${styles.extraInfo} ${isOpen ? styles.active : ''}`}>
			{body}
			{children}
			{link}
		</div>
	);
};
