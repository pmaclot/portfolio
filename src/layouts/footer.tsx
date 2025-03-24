import React from 'react';

// Externals
import { Flex, Text } from 'theme-ui';
import type { ThemeUIStyleObject } from 'theme-ui';

interface FooterProps {
  sx?: ThemeUIStyleObject;
}

const Footer: React.FC<FooterProps> = ({ sx }) => {
  return (
    <Flex
      px={4}
      sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', minHeight: '72px', ...sx }}
    >
      <Text color="secondary">© {new Date().getFullYear()}. All rights reserved.</Text>
    </Flex>
  );
};

export default Footer;
