import React, { useContext, useEffect, useState } from 'react';

// Contexts
import RoomContext from '../context/room';

// Externals
import { Flex, Link, Text } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface HeaderProps {
  sx?: ThemeUIStyleObject;
}

const Header: React.FC<HeaderProps> = ({ sx }) => {
  const { toggleDesktopView } = useContext(RoomContext);

  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', minHeight: '72px', ...sx }}
    >
      <Link as="h2" onClick={() => toggleDesktopView} sx={{ color: 'primary', cursor: 'pointer' }}>
        Pierre Maclot
      </Link>
      <Text>{date}</Text>
    </Flex>
  );
};

export default Header;
