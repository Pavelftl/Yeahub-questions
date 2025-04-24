import { useNavigate } from 'react-router';

import { useAppDispatch } from '@/app/appStore';

import { setKeywords } from '@/entities/filters/model/filtersSlice';

import styles from './styles.module.scss';

interface Props {
	keywords: string[];
}

export const KeywordsList = ({ keywords }: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const onKeywordClick = (keyword: string) => {
		dispatch(setKeywords(keyword));
		navigate('/');
	};

	return (
		<div className={styles.filterSection}>
			<h3 className={styles.title}> Ключевые слова:</h3>
			<ul className={styles.list}>
				{keywords.map(keyword => (
					<li className={styles.item} key={keyword}>
						<span onClick={() => onKeywordClick(keyword)}>#{keyword}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
