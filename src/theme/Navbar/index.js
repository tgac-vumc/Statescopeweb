import React, { useState, useEffect } from 'react';
import Navbar from '@theme-original/Navbar';
import SearchButton from '@site/src/components/SearchButton';
import { useColorMode } from '@docusaurus/theme-common';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

function CustomNavbar(props) {
  const { colorMode, setColorMode } = useColorMode();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen mode: ${err.message} (${err.name})`);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="ssNavbarShell">
      <Navbar {...props} />

      <div className="ssNavbarRight">
        {/* Search */}
        <div className="ssSearchButton">
          <SearchButton />
        </div>

        {/* Dark mode */}
        <button
          type="button"
          className="ssIconButton"
          onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
          aria-label={colorMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span aria-hidden="true">{colorMode === 'dark' ? '☀️' : '🌙'}</span>
        </button>

        {/* Fullscreen */}
        <button
          type="button"
          className="ssIconButton"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
        </button>
      </div>
    </div>
  );
}

export default CustomNavbar;
