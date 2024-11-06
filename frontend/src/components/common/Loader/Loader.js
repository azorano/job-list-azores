/*

src/components/common/Loader.js

*/

// Loader is set, but needs improvement

import { useEffect, useContext } from 'react';
import { LoadingContext } from '../../../context/LoadingContext';

const Loader = () => {
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    const handleLoading = () => {
      const root = document.getElementById('root');
      const wrapper = document.getElementById('main-wrapper');
      const body = document.body;
      const html = document.documentElement;

      // Create preloader div
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      preloader.style.position = 'fixed';
      preloader.style.top = 0;
      preloader.style.left = 0;
      preloader.style.right = 0;
      preloader.style.bottom = 0;
      preloader.style.zIndex = 1999;
      preloader.style.height = '100%';
      preloader.style.width = '100vw';
      preloader.style.backdropFilter = 'blur(3px)';
      preloader.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      preloader.innerHTML = `<div class="preloader"><span></span>Loading...<span></span></div>`;

      // Insert preloader before main-wrapper
      root.insertBefore(preloader, wrapper);

      // Disable pointer events
      preloader.style.pointerEvents = 'none';
      preloader.style.userSelect = 'none';
      body.style.pointerEvents = 'none';
      html.style.pointerEvents = 'none';
      body.style.userSelect = 'none';
      html.style.userSelect = 'none';

      // Fade-out and remove preloader after a delay
      setTimeout(() => {
        preloader.style.transition = 'opacity 0.5s ease';
        preloader.style.opacity = 0;

        setTimeout(() => {
          preloader.style.display = 'none';
          root.removeChild(preloader);
          html.style.userSelect = 'auto';
          html.style.pointerEvents = 'auto';
          body.style.pointerEvents = 'auto';
          body.style.userSelect = 'auto';
          document.documentElement.style.removeProperty('pointer-events');
          document.documentElement.style.removeProperty('user-select');
          document.body.style.removeProperty('pointer-events');
          document.body.style.removeProperty('user-select');
          document.documentElement.removeAttribute('style');
          document.body.removeAttribute('style');
        }, 2000); // Match the fade-out duration
      }, 2000); // Initial delay before fade-out
    };

    if (isLoading) {
      handleLoading();
    }
  }, [isLoading]);

  return null; // nothing to render since the preloader is dynamically created
};

export default Loader;
