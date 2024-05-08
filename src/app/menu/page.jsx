export default function Menu(){
    return(
        <>
        <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
            <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
            <div className="relative z-20 pt-44 gap-6 flex flex-col container items-center">
                <span className=" font-bold text-white  border-t-[#f39c12]  border-t-4  ">MENU</span> 
                <h1 className="font-bold text-white text-center text-3xl lg:text-6xl font-serif">Discover Our menu</h1>  
            </div>
     
        </div>
        </>
    )
}