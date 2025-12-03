import React from 'react';

// Externals
import { Modal } from '@react95/core';
import { RecycleFull } from '@react95/icons';

interface RecycleBinProps {
  closeModal: () => void;
}

const RecycleBin: React.FC<RecycleBinProps> = ({ closeModal }) => {
  return (
    <Modal
      closeModal={closeModal}
      hasWindowButton={true}
      height="300"
      icon={<RecycleFull variant="16x16_4" />}
      menu={[
        { name: 'File', list: <></> },
        { name: 'Edit', list: <></> },
        { name: 'Help', list: <></> }
      ]}
      positionOffset={{
        x: 70,
        y: 0
      }}
      style={{ padding: '2px' }}
      title="Recycle Bin"
      width="500"
    />
  );
};

export default RecycleBin;
