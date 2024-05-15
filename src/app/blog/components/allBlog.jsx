import Image from 'next/image'
import menu1 from '/public/image/menu/menu1.png'
import menu2 from '/public/image/menu/menu2.png'
import menu3 from '/public/image/menu/menu3.png'
import Link from 'next/link'
export default function AllBlog(){
    const menu=[
        {id:1,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 6.88 $',image:menu1},
        {id:2,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 5.88 $',image:menu2},
        {id:3,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 4.88 $',image:menu3},
        {id:4,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 8.88 $',image:menu1},
        {id:5,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 87.88 $',image:menu2},
        {id:6,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 9.88 $',image:menu3},
        {id:7,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 8.88 $',image:menu1},
        {id:8,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 89.88 $',image:menu2},
        {id:9,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 18.88 $',image:menu3},
        {id:10,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 13.88 $',image:menu1},
        {id:11,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 14.88 $',image:menu2},
        {id:12,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 33.88 $',image:menu3},
    ]
    return(
        <>
<div className="  p-10 grid grid-cols- md:grid-cols-2 lg:grid-cols-3  gap-10 ">
            {
                menu.map((ele,index)=>(
                    <div key={index} className=' flex flex-col w-full p-4  gap-4 items-center bg-white'>
                        <div className=' '>
                            <Image
                                src={ele.image}
                                placeholder="blur"
                                quality={100}
                                width={1920}
                                height={1080}
                                className=" rounded "
                                title={ele.title}
                                alt={ele.title}
                            />
                        </div>
                        <div className='  flex flex-col gap-8 px-4 '>
                            <div className=' flex flex-col justify-between items-center gap-8 '>
                                <h2 className=' font-bold text-xl lg:text-2xl text-center md:text-left'>{ele.title}</h2>
                                <p className='  font-extralight text-gray-600 text-center md:text-left line-clamp-4 '>{ele.description}</p>
                            </div>
                            <Link href={'blog/Paella with seafood'} className=' text-center  font-bold uppercase   px-4 py-2  text-[#f39c12]   border-4 border-[#f39c12] duration-700'>See More </Link>        
                        </div>
                        
                        
                            
                    </div>
                ))
            }
           
        </div>
        </>
    )
}