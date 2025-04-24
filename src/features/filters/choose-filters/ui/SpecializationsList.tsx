import { useAppDispatch, useAppSelector } from '@/app/appStore';

import { Button } from '@/shared/ui';

import { setSpecialization } from '@/entities/filters/model/filtersSlice';
import { useGetAllSpecializationsQuery } from '@/entities/specializations/api/specializations';

import styles from './styles.module.scss';

interface Props {
	limit: number;
}

export const SpecializationsList = ({ limit }: Props) => {
	const dispatch = useAppDispatch();

	const selectedSpecialization = useAppSelector(
		state => state.filters.specialization
	);

	const { data } = useGetAllSpecializationsQuery(limit);

	const specializations = data?.data || [];

	const onToggleSpecialization = (id: number) => {
		dispatch(setSpecialization(String(id)));
	};

	return (
		<div className={styles.filterSection}>
			<h3 className={styles.title}>Cпециализация</h3>
			<ul className={styles.list}>
				{specializations.map(specialization => (
					<li className={styles.item} key={specialization.id}>
						<Button
							active={selectedSpecialization === String(specialization.id)}
							onClick={() => onToggleSpecialization(specialization.id)}
						>
							<span>{specialization.title}</span>
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
};
