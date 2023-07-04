
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../src/Components/SearchBar.jsx';

describe('SearchBar', () => {
  test('calls onSearch callback with search text when form is submitted', () => {
    let searchText = '';
    const onSearchMock = (text) => {
      searchText = text;
    };
    const { getByLabelText, getByRole } = render(<SearchBar onSearch={onSearchMock} />);

    const input = getByLabelText('Search');
    fireEvent.change(input, { target: { value: 'test' } });

    const submitButton = getByRole('button', { name: /search/i });
    fireEvent.click(submitButton);

    expect(searchText).toBe('test');
  });
});