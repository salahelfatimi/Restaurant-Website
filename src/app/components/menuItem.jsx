"use client"
import Image from 'next/image'

import { ShoppingCart } from 'lucide-react'
import { createContext, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function MenuItem({menu}){
    const[food,setFood]=useState(1)
    const pathname=usePathname()
   
    return(
        <div className="  p-10 grid grid-cols-1 md:grid-cols-2 odd: gap-10 ">
            {
                menu.map((ele,index)=>(
                    <div key={index} className=' flex flex-col lg:flex-row gap-4 items-center '>
                        <Image
                        src={ele.image}
                        placeholder="blur"
                        quality={100}
                        width={200}
                        height={200}
                        className=" rounded "
                        title={ele.title}
                        alt={ele.title}
                        />
                        <div className=' flex flex-col gap-2 justify-center'>
                        <h2 className=' font-bold font-serif text-2xl'>{ele.title}</h2>
                        <p className='  font-extralight text-gray-600 text-center md:text-left'>{ele.description}</p>
                        </div>
                        <div className='flex lg:flex-col gap-4 items-center'>
                            <span className=' font-bold whitespace-nowrap bg-[#f39c12] text-white p-1'>  {ele.prix}</span>
                            <button onClick={()=>setFood(1+food)} className={`${pathname !== '/menu'&&'hidden'} bg-[#f39c12] p-1 rounded-full`}>
                                <ShoppingCart size={25} className=' stroke-white' />
                            </button>
                        
                        </div>
                       
                    </div>
                ))
            }
           
        </div>
    )
}