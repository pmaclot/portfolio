import React, { useEffect, useState } from 'react';

// Components
import NotepadAbout from './notepad_about';
import NotepadContact from './notepad_contact';
import NotepadProject from './notepad_project';
import NotepadResume from './notepad_resume';

// Externals
import styled from 'styled-components';
import { Frame, Modal } from '@react95/core';
import { Awfxex32Info, FlyingWindows100, Inetcfg2301, Mailnews20, WindowsExplorer } from '@react95/icons';

const StyledShortcuts = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const StyledShorcut = styled.div`
  margin: 5px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

interface ExplorerProps {
  closeModal: () => void;
}

type NotepadType = 'about' | 'contact' | 'project' | 'resume';

const Explorer: React.FC<ExplorerProps> = ({ closeModal }) => {
  const [activeIcon, setActiveIcon] = useState<number>();
  const [showNotepad, setShowNotepad] = useState<NotepadType>();

  const handleToggleActiveIcon = (icon: number) => {
    setActiveIcon((prev) => (prev === icon ? 0 : icon));
  };

  const handleOpenNotepad: (notepadName: NotepadType) => void = (notepadName) => setShowNotepad(notepadName);

  const handleCloseNotepad: () => void = () => setShowNotepad(undefined);

  useEffect(() => {
    setActiveIcon(1);
    setShowNotepad('about');
  }, []);

  return (
    <>
      <Modal
        closeModal={closeModal}
        hasWindowButton={true}
        height="300"
        icon={<WindowsExplorer variant="32x32_4" />}
        menu={[
          { name: 'File', list: <></> },
          { name: 'Edit', list: <></> },
          { name: 'Help', list: <></> }
        ]}
        positionOffset={{
          x: 160,
          y: 90
        }}
        style={{ padding: '2px' }}
        title="Windows Explorer"
        width="500"
      >
        <div style={{ margin: '-6px', height: 'calc(100% + 12px)', width: 'calc(100% + 12px)' }}>
          <Frame bg="white" boxShadow="in" h="100%" w="100%">
            <StyledShortcuts>
              <StyledShorcut
                className={activeIcon === 1 ? 'active' : undefined}
                onClick={() => handleToggleActiveIcon(1)}
                onDoubleClick={() => handleOpenNotepad('about')}
              >
                <Awfxex32Info variant="32x32_4" />
                <p>About.txt</p>
              </StyledShorcut>
              <StyledShorcut
                className={activeIcon === 2 ? 'active' : undefined}
                onClick={() => handleToggleActiveIcon(2)}
                onDoubleClick={() => handleOpenNotepad('contact')}
              >
                <Inetcfg2301 variant="32x32_4" />
                <p>Contact.txt</p>
              </StyledShorcut>
              {/* <StyledShorcut
                className={activeIcon === 3 ? 'active' : undefined}
                onClick={() => handleToggleActiveIcon(3)}
                onDoubleClick={() => handleOpenNotepad('project')}
              >
                <FlyingWindows100 variant="32x32_4" />
                <p>Projects.txt</p>
              </StyledShorcut> */}
              <StyledShorcut
                className={activeIcon === 4 ? 'active' : undefined}
                onClick={() => handleToggleActiveIcon(4)}
                onDoubleClick={() => handleOpenNotepad('resume')}
              >
                <Mailnews20 variant="32x32_4" />
                <p>Resume.txt</p>
              </StyledShorcut>
            </StyledShortcuts>
          </Frame>
        </div>
      </Modal>

      {showNotepad === 'about' && <NotepadAbout closeModal={() => handleCloseNotepad()} />}
      {showNotepad === 'contact' && <NotepadContact closeModal={() => handleCloseNotepad()} />}
      {showNotepad === 'project' && <NotepadProject closeModal={() => handleCloseNotepad()} />}
      {showNotepad === 'resume' && <NotepadResume closeModal={() => handleCloseNotepad()} />}
    </>
  );
};

export default Explorer;
