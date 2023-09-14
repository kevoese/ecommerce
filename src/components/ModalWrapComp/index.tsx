import { FunctionComponent } from 'react';
import ModalCloseIcon from '../icons/ModalCloseIcon';

export interface IModalWrapComp {
  label?: string;
  children: any;
  closeModal: () => void;
  classes?: string;
  className?: string;
}

const ModalWrapComp: FunctionComponent<IModalWrapComp> = ({
  children,
  closeModal,
  className,
}) => (
  <div className={`fixed flex inset-0 items-center justify-center z-[3000] ${className || ''}`}>
    <div onClick={() => closeModal()} className="absolute inset-0 cursor-pointer bg-modal-dark" />
    <div className="content-in-modal p-0 m-0 z-10">
      <div className="relative z-[500] flex max-w-fit justify-center">
        {children}
        <div onClick={() => closeModal()} className="absolute top-4 right-4 cursor-pointer">
          <ModalCloseIcon />
        </div>
      </div>
    </div>
  </div>
);

export default ModalWrapComp;
