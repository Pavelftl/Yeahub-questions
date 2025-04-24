import { Suspense } from 'react';

import { Layout } from '@/app/layout/Layout';

import Loading from '@/shared/ui/Loading/Loading';

import { NotFound } from '@/pages/notFound';
import { QuestionPage } from '@/pages/question';
import { Questions } from '@/pages/questions';
import { ErrorBoundary } from '@/shared/ui';

export const routes = {
	path: '/',
	Component: Layout,
	children: [
		{
			index: true,
			Component: Questions,
		},
		{
			path: 'question/:id',
			element: (
				<ErrorBoundary fallback={<div>Не удалось загрузить страницу</div>}>
					<Suspense fallback={<Loading />}>
						<QuestionPage />
					</Suspense>
				</ErrorBoundary>
			),
		},
		{
			path: '*',
			Component: NotFound,
		},
	],
};
