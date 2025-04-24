import { baseApi } from '@/shared/api/baseApi';
import { IParams } from '@/shared/types/types';

import { SkillsResponse } from '../model/types';

export const skillsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllSkills: builder.query<SkillsResponse, IParams>({
			query: ({ ...params }) => ({
				url: 'skills',
				params,
			}),
		}),
	}),
});

export const { useGetAllSkillsQuery } = skillsApi;
