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
          @import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');

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
          
          ${'' /* For contact part with ins && twitter */}
          .contact-box {
            display: flex;
            border-radius: 0.2rem;
            padding: 0.2rem;
            background: radial-gradient(circle at bottom left, #246767 90%, transparent);
            border: none;
            color: white;
            font-size: 1.25rem;
            max-width: 550px;
            height: 200px;
          }
          .contact-box > p {
            padding: 1rem;
            font-style: italic;
            overflow: auto;

          }
          .social-media-block {
            height: 25px;
            margin: 1px auto;
          }
          .social-media-logo {
            position: relative;
            display: flex;
            transform: rotate(-25deg) skew(25deg);
            transform-style: preserve-3d;
          }
          .social-media-logo li {
            position: relative;
            list-style: none;
            width: 60px;
            height: 60px;
            margin: 0px 20px;
          }
          .social-media-logo li:before{
            content: '';
            position: absolute;
            bottom: -10px;
            left: -5px;
            width: 100%;
            height: 10px;
            background: #1e3f4c;
            trnasform-origin: top;
            transform: skewX(-41deg);
          }
          .social-media-logo li:after{
            content: '';
            position: absolute;
            top:5px;
            left: -9px;
            width: 9px;
            height: 100%;
            background: #1e3f4c;
            trnasform-origin: right;
            transform: skewY(-49deg);
          }
          .social-media-logo li span{
            position: absolute;
            top: 0;
            lef: 0;
            width: 100%;
            height: 100%;
            display: flex !important;
            background: #315563;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 30px !important;
          }
          .social-media-logo li:hover span {
            z-index: 1000;
            transition: .3s;
            color: #fff;
            box-shadw: -1px 1px 1px rgba(0, 0, 0, .5);
          }
          .social-media-logo li:hover span:nth-of-type(1){
            transform: translate(5px, -5px);
            opacity: .8;
          }
          .social-media-logo li:nth-of-type(1):hover span{
            background: #7097a7 !important;
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