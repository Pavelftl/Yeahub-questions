import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { toggleItem } from '@/shared/lib/toggleItem';

import { IQuestionFilters } from './types';

interface QuestionsState {
	filters: IQuestionFilters;
}

const initialState: QuestionsState = {
	filters: {
		page: 1,
		title: '',
		specialization: '11',
		keywords: '',
		skills: [],
		complexity: [],
		rate: [],
	},
};

const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.filters.page = action.payload;
		},
		setTitle: (state, action: PayloadAction<string>) => {
			state.filters.title = action.payload;
			state.filters.page = 1;
		},
		setSpecialization: (_, action: PayloadAction<string>) => {
			return {
				filters: {
					...initialState.filters,
					specialization: action.payload,
					page: 1,
				},
			};
		},

		setSkills: (state, action: PayloadAction<string>) => {
			state.filters.skills = toggleItem(state.filters.skills, action.payload);
			state.filters.page = 1;
		},
		setComplexity: (state, action: PayloadAction<string>) => {
			state.filters.complexity = toggleItem(
				state.filters.complexity,
				action.payload
			);
			state.filters.page = 1;
		},
		setRate: (state, action: PayloadAction<string>) => {
			state.filters.rate = toggleItem(state.filters.rate, action.payload);
			state.filters.page = 1;
		},
		setKeywords: (state, action: PayloadAction<string>) => {
			state.filters.keywords = action.payload;
			state.filters.page = 1;
		},
		setAllFilters: (
			state,
			action: PayloadAction<Partial<IQuestionFilters>>
		) => {
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
} = questionsSlice.actions;

export default questionsSlice.reducer;
