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
          display: grid;
          max-width: 550px;
        `}
      >
        {instaPosts.map(hub => (
          <a
            css={css`
              box-shadow: 0;
              display: block;
              max-width: calc(100%);
              transition: 200ms box-shadow linear;
              padding: 0.5rem 0 0.5rem 0.2rem;
              text-decoration: none;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
            href={`https://github.com/${login}/${hub.name}`}
          >
            <h3>{hub.name}</h3>
            {hub.homepage !== '' && (
              <a
                css={css`
                  color: darkcyan;
                `}
                href={`${hub.homepage}`}
              >
                {hub.homepage}👉🏻
              </a>
            )}
            <p>{hub.description}</p>
          </a>
        ))}
      </div>
      <a href={`https://github.com/${login}`}>See more on Github &rarr;</a>
    </>
  );
};

export default Insta;
