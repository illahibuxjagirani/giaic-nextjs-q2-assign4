import Image from "next/image";

import email from "../../public/email.png"
import fb from "../../public/fb.png"
import twitter from "../../public/twitter.png"
import instagram from "../../public/instagram.png"
import github from "../../public/github.png"
import payment from "../../public/payment.png"

export default function Footer(){
  return (
    <div className="bg-[#F0F0F0]">

{/* Updates div */}



{/* footer div */}
<div className="px-16 space-y-5 py-5 relative">
  
<div className=" bg-black flex items-center justify-between mx-16 py-[36px] px-[64px] rounded-xl absolute -top-[100px]">
  
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

{/* top div */}
<div className="flex justify-between pt-20">

<div className="w-[30%] space-y-3">
  <h1 className="text-[34px] font-extrabold uppercase">shop.co</h1>

  <p className="text-sm">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

  <div className="flex py-3">
<Image src={twitter} alt="Twitter"/>
<Image src={fb} alt="Facebook"/>
<Image src={instagram} alt="Instagram"/>
<Image src={github} alt="Github"/>
  </div>
</div>



<div className="w-[70%] flex justify-between">


<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">Company</h1>
<ul className="space-y-2">
<li>About</li>
<li>Features</li>
<li>Works</li>
<li>Career</li>
</ul>

</div>

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">help</h1>
<ul className="space-y-2">
<li>Customer Support</li>
<li>Delivery Details</li>
<li>Terms and Conditions</li>
<li>Privacy Policy</li>
</ul>

</div>

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">faq</h1>
<ul className="space-y-2">
<li>Account</li>
<li>Manage Deliveries</li>
<li>Orders</li>
<li>Payments</li>
</ul>

</div>

<div className="space-y-3">

<h1 className="font-semibold tracking-[5px] uppercase">resources</h1>
<ul className="space-y-2">
<li>Free eBooks</li>
<li>Development Tutorials</li>
<li>How to - Blog</li>
<li>YouTube Playlist</li>
</ul>

</div>

</div>
</div>


{/* bottom div */}
<div className="flex justify-between py-5">

{/* left div */}
<div>
  <p className="text-[#00000099]">Shop.co © 2000-2023, All Rights Reserved</p>
</div>


{/* right div */}
<div>
<Image src={payment} alt=" Payment"/>
</div>


</div>


</div>


    </div>
  )
}