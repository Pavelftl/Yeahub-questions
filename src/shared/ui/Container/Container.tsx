import styles from './styles.module.scss';

interface Props {
	children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
	return <div className={styles.contentLayout}>{children}</div>;
};
