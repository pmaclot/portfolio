import React from 'react';

// App
import App from './src/App';

// Contexts
import { UIProvider } from './src/context/ui';

// Externals
import { PageProps } from 'gatsby';

export const wrapPageElement = ({ element, props }: { element: React.ReactNode; props: PageProps }) => (
  <UIProvider>
    <App {...props}>{element}</App>
  </UIProvider>
);
