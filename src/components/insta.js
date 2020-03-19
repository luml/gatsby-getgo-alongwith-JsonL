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
                box-shadow: 0 10px 40px #22222244;
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
              {/* <img
                alt="Kitten"
                src="https://placekitten.com/300/300"
                css={css`
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                `}
              /> */}
              🐱
              <h3
                css={css`
                  font-size: 1em;
                  text-decoration: none;
                  margin: 0 0 0 5px;
                `}
                //   href={`https://github.com/${login}/${hub.name}`}
              >
                {hub.name}
              </h3>
            </div>

            {hub.homepage !== '' && (
              <a
                css={css`
                  color: darkcyan;
                  text-decoration: none;
                  font-size: smaller;

                  > span {
                    animation-name: flow-and-shake;
                    animation-duration: calc(var(--speed) * 1s);
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                  }

                  @keyframes flow-and-shake {
                    0%,
                    100% {
                      transform: translate(
                          calc(var(--x) * -1%),
                          calc(var(--y) * -1%)
                        )
                        rotate(calc(var(--rotation) * -1deg));
                    }
                    50% {
                      transform: translate(
                          calc(var(--x) * 1%),
                          calc(var(--y) * 1%)
                        )
                        rotate(calc(var(--rotation) * 1deg));
                    }
                  }

                  ${'' /* couldn't animate */}

                  :hover > span {
                    --speed: 0.1;
                    --x: 1;
                    --y: -1;
                    --rotation: -1;
                  }
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
            {hub.description !== 'null' && (
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
            )}
          </div>
        ))}
      </div>
      <a href={`https://github.com/${login}`}>See more on Github &rarr;</a>
    </>
  );
};

export default Insta;
