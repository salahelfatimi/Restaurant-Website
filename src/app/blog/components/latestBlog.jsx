import Image from 'next/image'
import menu1 from '/public/image/menu/menu1.png'
import Link from 'next/link'
export default function LatestBlog(){
    const menu={id:1,title:'New Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elitLorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 6.88 $',image:menu1}
    return(
        <>
            <div className=' flex flex-col w-full p-4 lg:flex-row-reverse gap-4 items-center bg-white'>
                <div className=' lg:w-1/2'>
                    <Image
                        src={menu.image}
                        placeholder="blur"
                        quality={100}
                        width={1920}
                        height={1080}
                        className=" rounded "
                        title={menu.title}
                        alt={menu.title}
                    />
                </div>
                <div className=' lg:w-1/2 flex flex-col gap-8 px-4 '>
                    <p className='bg-[#f39c12] text-white font-bold p-2 w-fit '>New</p>
                    <div className=' flex flex-col justify-between items-center gap-8 '>
                        <h2 className=' font-bold text-2xl lg:text-4xl text-center md:text-left'>{menu.title}</h2>
                        <p className='  font-extralight text-gray-600 text-center md:text-left line-clamp-4 '>{menu.description}</p>
                    </div>
                    <Link  href={'blog/Paella with seafood'} className=' text-center  font-bold uppercase   px-4 py-2  text-[#fff]   hover:text-[#f39c12] hover:bg-white bg-[#f39c12] duration-700'>See More </Link>        
                </div>
                
                
                       
            </div>
        </>
    )
}