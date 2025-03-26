import React, { useContext, useEffect, useRef, useState } from 'react';

// Components
import Spotify from '../components/spotify';
import Footer from './footer';
import Header from './header';

// Context
import UIContext from '../context/ui';

// Externals
import { Box } from 'theme-ui';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { spotifyPlayerShowed } = useContext(UIContext);

  const [height, setHeight] = useState<string>('100%');
  const [width, setWidth] = useState<string>('100%');

  const canvasRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current;

      if (canvasElement) {
        const canvasHeight = canvasElement.clientHeight;
        const canvasWidth = canvasElement.clientWidth;

        setWidth(`${canvasWidth % 2 !== 0 ? canvasWidth - 1 : canvasWidth}px`);
        setHeight(`${canvasHeight % 2 !== 0 ? canvasHeight - 1 : canvasHeight}px`);
      }
    };

    measureCanvasSize();

    window.addEventListener('resize', measureCanvasSize);
    return () => {
      window.removeEventListener('resize', measureCanvasSize);
    };
  }, []);

  return (
    <Box
      sx={{
        height: '100svh',
        width: '100svw'
      }}
    >
      <Header sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
      <Box ref={canvasRef} sx={{ position: 'relative', height: height, width: width, zIndex: 0 }}>
        {children}
      </Box>
      {spotifyPlayerShowed && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 'calc(72px + 10%)',
            left: '50%',
            width: '70%',
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
