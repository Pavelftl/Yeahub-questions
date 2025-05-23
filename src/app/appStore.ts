import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/api/baseApi';

import { rootReducer } from './appReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
