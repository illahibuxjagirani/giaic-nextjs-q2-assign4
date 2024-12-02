import Image from "next/image";

import email from "../../public/email.png"

export default function Updates(){
  return (
    <div>

{/* bottom div */}

<div className=" bg-black flex items-center justify-between mx-16 py-[36px] px-[64px] rounded-xl">
  
  <div>
<h1 className="text-white text-[40px] font-extrabold w-[60%] leading-[40px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
  </div>

  <div className="w-[350px] space-y-3">

<div className="relative">
  <Image src={email} alt="Email" className="absolute left-3 top-3"/>
  <input type="text" name="" id="" className="w-full rounded-full py-3 pl-12" placeholder="Enter your Email address"/>
</div>

<button className="bg-white w-full rounded-full py-3 font-bold">Subscribe to Newsletter</button>

  </div>

 

</div>


    </div>
  )
}