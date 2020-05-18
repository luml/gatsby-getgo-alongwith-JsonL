import React from 'react';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  let instaPosts = useInstagram();
  instaPosts = instaPosts.filter(hub => hub.homepage !== '' && hub.description !== '')
  const { login } = instaPosts[0];
  return (
    <>
      <h2>Github repos from @{login}</h2>
      <div
        css={css`
          {
            display: grid;
            max-width: 550px;
            justify-items: stretch;
            grid-template-columns: repeat(2, 49%);
            grid-gap: 0.3rem;
          }
          > div:first-of-type {
            margin-top: 1rem;
          }
        `}
      >
        {instaPosts.map(hub => (
          <div
            className="grid-system"
            key={hub.id}
            css={css`
              box-shadow: 0 2px 10px #22222244;
              border-radius: 0.2rem;
              display: block;
              max-width: calc(100%);
              height: calc(10em + 50px);
              transition: 200ms box-shadow linear;
              padding: 0.5rem 0 0.5rem 0.2rem;
              text-decoration: none;
              padding: 0.5rem;
              transition: 0.5s;

              :focus,
              :hover {
                box-shadow: 0 10px 20px #22222244;
                z-index: 10;
                background: #22222222;
                transform: translate(0.1rem, -0.2rem);
              }

              ${'' /* reft transfrom to right, right transfrom to left */}
            `}
          >
            <div
              css={css`
                {
                  display: flex;
                  flex-direction: row;
                }
              `}
            >
              <span role="img" aria-label="a kitten">🐱</span>
              <h3
                css={css`
                  font-size: 1em;
                  text-decoration: none;
                  margin: 0 0 0 5px;
                `}
              >
                {hub.name}
              </h3>
            </div>
            <a className="shadowEffect"
              css={css`
                color: darkcyan;
                text-decoration: none;
                font-size: smaller;
              `}
              href={`${hub.homepage}`}
            >
              <span role="img" aria-label="homepage-url">
                👉{hub.homepage}
              </span>
            </a>
            <p
              css={css`
                {
                  font-size: smaller;
                  font-style: italic;
                }
              `}
            >
              “ {hub.description} ”
            </p>
          </div>
        ))}
      </div>
      <div>
        {/* Put inline element a into a block element div, so it can have attribute margin-top */}
        <a href={`https://github.com/${login}`}>See more on Github &rarr;</a>
      </div>
    </>
  );
};

export default Insta;
