import React from "react";
import Container from "./Container";
import MenuCard from "./MenuCard";
import { IMenu } from "../stores/BrowseMenuStore";
import { IItem } from "../models/Item";


const MenusGrid = ({browseMenus}:{browseMenus:IMenu[]}) => {
 
  return (
    <Container>
      {browseMenus.length>0?browseMenus.map((browse: IMenu, index: number) => {
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
      }):<div>Menus not Available.</div>}

    </Container>
  );
};

export default MenusGrid;
