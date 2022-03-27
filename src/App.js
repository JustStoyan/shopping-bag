import React from 'react';
import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Home'
import AuthCountex from './store/AuthContext';

function App() {


  console.log();
  return (<AuthCountex.Provider value={{
    isLogged: false,
  }}>
    <Header />
    <Main />
    <Footer />
  </AuthCountex.Provider >
  );
}

export default App;
