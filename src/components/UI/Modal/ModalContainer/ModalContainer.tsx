import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../../Typography';
import { Close } from '@mui/icons-material';

export type ModalContainerProps = {
  title: string;
  handleClose: () => void;
  active: boolean;
  children?: JSX.Element;
};

const ModalContainer: React.FC<ModalContainerProps> = ({
  title = 'Prueba',
  handleClose,
  active,
  children,
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
            animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
            className="py-[24px] min-w-[700px] min-h-[400px] max-h-[700px] px-[24px] bg-white rounded-xl"
            exit={{ opacity: 0, scale: [1.2, 1, 0.5] }}
            initial={{ opacity: 0 }}
          >
            <div className="flex w-full justify-between items-center">
              <div className="w-full flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <Typography className="font-semibold" size="lg">
                  {title}
                </Typography>
              </div>
              <div onClickCapture={handleClose}>
                <Close className="color-primary-color cursor-pointer" />
              </div>
            </div>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
