import styles from './styles.module.scss';

interface Props {
	children: React.ReactNode;
}

export const Section = ({ children }: Props) => {
	return <section className={styles.content}>{children}</section>;
};
