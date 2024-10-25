import Navbar from "../Component/Navbar/Navbar";


export default function AdminLayout({children}:{children:React.ReactNode}){
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}