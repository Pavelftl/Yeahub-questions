import { Header } from '@/widgets/header';
import { Outlet } from 'react-router';

export const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main className='container'>
				<Outlet />
			</main>
		</div>
	);
};
