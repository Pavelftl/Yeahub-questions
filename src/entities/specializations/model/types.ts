import { IApiResponse } from '@/shared/types/types';

export interface ISpecialization {
	id: number;
	title: string;
	imageSrc: string;
}

export type SpecializationResponse = IApiResponse<ISpecialization[]>;
