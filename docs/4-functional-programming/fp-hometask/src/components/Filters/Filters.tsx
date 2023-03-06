import { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { FilterValueType } from 'src/types';

interface FiltersProps {
  selectedFilters: FilterValueType[];
  setSelectedFilters: (value: FilterValueType[]) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: FilterValueType.WithoutPosts,
  },
  {
    title: FilterValueType.MoreThan100Posts,
  },
];

export const Filters: FC<FiltersProps> = ({
  selectedFilters,
  setSelectedFilters,
}) => {
  const onChange = ({ title }) => {
    console.log(title); // for debugging

    let updatedFilters;

    if (selectedFilters.find(filter => filter === title)) {
      updatedFilters = selectedFilters.filter(filter => filter !== title);
    } else {
      updatedFilters = [...selectedFilters, title];
    }

    setSelectedFilters(updatedFilters);
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map(option => (
          <li
            value={option.title}
            key={option.title}
            onClick={() => onChange(option)}
          >
            <Checkbox
              checked={
                !!selectedFilters.find(filter => filter === option.title)
              }
              value={option.title}
              size="small"
              color="primary"
              onChange={() => onChange(option)}
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
