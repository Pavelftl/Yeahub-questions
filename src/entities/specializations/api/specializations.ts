import { baseApi } from '@/shared/api/baseApi';

import { ISpecialization, SpecializationResponse } from '../model/types';

export const specializationsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllSpecializations: builder.query<
			SpecializationResponse,
			number | undefined
		>({
			query: limit => ({
				url: 'specializations',
				params: {
					limit,
				},
			}),
		}),
		getSpecializationById: builder.query<ISpecialization, string>({
			query: id => ({
				url: `specializations/${id}`,
			}),
		}),
	}),
});

export const { useGetAllSpecializationsQuery, useGetSpecializationByIdQuery } =
	specializationsApi;
