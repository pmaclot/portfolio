import React from 'react';

// Externals
import { Modal } from '@react95/core';
import { Mspaint } from '@react95/icons';

interface PaintProps {
  closeModal: () => void;
}

const Paint: React.FC<PaintProps> = ({ closeModal }) => {
  return (
    <Modal
      closeModal={closeModal}
      hasWindowButton={true}
      height="620"
      icon={<Mspaint variant="16x16_4" />}
      positionOffset={{
        x: 2,
        y: -50
      }}
      style={{ padding: '2px' }}
      title="untitled - Paint"
      width="1412"
    >
      <div style={{ margin: '-6px', height: 'calc(100% + 12px)', width: 'calc(100% + 12px)' }}>
        <iframe height="100%" src="https://jspaint.app" style={{ border: 0 }} title="Paint Application" width="100%" />
      </div>
    </Modal>
  );
};

export default Paint;
