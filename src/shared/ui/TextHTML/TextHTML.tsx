import styles from './styles.module.scss';

interface Props {
	text: string;
}

export const TextHTML = ({ text }: Props) => {
	return (
		<pre className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
	);
};
