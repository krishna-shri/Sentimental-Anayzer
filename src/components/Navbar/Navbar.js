import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo center'>
          Sentimental Anaysis
        </a>
        <ul id='nav-mobile' className='left hide-on-med-and-down'>
          <li>
            <a href=''> New Analysis</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
