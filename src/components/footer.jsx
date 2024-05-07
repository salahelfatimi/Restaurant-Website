import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer(){
    return(
        <>
        
        <div className="bg-[url('/image/bg.png')] z-10 relative bg-cover pt-10 ">
        <span className=" border-t-4 w-full container border-dotted border-[#f39c12] absolute right-0 left-0 z-10"></span>
        <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
        <div className=" relative z-10  flex flex-col gap-8  pt-8">
            <div className=" flex container justify-between items-center  ">
                <h1 className="flex flex-col  items-center text-black font-bold "><span className=" bg-[#f39c12] px-2 text-white">Restaurant</span> <span className=" text-[#f39c12]">S-C-H</span></h1>
                <div className=" flex gap-2 items-center">
                    <span className="bg-[#f39c12] p-2 rounded-full"><Instagram className=" text-white " /></span>
                    <span className="bg-[#f39c12] p-2 rounded-full"><Facebook className=" text-white " /></span>
                    <span className="bg-[#f39c12] p-2 rounded-full"><Linkedin className=" text-white " /></span>
                

                </div>
            </div>
            <div className=" flex flex-col gap-8">
                <h2 className="container font-bold text-white text-xl border-y-4 border-[#f39c12] w-fit">Contact info</h2>
                <div className="container flex flex-col gap-4 text-white">
                    <span className=" flex  justify-between items-center font-semibold">CALL : <span className="text-[#fff]">+212 602 314804</span></span>
                    <span className=" flex  justify-between items-center font-semibold">WRITE  : <span className="text-[#fff]">salahfatimi16@gmail.com</span></span>
                    <span className=" flex  justify-between items-center font-semibold">FIND US : <span className="text-[#fff]">sidi youssef ben ali , marrakech 4000</span></span>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-[#f39c12] py-4">
                <span className={`container flex gap-4 flex-row justify-between  items-center font-bold capitalize text-center md:text-start text-white `}>
                    &copy; {new Date().getFullYear()} .All rights reserved.
                    <h1 className="flex flex-col items-center text-black font-bold "><span className=" bg-[#fff] px-2 text-[#f39c12]">Restaurant</span> <span className=" text-[#fff]">S-C-H</span></h1>
                </span>
            </div>
        </div>
       

        </div>
        
        </>
    )
}