import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';

// Contexts
import UIContext from '../context/ui';

// Externals
import { Flex, Link, Text } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface HeaderProps {
  sx?: ThemeUIStyleObject;
}

const Header: React.FC<HeaderProps> = ({ sx }) => {
  const { toggleDesktopView } = useContext(UIContext);

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    setDate(new Date().toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }));
  }, []);

  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', minHeight: '72px', ...sx }}
    >
      <Link
        as="h1"
        onClick={toggleDesktopView}
        sx={{
          fontFamily: 'Honk, system-ui',
          fontOpticalSizing: 'auto',
          fontWeight: 400,
          fontStyle: 'normal',
          fontVariationSettings: "'MORF' 15, 'SHLN' 50",
          cursor: 'pointer'
        }}
      >
        Pierre Maclot
      </Link>
      <Text color="primary">{date}</Text>
    </Flex>
  );
};

export default Header;
