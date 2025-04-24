import styles from './styles.module.scss';

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	active?: boolean;
}

export const Button = ({ children, onClick, active }: Props) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${active ? styles.isActive : ''}`}
		>
			{children}
		</button>
	);
};
