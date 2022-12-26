import React from 'react';
// import { Counter } from "./features/counter/Counter";
// import { useLocation, withRouter } from "react-router";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../src/features/home/Home';
import { Header } from '../src/features/header/Header';
import { Footer } from '../src/features/footer/Footer';
import './App.css';

const App = (props) => {
  return (
    <>
      <Router>
        <Header className={`fixed`} {...props} />
        <Routes>
          <Route path={'/'} element={<Home />} exact={true} />
          <Route path={'/home'} element={<Home />} exact={true} />
          <Route path={'/markets'} element={<Home />} exact={true} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
