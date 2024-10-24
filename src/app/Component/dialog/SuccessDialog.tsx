import React from 'react';

interface SuccessDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  open,
  onClose,
  title,
  message,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4 text-center">
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="mb-6 text-gray-600">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog;

