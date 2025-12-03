// @ts-nocheck
import React, { memo } from 'react';

// Components
import Desktop from './desktop';

// Externals
import ttf from '@react95/core/esm/GlobalStyle/font/MS-Sans-Serif-8pt.ttf';
import ttfBold from '@react95/core/esm/GlobalStyle/font/MS-Sans-Serif-8pt-bold.ttf';
import videoeot from '@react95/core/esm/GlobalStyle/font/React95Video-Numbers.eot';
import videottf from '@react95/core/esm/GlobalStyle/font/React95Video-Numbers.ttf';
import videowoff from '@react95/core/esm/GlobalStyle/font/React95Video-Numbers.woff';
import videowoff2 from '@react95/core/esm/GlobalStyle/font/React95Video-Numbers.woff2';
import { scrollbars } from '@react95/core/esm/GlobalStyle/Scrollbar';
import { Cursor } from '@react95/core';
import { ModalProvider } from '@react95/core/esm/Modal';
import { createGlobalStyle, ThemeProvider } from '@xstyled/styled-components';

// Theme
import theme from '@react95/core/esm/ThemeProvider/themes/win95';

var GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${ttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MS Sans Serif';
    src: url('${ttfBold}') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'React95Video-Numbers';
    src: url('${videoeot}');
    src: url('${videowoff2}') format('woff2'),
         url('${videowoff}') format('woff'),
         url('${videottf}') format('truetype'),
         url('${videoeot}?#iefix') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  .win-wrapper {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: materialText;
    ${Cursor.Auto} 
  }

  .win-wrapper a {
    color: anchor;
  }

  .win-wrapper a:visited {
    color: anchorVisited;
  }

  .win-wrapper * {
    font-family: 'MS Sans Serif';
    box-sizing: border-box;
    ${Cursor.Auto} 
  }

  // scrollbar
  ${scrollbars}

  .win-wrapper .none                { ${Cursor.None} }
  .win-wrapper .help                { ${Cursor.Help} }
  .win-wrapper .pointer, .win-wrapper :any-link  { ${Cursor.Pointer} }
  .win-wrapper .progress            { ${Cursor.Progress} }
  .win-wrapper .wait                { ${Cursor.Wait} }
  .win-wrapper .crosshair           { ${Cursor.Crosshair} }
  .win-wrapper .text                { ${Cursor.Text} }
  .win-wrapper .vertical-text       { ${Cursor.VerticalText} }
  .win-wrapper .alias               { ${Cursor.Alias} }
  .win-wrapper .copy                { ${Cursor.Copy} }
  .win-wrapper .move                { ${Cursor.Move} }
  .win-wrapper .no-drop             { ${Cursor.NoDrop} }
  .win-wrapper .not-allowed         { ${Cursor.NotAllowed} }
  .win-wrapper .grab                { ${Cursor.Grab} }
  .win-wrapper .grabbing            { ${Cursor.Grabbing} }
  .win-wrapper .col-resize          { ${Cursor.ColResize} }
  .win-wrapper .row-resize          { ${Cursor.RowResize} }
  .win-wrapper .n-resize            { ${Cursor.NResize} }
  .win-wrapper .e-resize            { ${Cursor.EResize} }
  .win-wrapper .s-resize            { ${Cursor.SResize} }
  .win-wrapper .w-resize            { ${Cursor.WResize} }
  .win-wrapper .ns-resize           { ${Cursor.NsResize} }
  .win-wrapper .ew-resize           { ${Cursor.EwResize} }
  .win-wrapper .ne-resize           { ${Cursor.NeResize} }
  .win-wrapper .nw-resize           { ${Cursor.NwResize} }
  .win-wrapper .se-resize           { ${Cursor.SeResize} }
  .win-wrapper .sw-resize           { ${Cursor.SwResize} }
  .win-wrapper .nesw-resize         { ${Cursor.NeswResize} }
  .win-wrapper .nwse-resize         { ${Cursor.NwseResize} }
  .win-wrapper .zoom-in             { ${Cursor.ZoomIn} }
  .win-wrapper .zoom-out            { ${Cursor.ZoomOut} }
`;

interface WindowsProps {
  shutdown: () => void;
}

const Windows: React.FC<WindowsProps> = ({ shutdown }) => {
  return (
    <ThemeProvider theme={{ ...theme, colors: { ...theme.colors, primary: '#000e7a' } }}>
      <ModalProvider>
        <GlobalStyle />
        <Desktop shutdown={shutdown} />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default memo(Windows);
