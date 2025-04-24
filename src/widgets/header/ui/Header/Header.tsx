import { LogoNavigation } from '@/features/navigation/navigate-to-main';

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<LogoNavigation />
			</div>
		</header>
	);
};
