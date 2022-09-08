import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './helpers/scss/main.scss';
import './helpers/scss/default/_color.scss';
import NavBar from './views/commons/nabvar';
import MainPage from './views/pages/components/main_page.js';
import AboutMe from './views/pages/components/MainDisplayComponents/about_me.js';
import Site from './views/pages/components/MainDisplayComponents/site.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route exact path='/AboutMe' element={<AboutMe/>}/>
        <Route exact path='/Site' element={<Site />}/>
      </Routes>
    </Router>
    </React.StrictMode>
);