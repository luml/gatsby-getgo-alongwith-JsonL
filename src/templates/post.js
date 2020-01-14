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
        image {
          publicURL
        }
      }
      body
    }
  }
`;

// TODO react component render
class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    // const siteTitle = this.props.data.site.siteMetadata.title;
    // TODO What is markdownRemark
    debugger;
    const { previous, next } = this.props.pageContext;
    debugger;

    return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
            font-size: 0.75rem;
          `}
        >
          Posted by {post.frontmatter.author}
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
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <ReadLink to="/">&larr; back to all posts</ReadLink>
      </Layout>
    );
  }
}

// const PostTemplate = ({ data: { mdx: post } }) => (
//   <Layout>
//     <h1>{post.frontmatter.title}</h1>
//     <p
//       css={css`
//         font-size: 0.75rem;
//       `}
//     >
//       Posted by {post.frontmatter.author}
//     </p>
//     <MDXRenderer title={post.title}>{post.body}</MDXRenderer>
//     <ReadLink to="/">&larr; back to all posts</ReadLink>
//   </Layout>
// );

export default PostTemplate;
