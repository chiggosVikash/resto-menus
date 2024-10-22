import { menuItems } from "@/app/admin/menuitems";
import Container from "../Container";

const Menubar = () => {
    return (
        <div className="flex flex-wrap bg-cardColor">
           <Container className="flex flex-wrap items-center">
            {menuItems.map((item) => (
                <div 
                    key={item.title}
                    className=" group hover:bg-surface  transition-all duration-300 hover:-skew-x-12 cursor-pointer flex h-[40px]  items-center justify-center text-center"
                >
                <h1 className="mx-4 pl-4 text-center">{item.title}</h1>
                <div className="group-hover:bg-secondary ml-4 w-0.5 h-full -skew-x-12 group-hover:skew-x-0 bg-primary"></div>
                </div>
            ))}
           </Container>
        </div>
    );
};

export default Menubar;