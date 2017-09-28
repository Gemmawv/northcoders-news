import React from 'react';
import '../css/NavBar.css';

const NavBar = function () {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item header-text' href="/">
            <img className="logo"
              src="https://cdn-images-1.medium.com/max/184/1*LdnSztHVYhhd8K8EqlgCJQ@2x.png" alt="Northcoders News logo" width="75" height="20" />
            Northcoders News
                    </a>
        </div>
        <div className="navbar-tabs">
          <a className="navbar-item is-tab is-active" href="/">
            Home
                    </a>
          <a className="navbar-item is-tab" href="/topics">
            All topics
                        </a>
          <a className="navbar-item is-tab" href="#">
            Football
                            </a>
          <a className="navbar-item is-tab" href="#">
            Cooking
                            </a>
          <a className="navbar-item is-tab" href="#">
            Coding
                            </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;