import React from 'react';

// Externals
import { Frame, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';

interface NotepadAboutProps {
  closeModal: () => void;
}

const NotepadAbout: React.FC<NotepadAboutProps> = ({ closeModal }) => {
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
      title="Notepad - About.txt"
      width="500"
    >
      <div style={{ margin: '-6px', height: 'calc(100% + 12px)', width: 'calc(100% + 12px)' }}>
        <Frame bg="white" boxShadow="in" h="100%" style={{ padding: '2px 10px' }} w="100%">
          <h2>About</h2>
          <p style={{ fontSize: '14px' }}>
            Hi! I’m a Software Engineer based in Belgium. <br />
            For the last several years, I’ve been working as a Full Stack developer for startups and big companies like
            insurance groups, banks, and public organizations. I believe that friendly and respectful communication
            within a team is key to a company’s success. <br />
            With my experience in software development and database design, I believe I can be a valuable asset to your
            project. <br />
            The main technologies I use are C# .NET and React (this website runs on Gatsby, btw), I’m also fascinated by
            Blockchain. <br />
            When I’m not in front of the computer, I like to go cycling, swimming, or travel in a van to discover new
            places. (Yes, I’ve learnt the hard way how important it is to bring a decent power bank and a reliable Wi-Fi
            hotspot.)
          </p>
        </Frame>
      </div>
    </Modal>
  );
};

export default NotepadAbout;
