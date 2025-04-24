import styles from './styles.module.scss';

interface Props {
	rate: number;
	complexity: number;
	className?: string;
}

export const MetaInfo = ({ rate, complexity, className }: Props) => {
	return (
		<ul className={`${className ?? ''} ${styles.details}`}>
			<li>
				Рейтинг:
				<span>{rate}</span>
			</li>
			<li>
				Сложность:
				<span>{complexity}</span>
			</li>
		</ul>
	);
};
