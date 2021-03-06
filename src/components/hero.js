import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #65e9a380 2rem, #9198e500);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 4px 4px 4px #65e9a380;
    font-size: 2.25rem;
  }

  p,
  a {
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "zhang-kaiyv-beijing.jpg" }) {
        sharp: childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox className="head-hero">
        <h1 css={css`color: rgb(26, 96, 222);`}>KINDER WORDS + WARMER HEARTS &hearts;</h1>
        <p css={css`color: rgb(26, 96, 180);`}>
          Hello from Beijing! <Link to="/about/" css={css`color: rgb(26, 96, 256);`}>Learn about me &rarr;</Link>
        </p>
        <h6
          css={css`
            font-style: italic;
            opacity: 0.7;
            letter-spacing: 0.1rem;
            background-color: #f3ec78;
            background-image: linear-gradient(rgb(22,10,256),rgb(218,26,80));
            background-size: 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
          `}
        >
          --Thank you a thousand for reading my blog--
        </h6>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
