import React from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Filtering with Redux</h1>
      <Filter />
      <Products />
    </div>
  );
};

export default App;
