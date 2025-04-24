import { Link } from 'react-router';

import { useAppDispatch } from '@/app/appStore';

import logoSrc from '@/shared/assets/logo.svg';
import textLogoSrc from '@/shared/assets/textLogo.svg';

import { resetFilters } from '@/entities/filters/model/filtersSlice';

import styles from './styles.module.scss';

export const LogoNavigation = () => {
	const dispatch = useAppDispatch();

	const onLogoClick = () => {
		dispatch(resetFilters());
	};

	return (
		<Link to={'/'} onClick={onLogoClick} className={styles.link}>
			<img src={logoSrc} alt='logo' className={styles.logo} />
			<img src={textLogoSrc} alt='text logo' className={styles.textLogo} />
		</Link>
	);
};
