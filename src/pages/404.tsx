import React from 'react';

// Externals
import type { HeadFC, PageProps } from 'gatsby';
import { Flex, Heading, Paragraph } from 'theme-ui';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Flex
      as="div"
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 4,
        height: '100svh',
        width: '100svw'
      }}
    >
      <Heading as="h2" sx={{ color: 'primary', width: 'fit-content' }}>
        404
      </Heading>
      <Paragraph sx={{ color: 'secondary', width: 'fit-content' }}>Page not found.</Paragraph>
    </Flex>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404</title>;
