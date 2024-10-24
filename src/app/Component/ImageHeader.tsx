import Image from 'next/image';
import FoodImage from '../assets/food-image.jpg'

const ImageHeader = ({title,subtitle}:{title:string,subtitle:string}) => {
    return (
        <div className="relative text-center">
            <Image 
                src={FoodImage.src}
                alt="Delicious food"
                height={200}
                width={200}
                className='object-cover h-[20vh] md:h-[50vh] w-full'
            />
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3'>
            <h1 className=" text-3xl md:text-6xl font-bold mt-4 text-cardColor">{title}</h1>
            <p className="text-lg text-gray-400 mt-2">{subtitle}
            </p>
            </div>
            
        </div>
    );
};

export default ImageHeader;
