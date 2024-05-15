import menu1 from '/public/image/menu/menu1.png'
import menu2 from '/public/image/menu/menu2.png'
import menu3 from '/public/image/menu/menu3.png'
import MenuItem from "../components/menuItem";
export const metadata = {
    title: "Menu",
    description:'Discover Our menu'
    
  };
export default function Menu(){
    const menu=[
        {id:1,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 6.88 $',image:menu1},
        {id:2,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 5.88 $',image:menu2},
        {id:3,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 4.88 $',image:menu3},
        {id:4,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 8.88 $',image:menu1},
        {id:5,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 87.88 $',image:menu2},
        {id:6,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 9.88 $',image:menu3},
        {id:7,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 8.88 $',image:menu1},
        {id:8,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 89.88 $',image:menu2},
        {id:9,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 18.88 $',image:menu3},
        {id:10,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 13.88 $',image:menu1},
        {id:11,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 14.88 $',image:menu2},
        {id:12,title:'Paella with seafood',description:'Lorem, ipsum, dolor, amet, consectetur, adipisicing elit.',prix:' 33.88 $',image:menu3},
    ]
    return(
        <>
        <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
            <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
            <div className="relative z-20 pt-44 gap-6 flex flex-col container items-center">
                <span className=" font-bold text-white  border-t-[#f39c12]  border-t-4  ">MENU</span> 
                <h1 className="font-bold text-white text-center text-3xl lg:text-6xl font-serif">Discover Our menu</h1>  
                <div className="bg-white">
                    <MenuItem menu={menu}/>
                </div>
            
            </div>
     
        </div>
        </>
    )
}