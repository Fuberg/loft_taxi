import React from 'react';
import { HomeWithAuth } from './Home';
import { Map } from './Map';
import { ProfileWithAuth } from './Profile';
import './App.css';
import { withAuth } from './AuthContext';

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />
}

class App extends React.Component {
  state = {
    currentPage: "home"
  };

  navigateTo = (page) => { 
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else { 
      this.setState({ currentPage: "home" });
    }
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
              <button class="menu__button" onClick={() => this.navigateTo("map")}>Map</button>
            </li>
            <li class="menu__item">
              <button class="menu__button" onClick={() => this.navigateTo("profile")}>Profile</button>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <section class="section">
          {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
        </section>
      </main>
    </>;
  }
}

export default withAuth(App);
