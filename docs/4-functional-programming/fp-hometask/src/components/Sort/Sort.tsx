import { FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './Sort.module.scss';
import { SortValue, SortValueType } from 'src/types';

interface SortProps {
  selectedSort: SortValue;
  setSelectedSort: (value: SortValue) => void;
}

// OR

//interface SortProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export const Sort: FC<SortProps> = ({ selectedSort, setSelectedSort }) => {
  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={e => setSelectedSort(e.target.value as SortValueType)}
        value={selectedSort}
      >
        <FormControlLabel
          value={SortValueType.DESC}
          control={<Radio />}
          label="desc"
        />
        <FormControlLabel
          value={SortValueType.ASC}
          control={<Radio />}
          label="asc"
        />
      </RadioGroup>
    </FormControl>
  );
};
