import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef}
        className="modal relative bg-white w-[500px] rounded shadow-lg"
      >
        <button
          className="absolute top-0 right-0 m-2 p-2 text-2xl text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
