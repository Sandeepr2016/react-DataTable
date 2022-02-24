import React, { useRef, useState } from 'react';
import './style.css';
import DataTable from './dataTable.js';

export default function App() {
  const data = [
    { id: 1, ftname: 'first1', ltname: 'last1', age: 24 },
    { id: 2, ftname: 'first2', ltname: 'last2', age: 26 },
    { id: 3, ftname: 'first3', ltname: 'last3', age: 30 },
    { id: 4, ftname: 'reddy', ltname: 'anchuri', age: 29 },
  ];
  const [searchItem, setSearchItem] = useState('');

  const inpRef = useRef();

  const clickHandler = () => {
    setSearchItem(inpRef.current.value);
  };

  return (
    <div>
      <h2>Data Table </h2>
      <DataTable primData={data} searchItem={searchItem} />
      <h4>Filter by ftname and ltname</h4>
      <input type="text" ref={inpRef} />{' '}
      <button name="filter" onClick={clickHandler}>
        Filter
      </button>
      <h4>Sort by age and id</h4>
    </div>
  );
}
