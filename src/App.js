import React from 'react';
import { HomeWithAuth } from './Home';
import { Map } from './Map';
import { ProfileWithAuth } from './Profile';
import './App.css';
import { connect } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

class App extends React.Component {
  render() { 
    return <>
      <header className="topline">
        <nav className="menu" >
          <ul className="menu__list">
            <li className="menu__item">
              <Link to='/'>Home</Link>
            </li>
            <li className="menu__item">
              <Link to='/map'>Map</Link>
            </li>
            <li className="menu__item">
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="section">
          <Routes>
            <Route path='/' element={<HomeWithAuth />} />
            <Route path='/map' element={<PrivateRoute><Map /></PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute><ProfileWithAuth /></PrivateRoute>} />
          </Routes>
        </section>
      </main>
    </>;
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
