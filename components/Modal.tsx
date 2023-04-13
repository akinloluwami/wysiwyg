import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [modalClasses, setModalClasses] = useState<string>(
    "opacity-0 pointer-events-none transition ease-in-out duration-500"
  );

  const openModal = () => {
    setModalClasses(
      "opacity-100 pointer-events-auto transition ease-in-out duration-500"
    );
  };

  const closeModal = () => {
    setModalClasses(
      "opacity-0 pointer-events-none transition ease-in-out duration-500"
    );
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className={`relative mx-auto mt-10 bg-white p-6 rounded-md shadow-xl ${modalClasses}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
