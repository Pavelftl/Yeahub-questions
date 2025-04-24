import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/app/appStore';

import { Button, SkillTitle } from '@/shared/ui';

import { setSkills } from '@/entities/filters/model/filtersSlice';
import { useGetAllSkillsQuery } from '@/entities/skills/api/skillsApi';
import { ISkills } from '@/entities/skills/model/types';

import styles from './styles.module.scss';

interface Props {
	limit?: number;
	isCurrent?: boolean;
	questionSkills?: ISkills[];
}

export const SkillsList = ({
	limit,
	isCurrent = false,
	questionSkills,
}: Props) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { specialization, skills: selectedSkills } = useAppSelector(
		state => state.filters
	);

	const { data } = useGetAllSkillsQuery({
		specializations: specialization,
		limit,
	});

	const skills = data?.data || [];

	const onSkillToggle = (id: number) => {
		dispatch(setSkills(String(id)));
		navigate('/');
	};

	return (
		<div className={styles.filterSection}>
			<h3 className={styles.title}>Навыки:</h3>
			<ul className={styles.list}>
				{isCurrent
					? questionSkills?.map(skill => (
							<li className={styles.item} key={skill.id}>
								<Button onClick={() => onSkillToggle(skill.id)}>
									<SkillTitle title={skill.title} imageSrc={skill.imageSrc} />
								</Button>
							</li>
					  ))
					: skills.map(skill => (
							<li className={styles.item} key={skill.id}>
								<Button
									active={selectedSkills.includes(String(skill.id))}
									onClick={() => onSkillToggle(skill.id)}
								>
									<SkillTitle title={skill.title} imageSrc={skill.imageSrc} />
								</Button>
							</li>
					  ))}
			</ul>
		</div>
	);
};
