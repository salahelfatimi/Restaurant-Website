import { Mailbox, MapPinned, Phone } from "lucide-react";
import Link from "next/link";
export const metadata = {
    title: "Contact",
    description:'Contact with Us'
  };
export default function Contact() {
  
  return (
    <>
 
    <div className=" bg-[url('/image/bg.png')] bg-cover relative min-h-screen">
    <div className=" bg-[#0a1a1e]/60 inset-0 absolute z-0   "></div>
      <div className="relative  w-full h-[35rem] ">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95891174128!2d-8.090253858529149!3d31.63474114960496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakesh!5e0!3m2!1sen!2sma!4v1715129402991!5m2!1sen!2sma" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" px-4 lg:px-[10rem] drop-shadow-xl relative bottom-44 p-12 ">
        <div className="bg-white py-10 rounded-xl ">
            <div className=" flex flex-col gap-8 items-center">
                <span className=" font-bold text-[#f39c12]">HAVE A QUESTIONS?</span>
                <h1 className=" font-bold text-3xl ">Contact Us</h1>
                <div className=" flex lg:flex-row flex-col gap-8  justify-between container">
                    <div className=" flex flex-col gap-2 items-center">
                        <Mailbox size={60} className="text-[#f39c12]" />
                        <span className=" font-semibold text-xl ">Write Us</span>
                        <p className="  text-xl font-light">reservation@tastyc.com</p>
                    </div>
                    <div className=" flex flex-col gap-2  items-center">
                        <Phone size={60} className="text-[#f39c12]" />
                        <span className=" font-semibold text-xl ">Call Us</span>
                        <p className="  text-xl font-light">+212 602 314804</p>
                    </div>
                    <div className=" flex flex-col gap-2  items-center">
                        <MapPinned  size={60} className="text-[#f39c12]" />
                        <span className=" font-semibold text-xl ">Visit Us</span>
                        <p className="  text-xl font-light">Giuliz , Marrakech 4000</p>
                    </div>
                </div>
                <span className=" border-t-4 w-full container border-dotted border-[#f39c12]"></span>
                <div className=" flex flex-col gap-6 w-full container ">
                <h2 className="font-bold text-3xl text-center ">Contact with Us</h2>
                        <div className="  grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
                            <input type="text" name="fullName" placeholder="Full Name"  className=" shadow border    text-sm rounded-lg   w-full px-8 py-3 " />
                            <input type="text" name="lastName" placeholder=" Last Name"  className=" shadow border    text-sm rounded-lg   w-full px-8 py-3 " />
                            <input type="email" name="email" placeholder="Email" id="" className=" shadow border   text-sm rounded-lg   w-full px-8 py-3 " />
                            <input type="text" name="Tell" placeholder="Tell" id="" className=" shadow border   text-sm rounded-lg   w-full px-8 py-3 " />
                            <textarea name="message" placeholder="message" className="shadow border  lg:col-span-2 text-sm rounded-lg px-8 py-3   w-full" cols={10} rows={10}  id=""></textarea>
                            <button className="text-white font-bold lg:col-span-2 w-full bg-[#f39c12] border-[#f39c12] border-4 py-3 px-4 text-lg rounded hover:bg-[#f39c12]/0 hover:text-[#f39c12]   hover:border-[#f39c12]  duration-500  ">Send a message</button>

                        </div>
                  
                </div>
                
            </div>
        </div>
      
      </div>
    </div>
    </>
  );
}