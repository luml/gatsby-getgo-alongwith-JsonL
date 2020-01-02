import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
    }
  }
`;

const PostTemplate = ({ pageContext }) => (
  <Layout>
    <h1>post title</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by who
    </p>
    <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    <p>Post body goes here</p>
    <ReadLink to="/">&larr; back to posts</ReadLink>
  </Layout>
);

export default PostTemplate;
