import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';

const About = () => (
  <Layout>
    <h1>Elio here,</h1>
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
