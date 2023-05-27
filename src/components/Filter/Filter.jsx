import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/Filter/filterSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterLabel>
  );
};
