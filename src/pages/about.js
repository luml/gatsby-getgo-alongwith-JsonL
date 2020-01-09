import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

export const query = graphql`
  query {
    file(relativePath: { eq: "profileElio.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 550, height: 650) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const About = ({ data }) => (
  <Layout>
    <h1>Elio here,</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
    <p>
      This is my first blog website, so far I really don't know what I wanna
      post. But I promise myself I will come back frequently.
    </p>
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
