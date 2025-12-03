import React, { useCallback, useContext, useLayoutEffect, useState } from 'react';

// Contexts
import UIContext from './context/ui';

// Externals
import { useLocation } from '@reach/router';
import { animated, useTransition } from '@react-spring/web';
import { useThemeUI } from 'theme-ui';
import { Toaster } from 'react-hot-toast';

// Screens
import SplashScreen from './screens/splashscreen';

// Suppress useLayoutEffect warnings when running outside a browser
if (typeof window === 'undefined') React.useLayoutEffect = React.useEffect;

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const { loadScene } = useContext(UIContext);

  const { pathname } = useLocation();
  const { theme } = useThemeUI();

  const [splashscreen, setSplashscreen] = useState<boolean>(pathname === '/');

  const transitionSplashscreen = useTransition(splashscreen, {
    from: { opacity: '1' },
    enter: { delay: 0, opacity: '1' },
    leave: { delay: 500, opacity: '0' },
    onDestroyed: (isDestroyed: boolean) => {
      if (isDestroyed) {
        loadScene();
      }
    }
  });

  const onReady = useCallback((): void => {
    setSplashscreen(false);
  }, []);

  useLayoutEffect(() => {
    if (splashscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [splashscreen]);

  return (
    <React.Fragment>
      {transitionSplashscreen(
        (style, item) =>
          item && (
            <animated.div
              style={{
                background: theme.colors?.background!.toString(),
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                zIndex: 9999,
                ...style
              }}
            >
              <SplashScreen onReady={onReady} />
            </animated.div>
          )
      )}
      {children}
      <Toaster
        gutter={24}
        reverseOrder={true}
        toastOptions={{
          style: {
            margin: 0,
            padding: 0
          }
        }}
      />
    </React.Fragment>
  );
};

export default App;
