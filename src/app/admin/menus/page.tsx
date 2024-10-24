'use client'
import React, { useEffect } from 'react';
import Container from '../../Component/Container';
import { useMenusStore } from '@/app/stores/MenusStore';
// import Image from 'next/image';
import LoadingDialog from '@/app/Component/dialog/LoadingDialog';
import PageHeader from '@/app/Component/PageHeader';
import MenusSearchSection from '@/app/Component/MenusSearchSection';
import Pagination from '@/app/Component/Pagination';
import MenusTable from '@/app/Component/MenusTable';
import { usePageStore } from '@/app/stores/PageStore';

const MenusPage = () => {
  const { menus, getMenus, isFetching } = useMenusStore();
  const { page } = usePageStore();

  useEffect(() => {
    getMenus({ page: page, limit: 30 });
  }, [getMenus, page]);

  if (isFetching) {
    return <LoadingDialog isOpen={true} title="Loading..." />;
  }

  return (
    <div className="bg-surface text-onSurface min-h-screen">
      <Container>
        <PageHeader title="Menus" />
        {menus.length > 0 ? (
          <>
            <MenusSearchSection />
            <MenusTable menus={menus} />
          </>
        ) : (
          <div>
            <h1>No menus found</h1>
          </div>
        )}
        <Pagination />
      </Container>
    </div>
  );
};

export default MenusPage;
