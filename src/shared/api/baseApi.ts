import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { BASE_API } from '../config/api.ts';

const baseQueryWithRetry = retry(fetchBaseQuery({ baseUrl: BASE_API }), {
	maxRetries: 1,
});

export const baseApi = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	refetchOnMountOrArgChange: true,
	endpoints: () => ({}),
});
