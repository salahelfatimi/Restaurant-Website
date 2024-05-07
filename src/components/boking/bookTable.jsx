import { PanelTopClose, X } from "lucide-react";
import bg from '/public/image/bg.png'
import Image from "next/image";
export default function BookTable({bookingShow , setBookingShow}){
    const generateTimeSlots = () => {
        const timeSlots = [];
        for (let hour = 10; hour <= 21; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const amPm = hour < 12 ? 'AM' : 'PM';
            const hourFormatted = hour === 12 ? 12 : hour % 12;
            const time = `${hourFormatted}:${minute.toString().padStart(2, '0')} ${amPm}`;
            timeSlots.push(time);
            if (hour === 23 && minute === 30) {
              // Break loop when it reaches 11:30 PM
              break;
            }
          }
        }
        return timeSlots;
      };
    
      const timeSlots = generateTimeSlots();
    return(
        <div className={`z-50 h-screen px-4 bg-black/20  bg-[url('/image/bg.png')] items-center flex  flex-col justify-center inset-0 absolute duration-700 transition   ${bookingShow?'-translate-y-0':'-translate-y-full'}`}>
                <div className="bg-white  py-4 px-8 flex flex-col items-center gap-6 ">
                    <button onClick={()=>{setBookingShow(!bookingShow)}}><PanelTopClose size={30} className=" text-red-700 animate-bounce" /></button>
                    <span className=" font-bold text-[#aa9168]">BOOKING</span>
                    <h1 className=" font-bold text-2xl text-[#1a2f33] ">Book a Table</h1>
                    <h2 className=" text-center   text-sm">CALL US +1 777 000 111 OR COMPLETE THE FORM BELOW</h2>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <input type="text" name="" id="" className=" shadow border    text-sm rounded-lg  block w-full px-8 py-3 " />
                        <input type="text" name="" id="" className=" shadow border    text-sm rounded-lg  block w-full px-8 py-3 " />
                        <input type="email" name="" id="" className=" shadow border   text-sm rounded-lg  block w-full px-8 py-3 " />
                        <select className=" shadow border  text-sm rounded-lg  block w-full px-8 py-3   " name="person" id="">
                            <option value="1" selected>1 Person</option>
                            <option value="2">2 Person</option>
                            <option value="3">3 Person</option>
                            <option value="4">4 Person</option>
                            <option value="5">5 Person</option>
                        </select>
                        <input type="date" name="" id="" className=" shadow border    text-sm rounded-lg  block w-full px-8 py-3 " />
                        <select className=" shadow border     text-sm rounded-lg  block w-full px-8 py-3 " name="person" id="">
                            {timeSlots.map((time, index) => (
                                <option className=" text-center font-medium" value={time} key={index}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="text-white font-bold bg-[#f39c12] py-3 px-6 text-lg rounded hover:bg-black  duration-500 hover:text-[#fff] ">Reserve a table</button>
                </div>
        </div>
    )
}