import Image from "next/image";
import food from '/public/image/food.png'

export default function Home() {
  return (
    <>
    <div className=" relative  ">
      <Image
      src={food}
      placeholder="blur"
      quality={100}
      width={1920}
      height={1080}
      className="h-screen object-cover  "
      alt="Picture of the author"
    />
    <div className=" bg-black/20  inset-0 absolute  "></div>
    
  
    </div>

    </>
  );
}
