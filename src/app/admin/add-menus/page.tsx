'use client'
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Container from '../../Component/Container';
import Input from '../../Component/Input';
import Select from '../../Component/Select';
import { useAddMenuStore } from '@/app/stores/AddMenuStore';
import { IItem } from '@/app/models/Item';
import LoadingDialog from '@/app/Component/dialog/LoadingDialog';
import SuccessDialog from '@/app/Component/dialog/SuccessDialog';
import ImageUploadSection from '@/app/Component/ImageUploadSection';

const AddMenusPage = () => {
  const methods = useForm<IItem>({
    defaultValues: {
      name: '',
      category: '',
      section: '',
      fullPrice: 0,
      halfPrice: 0,
      description: '',
    },
  });

  const { saveMenu, isSaving, isSaved, reset } = useAddMenuStore();
  const [selectedPortions, setSelectedPortions] = React.useState<string[]>([]);

  // Static categories and sections
  const categories = [
    { value: 'appetizers', label: 'Appetizers' },
    { value: 'main-courses', label: 'Main Courses' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'drinks', label: 'Drinks' },
  ];

  const sections = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'all-day', label: 'All Day' },
  ];

  const portionOptions = ['full', 'half', 'both'];

  const handlePortionChange = (portion: string) => {
    if (portion === 'both') {
      setSelectedPortions(prev => 
        prev.includes('both') ? [] : ['full', 'half', 'both']
      );
    } else {
      setSelectedPortions(prev => {
        const newPortions = prev.includes(portion)
          ? prev.filter(p => p !== portion)
          : [...prev, portion];
        
        if (newPortions.includes('full') && newPortions.includes('half')) {
          return ['full', 'half', 'both'];
        } else {
          return newPortions.filter(p => p !== 'both');
        }
      });
    }
  };

  const visiblePriceInputs = selectedPortions.includes('both') 
    ? ['full', 'half'] 
    : selectedPortions.filter(p => p !== 'both');

  

  return (
    <div className="bg-surface text-onSurface">
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-primary">Add Menu Item</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) =>{
             console.log(data);
             saveMenu(data);
          })}>
            <LoadingDialog isOpen={isSaving} title="Saving Menu..."></LoadingDialog>
            <SuccessDialog open={isSaved} title="Success!" onClose={()=>{
              reset();
              methods.reset();
            }} message="Menu has been saved successfully."></SuccessDialog>
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left section for image upload */}
              <ImageUploadSection/>
              {/* Right section for menu details */}
              <div className="w-full md:w-2/3">
                <Input name="name" label="Item Name" rules={{ required: 'Item name is required' }} />
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">Category</label>
                  <Select
                    options={categories}
                    name="category"
                    placeholder="Select a category"
                    rules={{ required: 'Category is required' }}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">Section</label>
                  <Select
                    options={sections}
                    name="section"
                    placeholder="Select a section"
                    rules={{ required: 'Section is required' }}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">Portion Type</label>
                  <div className="flex gap-4">
                    {portionOptions.map(portion => (
                      <label key={portion} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedPortions.includes(portion)}
                          onChange={() => handlePortionChange(portion)}
                          className="form-checkbox text-primary"
                        />
                        <span className="ml-2 capitalize">{portion}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {visiblePriceInputs.map(portion => (
                  <Input
                    key={portion}
                    name={`${portion}Price`}
                    label={`${portion.charAt(0).toUpperCase() + portion.slice(1)} Price`}
                    type="number"
                    rules={{ required: `${portion} price is required` }}
                  />
                ))}

                <Input name="description" label="Description" rules={{ required: 'Description is required' }} />

                <button
                  type="submit"
                  className="mt-4 bg-primary text-onPrimary px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Add Menu Item
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </div>
  );
};

export default AddMenusPage;
