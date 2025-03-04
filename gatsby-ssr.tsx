import React from 'react';

// App
import App from './src/App';

// Externals
import { WrapPageElementNodeArgs } from 'gatsby';

export const wrapPageElement = ({ element, props }: WrapPageElementNodeArgs) => <App {...props}>{element}</App>;
