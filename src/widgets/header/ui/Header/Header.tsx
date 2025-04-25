import { Link } from 'react-router';

import logoSrc from '@/shared/assets/logo.svg';
import textLogoSrc from '@/shared/assets/textLogo.svg';
import { useAppDispatch } from '@/shared/lib/hooks';

import { resetFilters } from '@/entities/question/model/questionsSlice';

import styles from './styles.module.scss';

export const Header = () => {
	const dispatch = useAppDispatch();

	const onLogoClick = () => {
		dispatch(resetFilters());
	};

	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link to={'/'} onClick={onLogoClick} className={styles.link}>
					<img src={logoSrc} alt='logo' className={styles.logo} />
					<img src={textLogoSrc} alt='text logo' className={styles.textLogo} />
				</Link>
			</div>
		</header>
	);
};
