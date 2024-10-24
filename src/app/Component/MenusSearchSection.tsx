import React from 'react'
import { FaSearch, FaFilter, FaPlus, FaChevronDown,  } from 'react-icons/fa';
import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import Select from './Select';
import Link from 'next/link';

const MenusSearchSection = () => {
    const methods = useForm({
        defaultValues: {
          sortOption: 'Relevance',
        },
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };
    const sortOptions = [
        { value: 'Relevance', label: 'Relevance' },
        { value: 'Name', label: 'Name' },
        { value: 'Price', label: 'Price' },
        { value: 'Category', label: 'Category' },
      ];
    
      
  return (
    <FormProvider {...methods}>
          <form onSubmit={
            methods.handleSubmit(onSubmit)
            }>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-auto flex-grow max-w-lg">
                <input
                  type="text"
                  placeholder="Search menus..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button className="flex items-center gap-4 px-6 py-2 bg-surface-variant text-onSurfaceVariant rounded-md border border-gray-300 hover:bg-opacity-90">
                  <FaFilter />
                  Filter
                </button>
                
                <div className="flex items-center gap-4">
                  <span className="text-onSurface">Sort by:</span>
                  <div className="relative">
                    <Select
                      options={sortOptions}
                      name="sortOption"
                      className="appearance-none bg-surface text-onSurface px-4 py-2 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    />
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <Link href="/admin/add-menus" className="flex items-center gap-4 bg-primary text-onPrimary px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  <FaPlus />
                  Add Menu
                </Link>
                
              </div>
            </div>
          </form>
        </FormProvider>

  )
}

export default MenusSearchSection
