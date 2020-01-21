import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// This is query data
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        time
      }
      body
    }
  }
`;

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          {post.frontmatter.time}, posted by {post.frontmatter.author},
        </p>
        <MDXRenderer title={post.title}>{post.body}</MDXRenderer>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.frontmatter.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.frontmatter.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default PostTemplate;
