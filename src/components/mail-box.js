import React from 'react';
import { css } from '@emotion/core';

const Mailbox = () => {
  return (
    <div
      css={css`
        background: radial-gradient(circle at top right, teal, transparent);
        border: none;
        color: white;
        font-size: 1.25rem;
        max-width: 550px;
      `}
    >
      Please note that you may not reach me. This is because I am nobody and far
      away and probably didn’t see you.
    </div>
  );
};

export default Mailbox;
