import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 190, height: 230, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const About = ({ data }) => (
  <Layout>
    <div
      className="say-hi"
      css={css`
         {
          display: flex;
          flex-direction: row-reverse;
          background: #22222222;
          box-shadow: 0 1px 10px #22222244;
        }
      `}
    >
      <Img
        css={css`
          border-radius: 50%;
        `}
        fixed={data.file.childImageSharp.fixed}
        alt="a profile picture"
      />
      <p
        css={css`
           {
            width: 35%;
            font-size: small;
            font-family: -apple-system-body;
            direction: rtl;
            margin-right: 1rem;

            :first-letter {
              font-size: 20px;
            }
          }
        `}
      >
        This is my first blog website, so far I really don't know what I wanna
        post. So I made a card list linked my github repos, and thoes are just some very basic and demo-ish small projects. I also wrote some humble words when I got emotional😛. This blog site is not something another level, it's nothing to show off. But I promise myself I will come back frequently
        <br></br>
        <Link to="/resume/">&rarr;See my resume</Link>
      </p>
      <h1
        css={css`
           {
            margin: 4.5rem 2rem;
          }
        `}
      >
        Say hi
      </h1>
    </div>
    <p
      css={css`
        font-style: italic;
        font-size: 13px;
      `}
    >
      PS. I did this blog get-go from https://frontendmasters.com with master
      Json Lengstorf
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
