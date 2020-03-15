import React from 'react';
import { css } from '@emotion/core';

const Mailbox = () => {
  return (
    <div
      css={css`
        display: flex;
        background: radial-gradient(circle at bottom left, #246767 93.7%, transparent);
        border: none;
        color: white;
        font-size: 1.25rem;
        max-width: 550px;
      `}
    >
      <p css={css`
        padding: 1rem;
      `}>
        Please note that you may not reach me. This is because I am nobody and
        far away and probably didn’t see you.
      </p>
      <a
        css={css`
          height: 25px;
          margin: 1px auto;
        `}
        href="https://www.instagram.com/eliolou01/"
      >
        <img
          src="https://img.icons8.com/doodle/48/000000/instagram-new.png"
          alt="icons8.com ins icon"
        />
      </a>
    </div>
  );
};

export default Mailbox;
