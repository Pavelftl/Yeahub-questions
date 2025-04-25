export interface IPaginationsProps {
	totalPages: number;
	currentPage: number;
	onPage: (page: number) => void;
	onPrevPage: () => void;
	onNextPage: () => void;
}
