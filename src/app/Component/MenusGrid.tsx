import React, { useEffect } from "react";
import Container from "./Container";
import MenuCard from "./MenuCard";
import { useBrowseMenuStore, IMenu } from "../stores/BrowseMenuStore";
import { IItem } from "../models/Item";


const MenusGrid = () => {
  const { isFetching, getCategorizedMenu, browseMenus } = useBrowseMenuStore();

  useEffect(() => {
    getCategorizedMenu();
  }, [getCategorizedMenu]);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      {browseMenus.map((browse: IMenu, index: number) => {
        return (
          <div key={index}>
            <h1 className="text-5xl  text-center my-8">{browse.category}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {browse.menus.map((item: IItem, innerIndex: number) => {
                return <MenuCard key={innerIndex} menus={item} />;
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default MenusGrid;
