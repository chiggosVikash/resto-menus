import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {/* <div className="relative"> */}
                {/* <svg width="120" height="120" className="absolute inset-0 animate-spin">
                    <circle className="animate-spin" cx="60" cy="60" r="50" fill="transparent" stroke="theme('colors.primary')" strokeWidth="4" />
                </svg> */}
                <div className=" relative animate-spin rounded-full h-32 w-32 border-4 border-t-4 border-transparent shadow-lg 
                bg-gradient-to-r from-blue-500 to-purple-500">
                    <div className="absolute inset-0 rounded-full bg-white shadow-sm"></div>
                </div>

                {/* <div className="absolute h-32 w-32  animate-orbit">
                    <div className="rounded-full h-4 w-4 bg-secondary"></div>
                </div> */}

            {/* </div> */}
        </div>
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //     <div className="w-16 h-16 bg-blue-500 rounded-lg animate-pulse"></div>
    // </div>
        // <div className="flex items-center justify-center h-screen  ">
        //     <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-8 border-transparent shadow-lg 
        //         bg-gradient-to-r from-blue-500 to-purple-500">
        //         <div className="absolute inset-0 rounded-full bg-white shadow-sm"></div>
        //     </div>
        // </div>
    );
};

export default Loader;
