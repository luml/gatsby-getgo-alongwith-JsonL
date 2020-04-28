import React from 'react';
import useDarkMode from 'use-dark-mode';


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="toggle-mode">
      <button type="button" onClick={darkMode.disable}>
        <span role="img" aria-label="lightMode">🔆</span>
      </button>
      <button type="button" onClick={darkMode.enable}>
        <span role="img" aria-label="darkMode">🌙</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;