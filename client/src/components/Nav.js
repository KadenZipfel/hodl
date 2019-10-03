import React from 'react';
import github from '../images/github.png';
import '../layout/components/nav.sass';

function Nav() {
  return (
    <nav className="nav">
      <h1 className="nav__brand">
        HODL
      </h1>
      <a href="https://github.com/KadenZipfel/hodl" className="nav__icon">
        <img src={github} alt="Github" className="nav__icon" />
      </a>
    </nav>
  )
}

export default Nav;