import { combineReducers } from '@reduxjs/toolkit';

import { questionsSlice } from '@/entities/question';

import { baseApi } from '@/shared/api/baseApi';

export const rootReducer = combineReducers({
	questions: questionsSlice,
	[baseApi.reducerPath]: baseApi.reducer,
});
