import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

export const BackButton = () => {
	const navigate = useNavigate();

	const onBackButton = () => {
		navigate(-1);
	};

	return (
		<button onClick={onBackButton} className={styles.backButton}>
			<MdOutlineKeyboardArrowLeft size={24} />
			<span>Назад</span>
		</button>
	);
};
