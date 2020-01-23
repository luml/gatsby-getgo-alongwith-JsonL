import React from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  return (
    <div
      css={css`
        border-radius: 0.2rem;
        padding: 0.2rem;
        background: radial-gradient(circle at bottom left, teal, transparent);
        border: none;
        color: white;
        font-size: 1.25rem;
        max-width: 550px;
      `}
    >
      You can get in touch with me by opening the nearest window and yelling out
      of it real loud. Because I live in far far away in Beijing, China.
    </div>
  );
};

export default Wave;
