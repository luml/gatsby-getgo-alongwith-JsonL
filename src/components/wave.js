import React from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  return (
    <div
      css={css`
        display: flex;
        border-radius: 0.2rem;
        padding: 0.2rem;
        background: radial-gradient(circle at bottom left, #246767 90%, transparent);
        border: none;
        color: white;
        font-size: 1.25rem;
        max-width: 550px;
      `}
    >
      <p css={css`
        padding: 1rem;
      `}>
        You can get in touch with me by opening the nearest window and yelling
        out of it real loud. Because I live in far far away in Beijing, China.
      </p>
      <div className="social-media-block">
        <ul className="social-media-logo">
          <li>
            <a href="https://twitter.com/lumeiling5">
              <span className="fa fa-twitter"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wave;
