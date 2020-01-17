import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  // `` two tilde is template literals; useState is a React Hook
  const label = `👋 ${waves} ${waves === 1 || waves === 0 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: teal;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
