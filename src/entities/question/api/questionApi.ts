import { baseApi } from '@/shared/api/baseApi';
import { filterParams } from '@/shared/lib/filterParams';
import { IParams } from '@/shared/types/types';

import { IQuestion, QuestionResponse } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAllQuestions: builder.query<QuestionResponse, IParams>({
			query: params => ({
				url: 'questions/public-questions',
				params: filterParams(params),
			}),
		}),
		getQuestionById: builder.query<IQuestion, string>({
			query: id => `questions/public-questions/${id}`,
		}),
	}),
});

export const { useGetAllQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
