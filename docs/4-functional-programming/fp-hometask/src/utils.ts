import { Row } from './components';
import { FilterValueType, SortValueType } from './types';

export function filterBySearch(rows: Row[], value: string): Row[] {
  if (!rows || !value) {
    return [];
  }

  return [...rows].filter(
    ({ username, country, name }) =>
      username.toLowerCase().includes(value.toLowerCase()) ||
      country.toLowerCase().includes(value.toLowerCase()) ||
      name.toLowerCase().includes(value.toLowerCase())
  );
}

export function filterByFilters(rows: Row[], value: string[]): Row[] {
  if (!rows || !value.length) {
    return [];
  }

  if (value.length === 2) {
    return rows.filter(({ posts }) => !posts || posts > 100);
  }

  if (value.includes(FilterValueType.WithoutPosts)) {
    return rows.filter(({ posts }) => !posts);
  }

  if (value.includes(FilterValueType.MoreThan100Posts)) {
    return rows.filter(({ posts }) => posts > 100);
  }
}

export function sortRows(rows: Row[], sortValue: string) {
  if (!rows) {
    return [];
  }

  if (sortValue === SortValueType.DESC) {
    return rows.sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1
    );
  } else if (sortValue === SortValueType.ASC) {
    return rows.sort((a, b) =>
      a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1
    );
  } else {
    return rows;
  }
}

export function getUniqueRows(rows: Row[]) {
  return rows.filter(
    (v, i, a) =>
      a.findIndex(v2 => ['username', 'name'].every(k => v2[k] === v[k])) === i
  );
}
