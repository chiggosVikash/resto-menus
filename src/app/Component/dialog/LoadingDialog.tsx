import React from 'react';


const LoadingDialog: React.FC<{ isOpen: boolean,title: string }> = ({ isOpen,title="Loading..."   }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-lg font-semibold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingDialog;

