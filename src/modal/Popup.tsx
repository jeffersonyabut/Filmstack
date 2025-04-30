import { useEffect, useRef } from "react";
import { graphicTypes } from "../types/goated";

export default function Popup({ isOpen, onClose, children }: graphicTypes) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-background rounded-2xl p-6 xl:w-max w-screen relative h-max text-text"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-500 dark:text-darkText hover:text-gray-800"
            >
              Close
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
}
