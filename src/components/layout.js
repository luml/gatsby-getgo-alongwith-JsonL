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
            .say-hi>div>picture>img {
              margin-top: 0;
            }
            .shadowEffect {
              text-shadow: 1px 1px 1px darkcyan;
            }
            .toggle-mode {
              margin-top: 0;
              float: right;
            }
            .toggle-mode>button {
              margin-top: 0;
              border-style: none;
              background: #eee;
            }
          }
          body.light-mode {
            background-color: white;
            color: black;
            transition: all 0.5s ease-in-out;

            ${'' /* Rotate to left for light mode */}
            .company {
              padding: 20px;
              color: black;
              transform: skewY(-5deg);
              transition: all 0.5s ease-in-out;
            }
            .experience {
              margin: 0.8em 0;
              maxWidth: 50em;
              transform: skewY(5deg);
            }
            .toggle-mode > button:first-of-type {
              display: none;
            }
          }
          body.dark-mode {
            --dark-bg: #1f1d1f;
            --dark-hd: black;
            --dark-content: white;
            --hot-pink: hotPink;

            background-color: var(--dark-bg);
            color: var(--dark-content);
            transition: all 0.5s ease-in-out;

            header {
              background: var(--dark-hd);
              a {
                color: var(--dark-content);
              }
              a.current-page {
                border-bottom: 1px solid #eee;
              }
              button {
                background: var(--dark-hd);
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
              color: var(--dark-content);
            }
            .say-hi {
              background: linear-gradient(90deg, teal, var(--dark-hd));
            }
            .grid-system {
              background: #246767;
              > a {
                color: var(--hot-pink);
              }
            }
            .grid-system:hover {
              background: rgb(36, 151, 153);
            }
            main a:visited {
              color: rgb(216, 0, 216);
            }
            .head-hero {
              h1,
              p,
              p > a,
              h6 {
                color: var(--dark-hd);
              }
            }
            ${'' /* Rotate to right for dark mode */}
            .company {
              padding: 20px;
              color: black;
              transform: skewY(5deg);
              transition: all 0.5s ease-in-out;
            }
            .experience {
              margin: 0.8em 0;
              maxWidth: 50em;
              transform: skewY(-5deg);
            }
            .toggle-mode > button:last-of-type {
              display: none;
            }
          }

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