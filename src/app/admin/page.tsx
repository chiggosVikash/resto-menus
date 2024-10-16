import React from 'react'
import Container from '../Component/Container';
import { FaBox, FaPlus, FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from 'next/link';

interface MenuItem{
    title: string;
    icon: React.ReactNode;
    href: string;
}

const menuItems: MenuItem[] = [
    {
        title: 'Add Menus',
        icon: <FaPlus />,
        href: '/admin/add-menus',
    },
    {
        title: 'Orders',
        icon: <FaShoppingCart />,
        href: '/admin/orders',
    },
    {
        title: 'Products',
        icon: <FaBox />,
        href: '/admin/products',
    },
    {
        title: 'Users',
        icon: <FaUser />,
        href: '/admin/users',
    },
    
];

const AdminPage = () => {
  return (
    <div className='py-10'>
      <Container>
          <div  className='grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 px-12'>
            {menuItems.map((item, index) => (
                <div key={index} className='cursor-pointer flex items-center space-x-2 p-4 bg-cardColor rounded-lg'>
                    <Link href={item.href} className='flex items-center space-x-2 p-4 bg-cardColor rounded-lg'>
                        {item.icon}
                        {item.title}
                    </Link>
                </div>
            ))}
         </div>
      </Container>  
    </div>
  )
}

export default AdminPage
