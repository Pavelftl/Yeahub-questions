import styles from './styles.module.scss';

interface Props {
	children: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
	return <aside className={styles.sidebar}>{children}</aside>;
};
