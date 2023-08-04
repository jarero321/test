import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../../Typography';
import { Close } from '@mui/icons-material';

export type ModalContainerProps = {
  title: string;
  handleClose: () => void;
  active: boolean;
  children?: JSX.Element;
  showContent?: boolean;
  secondaryContent?: React.ReactNode;
};

const ModalContainer: React.FC<ModalContainerProps> = ({
  title = 'Prueba',
  handleClose,
  active,
  children,
  showContent = false,
  secondaryContent = null,
}) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          animate={{ opacity: [0, 0.5, 1] }}
          className="w-screen h-screen fixed top-0 left-0 z-[10] bg-modal-background flex items-center justify-center"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            animate={{ scale: [0, 0.5, 0.5, 1.2, 1], opacity: 1 }}
            className="py-[24px] min-w-[500px] min-h-[400px] px-[24px] bg-white rounded-xl"
            exit={{ opacity: 0, scale: [1.5, 0.5, 0] }}
            initial={{ opacity: 0 }}
          >
            {!showContent ? <div>{children}</div> : secondaryContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
