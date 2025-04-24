import styles from './styles.module.scss';

interface Props {
	title: string;
	imageSrc: string;
}

export const SkillTitle = ({ title, imageSrc }: Props) => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={imageSrc} alt='Skill' />
			<span>{title}</span>
		</div>
	);
};
