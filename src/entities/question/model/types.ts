import { IApiResponse } from '@/shared/types/types';

import { ISkills } from '@/entities/skills/model/types';
import { ISpecialization } from '@/entities/specializations/model/types';

export interface IQuestion {
	id: number;
	title: string;
	description: string;
	shortAnswer: string;
	longAnswer: string;
	questionSkills: ISkills[];
	questionSpecializations: ISpecialization[];
	keywords: string[];
	imageSrc: string;
	complexity: number;
	rate: number;
}

export type QuestionResponse = IApiResponse<IQuestion[]>;
