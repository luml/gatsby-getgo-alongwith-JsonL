import React from 'react';
import useDarkMode from 'use-dark-mode';


const DarkModeToggle = () => {
  const currentTime = new Date().getHours();
  let initialState = true ? currentTime > 18 : false
  const darkMode = useDarkMode(initialState);

  return (
    <div className="toggle-mode">
      <button type="button" onClick={darkMode.disable}>
        <span role="img" aria-label="lightMode">🏝</span>
      </button>
      <button type="button" onClick={darkMode.enable}>
        <span role="img" aria-label="darkMode">🕯</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;