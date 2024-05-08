import Image from 'next/image';
import menu1 from '/public/image/menu/menu1.png'
import menu2 from '/public/image/menu/menu2.png'
import menu3 from '/public/image/menu/menu3.png'
export const metadata = {
    title: "Menu",
    
  };
export default function Menu(){
    return(
        <>
        <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
            <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
            <div className="relative z-20 pt-44 gap-6 flex flex-col container items-center">
                <span className=" font-bold text-white  border-t-[#f39c12]  border-t-4  ">MENU</span> 
                <h1 className="font-bold text-white text-center text-3xl lg:text-6xl font-serif">Discover Our menu</h1>  
                <div className=" bg-white p-10 grid grid-cols-1 gap-10 ">
                    <div className=' flex flex-col lg:flex-row gap-4 items-center '>
                        <Image
                            src={menu1}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight text-gray-600'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                    </div>
                    <div className=' flex flex-col lg:flex-row-reverse gap-4 items-center '>
                        <Image
                            src={menu2}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-4 items-center '>
                        <Image
                            src={menu3}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                    </div>
                    <div className=' flex flex-col lg:flex-row-reverse  gap-4 items-center '>
                        <Image
                            src={menu1}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col  gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight text-gray-600'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-4 items-center '>
                        <Image
                            src={menu2}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                    </div>
                    <div className=' flex items-center flex-col lg:flex-row-reverse  gap-4  '>
                        <Image
                            src={menu3}
                            placeholder="blur"
                            quality={100}
                            width={200}
                            height={200}
                            className=" rounded "
                            alt="Picture of the author"
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                            <h2 className=' font-bold font-serif text-2xl'>Paella with seafood</h2>
                            <p className='  font-extralight'>Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.</p>
                        </div>
                        <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  8.88 $</span>
                   
                    </div>

                </div>
            </div>
     
        </div>
        </>
    )
}