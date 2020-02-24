import React from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  return (
    <div
      css={css`
        display: flex;
        border-radius: 0.2rem;
        padding: 0.2rem;
        background: radial-gradient(circle at bottom left, #246767, transparent);
        border: none;
        color: white;
        font-size: 1.25rem;
        max-width: 550px;
      `}
    >
      <p>
        You can get in touch with me by opening the nearest window and yelling
        out of it real loud. Because I live in far far away in Beijing, China.
      </p>
      <a href="https://twitter.com/lumeiling5">
        <svg
          css={css`
            height: 30px;
          `}
          viewBox="328 355 335 276"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
            style={{ fill: '#3BA9EE' }}
          />
        </svg>
      </a>
    </div>
  );
};

export default Wave;
