import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    {/* TODO import google fonts */}
    {/* <link href="https://fonts.font.im/css?family=Anton" rel="stylesheet"></link> */}
    <NavLink to="/" fontWeight="bold">
      To Be A Master
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
      <button
        css={css`
          width: 30px;
          border: 0;
          margin: 0 11px 0 0;
          background: #eee;
          margin-left: 0.5rem;
          transform: scale(1.7);
        `}
        onClick={changeMode}
      >
        <span role="img" aria-label="Active mode">
          🌛
        </span>
      </button>
    </nav>
  </header>
);

function changeMode() {
  // TODO toggle here doesn't work
  // document.querySelector('.modeToggle').addEventListener("click", function() {
  //   if(document.querySelector("body").className === "" || document.querySelector("body").className === 'dark'){
  //     document.querySelector('body').classList.toggle("dark");
  //   }
  // })
  if (document.querySelector('body').classList.contains('dark')) {
    document.querySelector('body').classList.remove('dark');
    document.querySelector('span[aria-label="Active mode"]').innerHTML = '🌛';
  } else {
    document.querySelector('body').classList.add('dark');
    document.querySelector('span[aria-label="Active mode"]').innerHTML = '🌞';
  }
}

export default Header;
