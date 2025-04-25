import { useSelector } from 'react-redux';

import { RootState } from '@/app/appStore';

export const useAppSelector = useSelector.withTypes<RootState>();
