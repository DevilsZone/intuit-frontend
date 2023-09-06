import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchBar: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => (
    <Search
        placeholder="Search by legal name"
        onSearch={onSearch}
        enterButton
    />
);
