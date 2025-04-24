import loadingIcon from '@/shared/assets/loading.png';
import styles from './styles.module.scss';

const Loading = () => {
	return (
		<div className={styles.loading}>
			<img src={loadingIcon} alt='loading' />
		</div>
	);
};

export default Loading;
