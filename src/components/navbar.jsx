'use client'
import BookTable from "@/components/boking/bookTable";
import { PanelLeftClose, PanelRightClose, PanelTopClose } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(true);
    const [bookingShow,setBookingShow]=useState(false)
    const pathname=usePathname()
  
    const itemNav=[
        {title:'Home',href:'/'},
        {title:'Menu',href:'/menu'},
        {title:'Contact',href:'/contact'}
    ]
    return(
        <>
        <div className=" bg-white py-4    fixed   right-0 left-0 lg:block z-40">
            <div className=" flex justify-between items-center container px-4 ">
                <h1 className="flex flex-col items-center text-black font-bold "><span className=" bg-[#f39c12] px-2 text-white">Restaurant</span> <span className=" text-[#f39c12]">S-C-H</span></h1>
                <div className="lg:block hidden">
                    <ul className=" flex    gap-4">
                        {
                            itemNav.map((ele,index)=>(
                                <li key={index} className={` font-bold hover:text-[#f39c12] duration-500 ${pathname == ele.href ? 'text-[#f39c12] border-b-4 border-[#f39c12]' : 'text-black'}`}>
                                <Link href={ele.href}>{ele.title}</Link>
                                </li>
                            ))

                        }
                       
                       
                    </ul>
                </div>
                
                <button onClick={()=>(setBookingShow(!bookingShow))} className="text-white font-bold hidden lg:block bg-[#f39c12] py-2 px-2  rounded hover:bg-[#f39c12]/0 border-[#f39c12] border-4 hover:border-[#f39c12] hover:text-[#f39c12]    duration-500  ">Booking a table</button>
                <button className="block lg:hidden "  onClick={() => {setOpen(!open);}}>{open?<PanelLeftClose size={35} className=" text-[#f39c12]  " />: <PanelRightClose size={35} className=" text-[#f39c12]  "/>}</button>

            </div>

        </div>
        <div className=" block fixed bg-white right-0 left-0 lg:hidden z-30">
            <div className="  container  p-4 flex flex-col    ">
            <div
                className={`fixed   inset-0 flex flex-col gap-10 items-center justify-center bg-white  duration-700 transition  ${
                open == false ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className=" flex flex-col gap-10">
                {itemNav.map((ele, index) => (
                    <button onClick={() => {setOpen(!open);}}key={index}>
                        <li key={index} className={` font-bold hover:text-[#f39c12] duration-500 ${pathname == ele.href ? 'text-[#f39c12] border-b-4 border-[#f39c12]' : 'text-black'}`}>
                            <Link href={ele.href}>{ele.title}</Link>
                        </li>
                    </button>
                ))}
                </ul>
                <button onClick={()=>(setBookingShow(!bookingShow),setOpen(!open))} className="text-white font-bold block lg:hidden bg-[#f39c12] py-2 px-2  rounded hover:bg-[#f39c12]/0 border-[#f39c12] border-4 hover:border-[#f39c12] hover:text-[#f39c12]    duration-500  ">Booking a table</button>
            </div>
            </div>
        </div>
        
        <BookTable bookingShow={bookingShow} setBookingShow={setBookingShow}/>
        
        </>
    )
}