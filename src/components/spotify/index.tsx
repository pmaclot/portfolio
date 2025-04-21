import React, { memo, useCallback, useState } from 'react';

// Externals
import { animated, useTransition } from '@react-spring/web';
import { Spinner } from 'theme-ui';

const Spotify: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const transitionSpotify = useTransition(loading, {
    from: { opacity: '1' },
    enter: { opacity: '1' },
    leave: { opacity: '0' }
  });

  const onLoad = useCallback((): void => {
    setLoading(false);
  }, []);

  return (
    <>
      {transitionSpotify(
        (style, item) =>
          item && (
            <animated.div
              style={{
                position: 'absolute',
                alignItems: 'center',
                background: '#95006D',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                height: 152,
                width: '100%',
                ...style
              }}
            >
              {loading && <Spinner sx={{ color: '#fff' }} />}
            </animated.div>
          )
      )}
      <iframe
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        frameBorder={0}
        height={152}
        loading="lazy"
        onLoad={onLoad}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpptnkkxrqhrO?utm_source=generator"
        style={{ borderRadius: '12px' }}
        title="Spotify Playlist"
        width="100%"
      />
    </>
  );
};

export default memo(Spotify);
