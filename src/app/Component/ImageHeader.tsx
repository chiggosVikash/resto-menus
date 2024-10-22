import Image from 'next/image';
import FoodImage from '../assets/food-image.jpg'

const ImageHeader = () => {
    return (
        <div className="relative text-center">
            <Image 
                src={FoodImage.src}
                alt="Delicious food"
                height={200}
                width={200}
                className='object-cover h-[50vh] w-full'
            />
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'>
            <h1 className="text-6xl font-bold mt-4 text-cardColor">MENUS</h1>
            <p className="text-lg text-gray-400 mt-2">
                Discover our seasonal menus that delight your taste buds!
            </p>
            </div>
            
        </div>
    );
};

export default ImageHeader;
