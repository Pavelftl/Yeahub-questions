import styles from './styles.module.scss';

interface Props {
	message?: string;
	onRetry?: () => void;
}

export const ErrorMessage = ({
	message = 'Не удалось загрузить данные.',
	onRetry,
}: Props) => {
	return (
		<div className={styles.error}>
			<p>{message}</p>
			{onRetry && (
				<button className={styles.retryButton} onClick={onRetry}>
					Повторить попытку
				</button>
			)}
		</div>
	);
};
