interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
