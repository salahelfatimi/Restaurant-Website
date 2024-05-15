import Image from 'next/image'
import menu1 from '/public/image/menu/menu1.png'
import { Facebook, Instagram, Send } from 'lucide-react'
export async  function generateMetadata({ params: { title } }, parent) {
    const blog={id:1,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 6.88 $',image:menu1}
        
    const previousImages = (await parent).openGraph?.images || []
    
    return {
      title: blog.title,
      description: blog.description,
      openGraph: {
        title: blog.title,
        description: blog.description,
        images: [`/image/menu/menu1.png`, ...previousImages],
        type: "article",
       
      },
  
  }}

export default  function BlogDetail({ params: { title } }) {
    const blog={id:1,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit Lorem, ipsum, dolor, amet, consectetur, adipisicing elit ',prix:' 6.88 $',image:menu1}

    return(
        <>
        
            <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
                <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
                <div className="relative z-20 pt-44 gap-6 flex flex-col container items-center">
                <div className="container px-4 items-center bg-white   flex flex-col gap-10 py-10 pt-32 ">
                    <h1 className="font-bold    text-[#f39c12]  text-wrap text-center text-2xl lg:text-4xl   ">
                    {blog.title}
                    </h1>
                    <div className=" flex  flex-col lg:flex-row gap-4">
                    
                        <Image
                        title={blog.title}
                        placeholder="blur"
                        quality={100}
                        src= {blog.image}
                        className="object-cover  rounded  shadow-2xl  w-full lg:h-[30rem] bg-no-repeat"
                        alt={blog.title}
                        />
                    <div className="flex justify-center lg:flex-col gap-4 items-center">
                        <span className=" border-t-4 border-[#f39c12] items-center  h-fit p-2 flex-row lg:flex-col font-bold flex gap-2">
                        <p className="text-[#f39c12] font-extrabold text-xl">
                            15
                        </p>

                        <p className="">
                        5
                        </p>
                        <p className=" bg-[#f39c12] text-white py-1 px-4">
                        2024
                        </p>
                        </span>
                        <a href="#" className="  rounded-full duration-500 border-[#f39c12] bg-[#f39c12] hover:bg-white  border-2 w-fit h-fit p-2">
                        <Facebook className=" stroke-[#fff] hover:stroke-[#f39c12] stroke-2" />
                        </a>
                        <a href="#" className=" rounded-full duration-500 border-[#f39c12] bg-[#f39c12] hover:bg-white border-2 w-fit h-fit p-2">
                        <Instagram className=" stroke-[#fff] hover:stroke-[#f39c12] stroke-2" />
                        </a>
                        <a href={`#`} className=" rounded-full duration-500 border-[#f39c12] hover:bg-white bg-[#f39c12] border-2 w-fit h-fit p-2">
                        <Send className=" stroke-[#fff] hover:stroke-[#f39c12] stroke-2" />
                        </a>
                    </div>
                    </div>
                    <div className="flex flex-row items-center text-xl justify-between gap-4">
                    <span className="font-bold">By <span className="text-[#f39c12] uppercase">Restaurant S-C-H</span></span>
                    </div>
                    <div >
                    <p className="whitespace-pre-line text-center lg:text-left      break-words container   leading-loose   lg:text-xl">{blog.description}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}