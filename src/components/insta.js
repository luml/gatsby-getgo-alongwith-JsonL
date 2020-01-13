import React from 'react';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPosts = useInstagram();
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
          :first-of-type {
            margin-top: 1rem;
          }
        `}
      >
        {instaPosts.map(hub => (
          <div
            css={css`
              box-shadow: 0;
              display: block;
              max-width: calc(100%);
              height: auto;
              transition: 200ms box-shadow linear;
              padding: 0.5rem 0 0.5rem 0.2rem;
              text-decoration: none;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <h3
              css={css`
                text-decoration: none;
              `}
              //   href={`https://github.com/${login}/${hub.name}`}
            >
              {hub.name}
            </h3>
            {hub.homepage !== '' && (
              <a
                css={css`
                  color: darkcyan;
                  text-decoration: none;
                `}
                href={`${hub.homepage}`}
              >
                {hub.homepage}
                <span role="img" aria-label="homepage-url">
                  👉🏻
                </span>
              </a>
            )}
            {hub.homepage === '' && (
              <p
                css={css`
                  color: peru;
                  text-decoration: none;
                `}
              >
                coming soon
                <span role="img" aria-label="siteUrl">
                  💪
                </span>
              </p>
            )}
            {hub.description !== 'null' && <p>{hub.description}</p>}
            <img
              alt="Kitten"
              src="http://placekitten.com/300/300"
              css={css`
                width: 30px;
                height: 30px;
                border-radius: 50%;
              `}
            />
          </div>
        ))}
      </div>
      <a href={`https://github.com/${login}`}>See more on Github &rarr;</a>
    </>
  );
};

export default Insta;
