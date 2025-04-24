export interface IApiResponse<T> {
	data: T;
	total: number;
	page: number;
	limit: number;
}

export interface IParams {
	page?: number;
	limit?: number;
	title?: string;
	specialization?: string;
	specializations?: string;
	keywords?: string;
	skills?: string[];
	complexity?: string[];
	rate?: string[];
}

export interface IOption {
	title: string;
	value: string;
}
