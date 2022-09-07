import React from 'react';
import { AppRouter } from './components/assets/AppRouter';
import { Header } from './components/Header/Header';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter/>
    </div>
  );
}

export default App;
