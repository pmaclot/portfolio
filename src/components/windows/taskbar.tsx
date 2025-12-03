import React from 'react';

// Externals
import { List as WindowsList, TaskBar as WindowsTaskBar } from '@react95/core';
import {
  Computer3,
  FileFind,
  FolderExe,
  FolderExe2,
  FolderFile,
  FolderPrint,
  FolderSettings,
  HelpBook,
  LoaderBat,
  MicrosoftExchange,
  MsDos,
  Mspaint,
  Settings,
  WindowsExplorer
} from '@react95/icons';

interface TaskBarProps {
  openExplorer: () => void;
  openFileNotFound: (fileName: string) => void;
  openPaint: () => void;
  shutdown: () => void;
}

const TaskBar: React.FC<TaskBarProps> = ({ openExplorer, openFileNotFound, openPaint, shutdown }) => {
  return (
    <WindowsTaskBar
      list={
        <WindowsList>
          <WindowsList.Item icon={<FolderExe2 variant="32x32_4" />}>
            <WindowsList>
              <WindowsList.Item
                icon={<FolderExe variant="16x16_4" />}
                onClick={() => openFileNotFound('accessories.exe')}
              >
                Accessories
              </WindowsList.Item>
              <WindowsList.Item icon={<FolderExe variant="16x16_4" />} onClick={() => openFileNotFound('startup.exe')}>
                StartUp
              </WindowsList.Item>
              <WindowsList.Item
                icon={<MicrosoftExchange variant="16x16_4" />}
                onClick={() => openFileNotFound('exchange.exe')}
              >
                Microsoft Exchange
              </WindowsList.Item>
              <WindowsList.Item icon={<MsDos variant="16x16_32" />} onClick={() => openFileNotFound('msdos.exe')}>
                MS-DOS Prompt
              </WindowsList.Item>
              <WindowsList.Item icon={<Mspaint variant="16x16_4" />} onClick={openPaint}>
                Paint
              </WindowsList.Item>
              <WindowsList.Item icon={<WindowsExplorer variant="16x16_4" />} onClick={openExplorer}>
                Windows Explorer
              </WindowsList.Item>
            </WindowsList>
            Programs
          </WindowsList.Item>
          <WindowsList.Item icon={<FolderFile variant="32x32_4" />} onClick={() => openFileNotFound('documents.exe')}>
            Documents
          </WindowsList.Item>
          <WindowsList.Item icon={<Settings variant="32x32_4" />}>
            <WindowsList>
              <WindowsList.Item
                icon={<FolderSettings variant="16x16_4" />}
                onClick={() => openFileNotFound('control.exe')}
              >
                Control Panel
              </WindowsList.Item>
              <WindowsList.Item
                icon={<FolderPrint variant="16x16_4" />}
                onClick={() => openFileNotFound('printers.exe')}
              >
                Printers
              </WindowsList.Item>
            </WindowsList>
            Settings
          </WindowsList.Item>
          <WindowsList.Item icon={<FileFind variant="32x32_4" />} onClick={() => openFileNotFound('find.exe')}>
            Find
          </WindowsList.Item>
          <WindowsList.Item icon={<HelpBook variant="32x32_4" />} onClick={() => openFileNotFound('help.exe')}>
            Help
          </WindowsList.Item>
          <WindowsList.Item icon={<LoaderBat variant="32x32_4" />} onClick={() => openFileNotFound('run.exe')}>
            Run...
          </WindowsList.Item>
          <WindowsList.Divider />
          <WindowsList.Item icon={<Computer3 variant="32x32_4" />} onClick={shutdown}>
            Shut Down...
          </WindowsList.Item>
        </WindowsList>
      }
    />
  );
};

export default TaskBar;
