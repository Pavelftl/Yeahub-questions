import { IOption } from '@/shared/types/types';
import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

interface Props {
	title: string;
	options: IOption[];
	selected: string[];
	onClick: (value: string) => void;
}

export const FilterGroup = ({ title, options, selected, onClick }: Props) => {
	return (
		<div className={styles.filterSection}>
			<h2 className={styles.title}>{title}</h2>
			<ul className={styles.list}>
				{options.map(option => (
					<li className={styles.item} key={option.title}>
						<Button
							active={selected.includes(option.value)}
							onClick={() => onClick(option.value)}
						>
							{option.title}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};
