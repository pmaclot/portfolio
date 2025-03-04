import React from 'react';

// App
import App from './src/App';

// Contexts
import { RoomProvider } from './src/context/room';

// Externals
import { PageProps } from 'gatsby';

export const wrapPageElement = ({ element, props }: { element: React.ReactNode; props: PageProps }) => (
  <RoomProvider>
    <App {...props}>{element}</App>
  </RoomProvider>
);
