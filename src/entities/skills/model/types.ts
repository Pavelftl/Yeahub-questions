import { IApiResponse } from '@/shared/types/types';

import { ISpecialization } from '@/entities/specializations/model/types';

export interface ISkills {
	id: number;
	title: string;
	imageSrc: string;
	specialization: ISpecialization[];
}

export type SkillsResponse = IApiResponse<ISkills[]>;
