import { Link } from 'react-router';

import styles from './styles.module.scss';

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>404 — Страница не найдена</h1>
			<p className={styles.description}>
				Похоже, вы попали на несуществующую страницу.
			</p>
			<Link to='/' className={styles.link}>
				На главную
			</Link>
		</div>
	);
};
