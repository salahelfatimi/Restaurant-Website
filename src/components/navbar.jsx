'use client'
import BookTable from "@/components/boking/bookTable";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){
    const [bookingShow,setBookingShow]=useState(false)
    return(
        <>
        <div className=" bg-white py-4 mt-6 mx-2 rounded-xl  fixed   right-0 left-0 lg:block z-10">
            <div className=" flex justify-between items-center container px-4 ">
                <span className="flex flex-col items-center text-black font-bold ">Tastyes <span className=" text-[#f39c12]">S-C-H</span></span>
                <div className="lg:block hidden">
                    <ul className=" flex    gap-4">
                        <li className="text-black font-bold hover:text-[#f39c12] duration-500 "> <Link href="#">Home</Link> </li>
                        <li className="text-black font-bold hover:text-[#f39c12] duration-500"> <Link href="#">Contact</Link> </li>
                    </ul>
                </div>
                
                <button onClick={()=>(setBookingShow(!bookingShow))} className="text-white font-bold bg-[#f39c12] py-2 px-4 rounded hover:bg-black  duration-500 hover:text-[#fff] ">Booking a table</button>
            </div>

        </div>
        
        <BookTable bookingShow={bookingShow} setBookingShow={setBookingShow}/>
        
        </>
    )
}