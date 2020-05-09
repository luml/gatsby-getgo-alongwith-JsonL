import React from 'react';
import { css } from '@emotion/core';

const Mailbox = () => {
  return (
    <div
      css={css`
        display: flex;
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
        Please note that you may not reach me. This is because I am nowhere and
        everywhere or probably just too busy.
      </p>
      <div className="social-media-block">
        <ul className="social-media-logo">
          <li>
            <a href="https://www.instagram.com/eliolou01/">
              <span className="fa fa-instagram"></span>
            </a> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mailbox;
