import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import styles from './styles.module.scss';

interface Props {
	id: number;
}

export const LinkButton = ({ id }: Props) => {
	return (
		<Link to={`/question/${id}`} className={styles.link}>
			Подробнее
			<FaArrowRight />
		</Link>
	);
};
