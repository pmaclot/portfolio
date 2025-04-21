// Externals
import { useProgress } from '@react-three/drei';
import React from 'react';
import { Box, Flex, Progress, Text } from 'theme-ui';

const Loader: React.FC = () => {
  const { active, progress } = useProgress();

  if (!active && progress === 100) return null;

  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 0
      }}
    >
      <Text color="primary" sx={{ fontSize: 1, mb: 1 }}>
        Loading...
      </Text>
      <Box as="div" sx={{ width: '200px' }}>
        <Progress max={100} sx={{ height: '7px', borderRadius: '1px' }} value={progress.toFixed(0)} />
      </Box>
    </Flex>
  );
};

export default Loader;
