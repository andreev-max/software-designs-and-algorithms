import { Row } from './components';
import { FilterValueType, SortValueType } from './types';

function filterBySearchedValue(row: Row, searchedValue: string): boolean {
  return (
    row.username.toLowerCase().includes(searchedValue.toLowerCase()) ||
    row.country.toLowerCase().includes(searchedValue.toLowerCase()) ||
    row.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
}

function filterBySelectedFilters(row: Row, selectedFilters: string[]): boolean {
  let noPosts: boolean = false;
  let moreThan100Posts: boolean = false;

  if (selectedFilters.includes(FilterValueType.MoreThan100Posts)) {
    moreThan100Posts = row.posts > 100;
  }

  if (selectedFilters.includes(FilterValueType.WithoutPosts)) {
    noPosts = !row.posts;
  }

  return noPosts || moreThan100Posts;
}

export function filterRows(
  rows: Row[],
  searchedValue: string,
  selectedFilters: string[]
): Row[] {
  if (!rows) {
    return [];
  }

  if (!selectedFilters.length && !searchedValue) {
    return rows;
  }

  return rows.filter(row => {
    return (
      (searchedValue && filterBySearchedValue(row, searchedValue)) ||
      (selectedFilters.length && filterBySelectedFilters(row, selectedFilters))
    );
  });
}

export function sortRows(rows: Row[], sortValue: string) {
  if (!rows) {
    return [];
  }

  if (!sortValue) {
    return rows;
  }

  const sortedRows = [...rows];

  if (sortValue === SortValueType.DESC) {
    return sortedRows.sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1
    );
  } else if (sortValue === SortValueType.ASC) {
    return sortedRows.sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1
    );
  }
}
