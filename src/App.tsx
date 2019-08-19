import React from 'react';
import * as ReactRedux from 'react-redux';
import store from './redux/configureStore';

import logo from './logo.svg';
import './App.css';

import FilmsSearch from './components/FilmsSearch';

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <FilmsSearch/>
    </ReactRedux.Provider>
  );
}

export default App;
