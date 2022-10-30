import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';
import styles from './App.module.scss';
import { dataConverter } from './dataConverter';
import { filterRows, sortRows } from './utils';
import { FilterValueType, SortValue } from './types';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(undefined);
  const [dataForView, setDataForView] = useState<Row[]>(undefined);
  const [searchedValue, setSearchedValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<FilterValueType[]>([]);
  const [selectedSort, setSelectedSort] = useState<SortValue>('');

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const convertedData = dataConverter(users, accounts, images);
        setData(convertedData);
        setDataForView(convertedData);
      }
    );
  }, []);

  useEffect(() => {
    setDataForView(
      sortRows(filterRows(data, searchedValue, selectedFilters), selectedSort)
    );
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
        <Table rows={dataForView || mockedData} />
      </div>
    </StyledEngineProvider>
  );
};
