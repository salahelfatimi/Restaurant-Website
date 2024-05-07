import Image from "next/image";
import food from '/public/image/food.png'
import newsLetter from '/public/image/newsLetter.png'
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <button className="text-white font-bold w-fit bg-[#f39c12] border-[#f39c12] border-4 py-3 px-4 text-lg rounded hover:bg-[#f39c12]/0  hover:border-[#f39c12]  duration-500  ">Reserve a table</button>
            <Link href={'#'} className=" text-white font-medium text-sm hover:text-[#f39c12] duration-500">OPEN MENU</Link>
          </div>

        </div>
      </div>
      <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
      </div>
    <div></div>
    
    <div>
    <div className="  flex justify-center py-10  relative bg-[url('/image/bg.png')]  ">
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

    </>
  );
}
