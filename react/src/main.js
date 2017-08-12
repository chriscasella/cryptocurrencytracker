import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from './components/currencyList';

$(function() {
  ReactDOM.render(
    <CurrencyList />,
    document.getElementById('app')
  );
});
