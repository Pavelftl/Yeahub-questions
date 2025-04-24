import { toggleItem } from '@/shared/lib/toggleItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters } from './types';

const initialState: IFilters = {
	page: 1,
	title: '',
	specialization: '11',
	keywords: '',
	skills: [],
	complexity: [],
	rate: [],
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
			state.page = 1;
		},
		setSpecialization: (_, action: PayloadAction<string>) => {
			return {
				...initialState,
				specialization: action.payload,
				page: 1,
			};
		},

		setSkills: (state, action: PayloadAction<string>) => {
			console.log('Before toggle:', state.skills);
			state.skills = toggleItem(state.skills, action.payload);
			console.log('After toggle:', state.skills);
			state.page = 1;
		},
		setComplexity: (state, action: PayloadAction<string>) => {
			state.complexity = toggleItem(state.complexity, action.payload);
			state.page = 1;
		},
		setRate: (state, action: PayloadAction<string>) => {
			state.rate = toggleItem(state.rate, action.payload);
			state.page = 1;
		},
		setKeywords: (state, action: PayloadAction<string>) => {
			state.keywords = action.payload;
			state.page = 1;
		},
		setAllFilters: (state, action: PayloadAction<Partial<IFilters>>) => {
			return {
				...state,
				...action.payload,
			};
		},
		resetFilters: () => initialState,
	},
});

export const {
	setPage,
	setTitle,
	setSpecialization,
	setSkills,
	setComplexity,
	setRate,
	setKeywords,
	setAllFilters,
	resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
