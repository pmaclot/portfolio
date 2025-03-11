import React, { useContext, useEffect, useRef, useState } from 'react';

// Components
import Spotify from '../components/spotify';
import Footer from './footer';
import Header from './header';

// Context
import RoomContext from '../context/room';

// Externals
import PropTypes from 'prop-types';
import { Box } from 'theme-ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { spotifyPlayer } = useContext(RoomContext);

  const [height, setHeight] = useState<string>('100%');
  const [width, setWidth] = useState<string>('100%');

  const canvasRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current;

      if (canvasElement) {
        const canvasHeight = canvasElement.clientHeight;
        const canvasWidth = canvasElement.clientWidth;

        setWidth(`${canvasWidth % 2 !== 0 ? canvasWidth + 1 : canvasWidth}px`);
        setHeight(`${canvasHeight % 2 !== 0 ? canvasHeight + 1 : canvasHeight}px`);
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
      <Header sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 200 }} />
      <Box ref={canvasRef} sx={{ height: height, width: width, zIndex: 0 }}>
        {children}
      </Box>
      {spotifyPlayer && (
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
      <Footer sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 200 }} />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
