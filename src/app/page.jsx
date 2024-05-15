"use client"
import Image from "next/image";
import food from '/public/image/food.png'
import newsLetter from '/public/image/newsLetter.png'
import Link from "next/link";
import { useState } from "react";
import BookTable from "@/components/boking/bookTable";
import Menu from "./components/menuItem";
import LatestBlog from "./blog/components/latestBlog";
import menu1 from '/public/image/menu/menu1.png'
import menu2 from '/public/image/menu/menu2.png'
import menu3 from '/public/image/menu/menu3.png'

export default  function Home() {
  const [bookingShow,setBookingShow]=useState(false)
  // await new Promise((resolve)=>setTimeout(resolve,3000))
  const menu=[
    {id:1,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 6.88 $',image:menu1},
    {id:2,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 5.88 $',image:menu2},
    {id:3,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 4.88 $',image:menu3},
    {id:4,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 8.88 $',image:menu1},
    ]
  return (
    <>
    <BookTable bookingShow={bookingShow} setBookingShow={setBookingShow}/>
        
    <div className="h-screen bg-[url('/image/food.png')]   relative  ">
      <Image
      src={food}
      placeholder="blur"
      quality={100}
      width={1920}
      height={1080}
      className="h-screen object-cover  "
      alt="Picture of the author"
      />
      <div className="flex items-center absolute inset-0 container h-full z-10">
        <div className="flex flex-col gap-10">
          <span className=" font-bold text-white flex items-center gap-2"><span className=" border-t-4 border-t-[#f39c12] w-10"></span>HELLO</span>
          <h1 className="    text-white  lg:text-7xl text-5xl font-serif font-extrabold    "><span className="flex flex-col gap-4 text-white">Reserve Your<span>Table Today</span></span>  </h1>
          <div className=" flex gap-6 items-center">
            <button onClick={()=>(setBookingShow(!bookingShow))} className="text-white font-bold w-fit bg-[#f39c12] border-[#f39c12] border-4 py-3 px-4 text-lg rounded hover:bg-[#f39c12]/0  hover:border-[#f39c12]  duration-500  ">Reserve a table</button>
            <Link href={'/menu'} className=" text-white font-medium text-sm hover:text-[#f39c12] duration-500">OPEN MENU</Link>
          </div>

        </div>
      </div>
      <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
    </div>
    <div className="bg-[url('/image/bg.png')] bg-cover relative z-10 ">
    <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
      <div className=" relative  z-10 pt-44 gap-6 flex flex-col container items-center ">
        <span className=" font-bold text-white text-2xl lg:text-5xl  border-t-[#f39c12]  border-t-4  ">Latest Updates</span>  
        <div className="bg-white flex flex-col py-4 items-center gap-8">
          <LatestBlog/>
          <Link className=" font-bold uppercase bg-[#f39c12] text-white px-4 py-2 hover:bg-white hover:text-[#f39c12]  border-white border-4 hover:border-[#f39c12] duration-700" href='/blog'>see More Blogs</Link>
        </div>
       
       
      </div>
    </div>
    <div className="bg-[url('/image/bg.png')] bg-cover relative z-10 ">
    <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
      <div className=" relative  z-10 pt-44 gap-6 flex flex-col container items-center ">
        <span className=" font-bold text-white text-2xl lg:text-5xl  border-t-[#f39c12]  border-t-4   ">MENU</span>  
        <div className="bg-white flex flex-col py-4 items-center gap-8">
          <Menu menu={menu}/>
          <Link className=" font-bold uppercase bg-[#f39c12] text-white px-4 py-2 hover:bg-white hover:text-[#f39c12]  border-white border-4 hover:border-[#f39c12] duration-700" href='/menu'>see More</Link>
        </div>
       
       
      </div>
    </div>
    <div>
      <div className="  flex justify-center py-10  relative bg-[url('/image/bg.png')] bg-cover ">
        <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
        <div className=" relative z-10">
          <Image
            src={newsLetter}
            placeholder="blur"
            quality={100}
            width={800}
            height={500}
            className=" brightness-50 rounded-xl w-[800px]  container  "
            alt="Picture of the author"
          />
        
        
          <div className=" flex flex-col gap-8 items-center justify-center  absolute inset-0 z-20">
            <h2 className=" font-bold text-white  border-t-[#f39c12]  border-t-4  ">NEWSLETTER</h2> 
            <span className="font-bold text-white text-2xl lg:text-3xl font-serif">Subscribe our newsletter</span>  
            <div className=" flex gap-2">
              <input type="text" className=" py-3 w-full placeholder:text-sm placeholder:font-light rounded px-6" placeholder=" Entre your email here"  />
              <button className="text-white font-bold bg-[#f39c12] py-3 px-2 text-sm rounded hover:bg-[#f39c12]/0 border-[#f39c12] border-4 hover:border-[#f39c12] hover:text-[#f39c12]    duration-500  ">SUBSCRIBE</button>
            </div>
            
          </div>  
        </div> 
      </div>
    </div>

    </>
  );
}
