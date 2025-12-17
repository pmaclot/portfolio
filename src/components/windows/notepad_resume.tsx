import React from 'react';

// Externals
import { Frame, Modal } from '@react95/core';
import { Notepad } from '@react95/icons';

interface NotepadResumeProps {
  closeModal: () => void;
}

const NotepadResume: React.FC<NotepadResumeProps> = ({ closeModal }) => {
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
      title="Notepad - Resume.txt"
      width="500"
    >
      <div
        style={{
          margin: '-6px',
          height: 'calc(438px + 12px)',
          width: 'calc(100% + 12px)'
        }}
      >
        <Frame bg="white" boxShadow="in" h="100%" style={{ padding: '2px 10px', overflow: 'hidden scroll' }} w="100%">
          {/* Avanade */}
          <h2>Consultant Software Engineer &bull; Avanade Belgium</h2>
          <h3>November 2023 &ndash; Present</h3>
          <p style={{ fontSize: '14px' }}>
            Providing Microsoft-based solutions for leading clients in banking, public sector, and insurance.
            Responsible for advising on digital transformation strategies, designing tailored architectures, and
            implementing enterprise technologies to improve operational efficiency, regulatory compliance, and customer
            engagement. Collaborated with cross-functional teams to deliver scalable solutions aligned with business
            objectives.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}
          >
            {[
              'Azure',
              'DevOps',
              'ASP.NET Core',
              'React',
              'Angular',
              'Copilot Studio',
              'AI Foundry',
              'SignalR',
              'Sql Server'
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  marginBottom: '0.25rem',
                  marginRight: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  boxShadow: 'inset 0 0 0 1px #000'
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Revomon */}
          <h2>Lead Developer &bull; Revomon</h2>
          <h3>August 2021 &ndash; August 2023</h3>
          <p style={{ fontSize: '14px' }}>
            In charge of developing and coordinating the development of server infrastructure, databases, web
            applications and their interaction with smart contracts.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}
          >
            {[
              'Azure',
              'AWS',
              'Confluence',
              'Jira',
              'ASP.NET Core',
              'Firebase',
              'Gatsby',
              'GitHub Actions',
              'MySql',
              'Node.js',
              'React',
              'Redux',
              'Three.js',
              'Unity',
              'Web3.js'
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  marginBottom: '0.25rem',
                  marginRight: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  boxShadow: 'inset 0 0 0 1px #000'
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Sparkle */}
          <h2>Full Stack Developer &bull; Sparkle SRL</h2>
          <h3>June 2018 &ndash; March 2023</h3>
          <p style={{ fontSize: '14px' }}>
            In charge of developing IoT, web and mobile solutions for startups that don't have the necessary development
            teams to get them off the ground.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}
          >
            {[
              'Azure',
              'DevOps',
              'ASP.NET',
              'ASP.NET Core',
              'Expo',
              'Firebase',
              'MongoDB',
              'MySql',
              'Next.js',
              'Node.js',
              'React',
              'React Native',
              'Razor Pages',
              'SignalR',
              'Sql Server',
              'Stripe',
              'Xamarin'
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  marginBottom: '0.25rem',
                  marginRight: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  boxShadow: 'inset 0 0 0 1px #000'
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Microsoft */}
          <h2>Full Stack Developer &bull; Microsoft Innovation Center Belgium (Internship)</h2>
          <h3>February 2018 &ndash; June 2018</h3>
          <p style={{ fontSize: '14px' }}>
            In charge of developing a website aimed at offering paid challenges to students by companies.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}
          >
            {['Azure', 'DevOps', 'ASP.NET Core', 'Razor Pages', 'SignalR', 'Sql Server'].map((tech) => (
              <div
                key={tech}
                style={{
                  marginBottom: '0.25rem',
                  marginRight: '0.25rem',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  boxShadow: 'inset 0 0 0 1px #000'
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </Frame>
      </div>
    </Modal>
  );
};

export default NotepadResume;
