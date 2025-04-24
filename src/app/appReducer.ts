import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/api/baseApi';

import { filtersReducer } from '@/entities/filters';

export const rootReducer = combineReducers({
	filters: filtersReducer,
	[baseApi.reducerPath]: baseApi.reducer,
});
