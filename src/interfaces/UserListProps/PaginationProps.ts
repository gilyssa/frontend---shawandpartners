export interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  maxPages: number;
}