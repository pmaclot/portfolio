import React from 'react';

// Externals
import { Frame, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';

interface NotepadContactProps {
  closeModal: () => void;
}

const NotepadContact: React.FC<NotepadContactProps> = ({ closeModal }) => {
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
      title="Notepad - Contact.txt"
      width="500"
    >
      <div style={{ margin: '-6px', height: 'calc(100% + 12px)', width: 'calc(100% + 12px)' }}>
        <Frame bg="white" h="100%" pShadow="in" style={{ padding: '2px 10px' }} w="100%">
          <h2>Location</h2>
          <p style={{ fontSize: '14px' }}>Based in Liège, Belgium</p>

          <h2>Contact</h2>
          <a href="tel:+32473407017" style={{ fontSize: '14px', marginRight: '20px' }}>
            +32473407017
          </a>
          <a href="mailto:maclotpierre@gmail.com" style={{ fontSize: '14px', marginRight: '20px' }}>
            maclotpierre@gmail.com
          </a>

          <h2>Stalk me</h2>
          <a
            href="https://github.com/pmaclot"
            rel="noreferrer"
            style={{ fontSize: '14px', marginRight: '20px' }}
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-maclot/"
            rel="noreferrer"
            style={{ fontSize: '14px', marginRight: '20px' }}
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/pierre_maclot"
            rel="noreferrer"
            style={{ fontSize: '14px', marginRight: '20px' }}
            target="_blank"
          >
            Twitter
          </a>
        </Frame>
      </div>
    </Modal>
  );
};

export default NotepadContact;
