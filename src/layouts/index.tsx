import React, { useContext, useEffect, useRef, useState } from 'react';

// Components
import Spotify from '../components/spotify';
import Footer from './footer';
import Header from './header';

// Context
import UIContext from '../context/ui';

// Externals
import { Box } from 'theme-ui';

// Hooks
import useMediaQuery from '../hooks/useMediaQuery';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { spotifyPlayerToggled } = useContext(UIContext);

  const isDpr1 = useMediaQuery('(-webkit-device-pixel-ratio: 1)');
  const isDpr3 = useMediaQuery('(-webkit-device-pixel-ratio: 3)');
  const isLandscape = useMediaQuery('(orientation: landscape)');

  const [height, setHeight] = useState<string>('100%');
  const [width, setWidth] = useState<string>('100%');

  const pageRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const measureCanvasSize = () => {
      const pageElement = pageRef.current;

      if (pageElement) {
        const canvasHeight = pageElement.clientHeight;
        const canvasWidth = pageElement.clientWidth;

        // This is for issues iOS rendering the html incorrectly
        //https://discourse.threejs.org/t/html-content-positioned-wrong-in-ios/77066
        var height = (isDpr1 || isDpr3) && !isLandscape ? canvasHeight - 1 : canvasHeight + 0.04;
        var width = isDpr1 || isDpr3 ? (isLandscape ? canvasWidth + 1.02 : canvasWidth + 1) : canvasWidth;

        setHeight(`${height}px`);
        setWidth(`${width}px`);
      }
    };

    measureCanvasSize();

    window.addEventListener('resize', measureCanvasSize);
    return () => {
      window.removeEventListener('resize', measureCanvasSize);
    };
  }, [isDpr1, isDpr3, isLandscape]);

  return (
    <Box
      ref={pageRef}
      sx={{
        height: '100svh',
        width: '100svw'
      }}
    >
      <Header sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
      <Box sx={{ position: 'relative', height: height, width: width, zIndex: 0 }}>{children}</Box>
      {spotifyPlayerToggled && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 'calc(72px + 2.5%)',
            left: '50%',
            width: ['95%', '80%', '65%', '50%'],
            transform: 'translateX(-50%)',
            zIndex: 200
          }}
        >
          <Spotify />
        </Box>
      )}
      <Footer sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100 }} />
    </Box>
  );
};

export default Layout;
