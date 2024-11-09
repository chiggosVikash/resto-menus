'use client'
import React from 'react';
import { useOrderStore } from '../stores/OrderStore';
import { useForm, FormProvider } from 'react-hook-form';
import Input from './Input';

const PersonalInfoForm = () => {
   const { togglePersonalInfoForm, isPersonalInfoFormOpen } = useOrderStore();
   const methods = useForm();

   return (
        <>
            {isPersonalInfoFormOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="m-6 bg-white rounded-lg shadow-md p-6 md:max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Personal Information Form</h2>
                        <FormProvider {...methods}>
                            <form className="space-y-4" onSubmit={methods.handleSubmit(data => console.log(data))}>
                                <Input 
                                    name="name" 
                                    label="Name:" 
                                    rules={{ required: "Name is required" }} 
                                />
                                <Input 
                                    name="phoneNumber" 
                                    label="Phone Number:" 
                                    type="tel" 
                                    rules={{ required: "Phone number is required" }} 
                                />
                                <Input 
                                    name="tableNumber" 
                                    label="Table Number:" 
                                    type="number" 
                                    rules={{ required: "Table number is required" }} 
                                />
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
                        </FormProvider>
                    </div>
                </div>
            )}
        </>
    );
}

export default PersonalInfoForm;
