import React, { useState } from 'react';

// Components
import Explorer from './explorer';
import Paint from './paint';
import RecycleBin from './recycle_bin';
import Shortcuts from './shortcuts';
import TaskBar from './taskbar';

// Externals
import { Alert } from '@react95/core';

interface DesktopProps {
  shutdown: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ shutdown }) => {
  const [fileNotFound, setFileNotFound] = useState<string>('');
  const [showWindows, setShowWindows] = useState<{
    explorer: boolean;
    notepad: boolean;
    paint: boolean;
    recycle_bin: boolean;
  }>({
    explorer: true,
    notepad: true,
    paint: false,
    recycle_bin: false
  });

  const toggleFileNotFound = (fileName?: string) => {
    setFileNotFound('');

    if (fileName) {
      setTimeout(() => {
        setFileNotFound(fileName);
      }, 250);
    }
  };

  const toggleWindow: (windowName: string, isVisible: boolean) => void = (windowName, isVisible) => {
    setShowWindows((prev) => ({
      ...prev,
      [windowName]: isVisible
    }));
  };

  const handleOpenFileNotFound: (fileName: string) => void = (fileName) => toggleFileNotFound(fileName);

  const handleCloseFileNotFound: () => void = () => toggleFileNotFound();

  const handleOpenWindow: (windowName: string) => void = (windowName) => toggleWindow(windowName, true);

  const handleCloseWindow: (windowName: string) => void = (windowName) => toggleWindow(windowName, false);

  return (
    <>
      <Shortcuts
        openExplorer={() => handleOpenWindow('explorer')}
        openPaint={() => handleOpenWindow('paint')}
        openRecycleBin={() => handleOpenWindow('recycle_bin')}
      />

      {showWindows['explorer'] && <Explorer closeModal={() => handleCloseWindow('explorer')} />}
      {showWindows['paint'] && <Paint closeModal={() => handleCloseWindow('paint')} />}
      {showWindows['recycle_bin'] && <RecycleBin closeModal={() => handleCloseWindow('recycle_bin')} />}

      <TaskBar
        openExplorer={() => handleOpenWindow('explorer')}
        openFileNotFound={(fileName) => handleOpenFileNotFound(fileName)}
        openPaint={() => handleOpenWindow('paint')}
        shutdown={shutdown}
      />

      {fileNotFound && (
        <Alert
          buttons={[
            {
              value: 'OK',
              onClick: handleCloseFileNotFound
            }
          ]}
          closeAlert={handleCloseFileNotFound}
          hasSound={true}
          height="auto"
          message="This application failed to start because the DLL file was not found. Re-installing the application may fix this problem."
          positionOffset={{
            x: 508,
            y: 200
          }}
          title={`${fileNotFound} - System Error`}
          type="error"
          width="400"
        />
      )}
    </>
  );
};

export default Desktop;
