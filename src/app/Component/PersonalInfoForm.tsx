'use client'
import React from 'react';
import { useOrderStore } from '../stores/OrderStore';

const PersonalInfoForm = () => {
   const { togglePersonalInfoForm, isPersonalInfoFormOpen } = useOrderStore();

   return (
        <>
            {isPersonalInfoFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="m-6 bg-white rounded-lg shadow-md p-6 md:max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Personal Information Form</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                <input 
                                    type="tel" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Table Number:</label>
                                <input 
                                    type="number" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-primary text-onPrimary font-semibold py-2 rounded-md hover:bg-secondary transition duration-200"
                            >
                                Submit
                            </button>
                            <button 
                                type="button" 
                                onClick={togglePersonalInfoForm}
                                className="w-full bg-gray-300 text-black font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-200"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default PersonalInfoForm;
