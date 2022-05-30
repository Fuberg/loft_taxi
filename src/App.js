import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Profile } from './Profile';
import './App.css';

const PAGES = {
  home: <Home/>,
  about: <About />,
  profile: <Profile/>
}

class App extends React.Component {
  state = {
    currentPage: "home"
  };

  navigateTo = (page) => { 
    this.setState({currentPage:page});
  }
  
  render() { 
    return <>
      <header class="topline">
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <button class="menu__button" onClick={() => this.navigateTo("home")}>Home</button>
            </li>
            <li class="menu__item">
              <button class="menu__button" onClick={() => this.navigateTo("about")}>About</button>
            </li>
            <li class="menu__item">
              <button class="menu__button" onClick={() => this.navigateTo("profile")}>Profile</button>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <section class="section">
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </>;
  }
}

export default App;
