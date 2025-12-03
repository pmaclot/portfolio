import React, { useState } from 'react';

// Externals
import styled from 'styled-components';
import { Mspaint, RecycleFull, WindowsExplorer } from '@react95/icons';

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const StyledWallpaper = styled.div`
  background-image: url('../images/wallpaper.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  zindex: 0;
`;

const StyledShortcuts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: auto;
  width: fit-content;
`;

const StyledShorcut = styled.div`
  margin: 5px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  z-index: 1;

  p {
    margin: 5px 0 0 0;
    padding: 0px 5px;
    border: 1px transparent dotted;
  }

  &.active p {
    background: rgb(0, 14, 122);
    border: 1px white dotted;
    color: white;
  }

  &.active svg {
    filter: sepia(1) saturate(10) brightness(0.6) hue-rotate(180deg);
  }
`;

interface ShortcutsProps {
  openExplorer: () => void;
  openPaint: () => void;
  openRecycleBin: () => void;
}

const Shortcuts: React.FC<ShortcutsProps> = ({ openExplorer, openPaint, openRecycleBin }) => {
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const handleToggleActiveIcon = (icon: number) => {
    setActiveIcon((prev) => (prev === icon ? 0 : icon));
  };

  return (
    <StyledWrapper>
      <StyledWallpaper onClick={() => handleToggleActiveIcon(0)} />
      <StyledShortcuts>
        <StyledShorcut
          className={activeIcon === 1 ? 'active' : undefined}
          onClick={() => handleToggleActiveIcon(1)}
          onDoubleClick={openRecycleBin}
        >
          <RecycleFull variant="32x32_4" />
          <p>Recycle Bin</p>
        </StyledShorcut>
        <StyledShorcut
          className={activeIcon === 2 ? 'active' : undefined}
          onClick={() => handleToggleActiveIcon(2)}
          onDoubleClick={openExplorer}
        >
          <WindowsExplorer variant="32x32_4" />
          <p>Explorer</p>
        </StyledShorcut>
        <StyledShorcut
          className={activeIcon === 3 ? 'active' : undefined}
          onClick={() => handleToggleActiveIcon(3)}
          onDoubleClick={openPaint}
        >
          <Mspaint variant="32x32_4" />
          <p>Paint</p>
        </StyledShorcut>
      </StyledShortcuts>
    </StyledWrapper>
  );
};

export default Shortcuts;
