import React, { useCallback, useLayoutEffect, useState } from 'react';

// Externals
import { animated, useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';

// Screens
import SplashScreen from './screens/splashscreen';

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const { theme } = useThemeUI();

  const [loading, setLoading] = useState(true);

  const transitionSplashscreen = useTransition(loading, {
    from: { opacity: '1' },
    enter: { opacity: '1' },
    leave: { opacity: '0' },
    onRest: () => {
      // Show body scrollbar
      document.body.style.overflow = 'auto';
    }
  });

  const onReady = useCallback((): void => {
    setLoading(false);
  }, []);

  useLayoutEffect(() => {
    // Hide body scrollbar
    document.body.style.overflow = 'hidden';
  }, []);

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
    </React.Fragment>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;