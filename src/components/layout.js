import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Helmet from 'react-helmet';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  function goTop() {
    window.scroll({ top: 0 });
  }

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          ${'' /* Remember you can reverse it and go dark by default but change to a light theme if a user specifically wants it: */}
          body {
            background-color: white;
            color: black;
            transition: all 0.3s ease-in-out;
          }
          body.dark {
            background-color: black;
            color: white;
            transition: all 0.3s ease-in-out;

            header {
              background: black;
              a {
                color: white;
              }
              a.current-page {
                border-bottom: 1px solid #eee;
              }
              button {
                background: black;
              }
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            em,
            strong,
            article {
              color: white;
            }
            div.say-hi {
              background: teal;
            }
            div.grid-system {
              background: teal;
              > a {
                color: hotPink;
              }
            }
            .head-hero {
              h1,
              p,
              h6 {
                color: black;
              }
            }
          }

          ${'' /* @media screen and (prefers-color-scheme: dark) {
            body {
              background-color: black;
              color: white;
            }
          } */}

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 550px;
        `}
      >
        {children}
      </main>
      <div css={css`text-align: center`}>
        <button
          css={css`
            border-radius: 3px;
            color: white;
            margin: 0 1rem;
            background: black;
          `}
          onClick={goTop}
        >
          Top
        </button>
      </div>
      <footer
        css={css`
          font-size: small;
          display: flex;
          justify-content: center;
        `}
      >
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">&nbsp;Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;
