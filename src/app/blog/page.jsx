import AllBlog from "./components/allBlog";
import LatestBlog from "./components/latestBlog";
export const metadata = {
    title: "Blog",
    description:'Read valuable articles on running and promoting a food business'
    
  };
export default function Blog(){
    
    return(
        <>
            <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
                <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
                <div className="relative z-20 pt-32 gap-10 flex flex-col container items-center">
                    <h1 className=" text-white font-bold text-3xl lg:text-6xl">Blog UpMenu</h1>
                    <p className=" bg-[#f39c12] text-white p-1 text-center font-semibold ">Read valuable articles on running and promoting a food business</p> 
                    <LatestBlog/>
                    <div>
                        <h2 className=" text-xl lg:text-4xl font-bold text-white bg-[#f39c12] py-3 text-center">All blog</h2>
                        <AllBlog/>
                    </div>
                </div>
     
            </div>
       </>
    )
}