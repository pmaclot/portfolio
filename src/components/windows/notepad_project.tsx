import React from 'react';

// Externals
import { Frame, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';

interface NotepadProjectProps {
  closeModal: () => void;
}

const NotepadProject: React.FC<NotepadProjectProps> = ({ closeModal }) => {
  return (
    <Modal
      closeModal={closeModal}
      hasWindowButton={true}
      height="500"
      icon={<Notepad variant="32x32_4" />}
      menu={[
        { name: 'File', list: <></> },
        { name: 'Edit', list: <></> }
      ]}
      positionOffset={{
        x: 800,
        y: 0
      }}
      style={{ padding: '2px' }}
      title="Notepad - Project.txt"
      width="500"
    >
      <div style={{ margin: '-6px', height: 'calc(100% + 12px)', width: 'calc(100% + 12px)' }}>
        <Frame bg="white" boxShadow="in" h="100%" w="100%"></Frame>
      </div>
    </Modal>
  );
};

export default NotepadProject;
