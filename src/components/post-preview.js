import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 100px;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
          img:hover {
              transform: scale(1.1);
              filter: brightness(130%) opacity(1) contrast(100%);
          }
          img {
            transition: all 500ms ease 0s!important;
            filter: brightness(100%) opacity(0.7) contrast(150%);
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link className="shadowEffect" to={post.slug} css={css`
          text-shadow: 1px 1px 1px blue;
        `}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);


export default PostPreview;