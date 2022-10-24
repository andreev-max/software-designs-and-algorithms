import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';
import styles from './App.module.scss';
import { dataConverter } from './dataConverter';
import {
  filterByFilters,
  filterBySearch,
  getUniqueRows,
  sortRows,
} from './utils';
import { FilterValueType, SortValue } from './types';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

let ALL_ROWS: Row[] = [];

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(undefined);
  const [searchedValue, setSearchedValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<FilterValueType[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortValue>('');

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const convertedData = dataConverter(users, accounts, images);
        ALL_ROWS = convertedData;
        setData(convertedData);
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = [
      ...filterBySearch(ALL_ROWS, searchedValue),
      ...filterByFilters(ALL_ROWS, selectedFilters),
    ];

    let newData: Row[] = [];

    if (searchedValue || selectedFilters.length) {
      newData = getUniqueRows(filteredData);
    } else {
      newData = ALL_ROWS;
    }

    setData(sortRows(newData, selectedSort));
  }, [searchedValue, selectedFilters, selectedSort]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <Sort setSelectedSort={setSelectedSort} />
          </div>
          <Search
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
          />
        </div>
        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  );
};
