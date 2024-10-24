
interface MenuItem {
    title: string;
    href: string;
};

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        href: '/admin',
    },
    {
        title: 'Menus',
        href: '/admin/menus',
    },
    {
        title: 'Orders',
        href: '/admin/orders',
    },
    {
        title: 'Users',
        href: '/admin/users',
    }
];
