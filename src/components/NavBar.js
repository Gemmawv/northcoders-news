import React from 'react';
import '../css/NavBar.css';

const NavBar = function () {
  return (
    <div>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <a className='navbar-item header-text is-centered' href="/">
              <img 
              className="logo"
              src="https://cdn-images-1.medium.com/max/184/1*LdnSztHVYhhd8K8EqlgCJQ@2x.png" alt="Northcoders News logo" width="100" height="30" />
            </a>
            <h1 className="title is-1 is-bold" id="title-text">
              <strong>Northcoders News</strong>
            </h1>
            <h2 className="subtitle is-3">
              News and conversation
            </h2>
          </div>
        </div>
      </section>

      <nav className='navbar'>
        <div className="tabs is-centered is-fullwidth">
          <ul>
            <li className="is-active">
              <a className="navbar-item is-tab" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navbar-item is-tab" href="/topics">
                All topics
              </a>
            </li>
            <li>
              <a className="navbar-item is-tab" href="/topics/football/articles">
                Football
              </a>
            </li>
            <li>
              <a className="navbar-item is-tab" href="/topics/cooking/articles">
              Cooking
              </a>
            </li>
            <li>
              <a className="navbar-item is-tab" href="/topics/coding/articles">
              Coding
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;