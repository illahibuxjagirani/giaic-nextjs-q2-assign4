import Image from "next/image";

import calvinKlein from "../../public/calvniKlein.png"
import gucci from "../../public/gucci.png"
import prada from "../../public/prada.png"
import versace from "../../public/versace.png"
import zara from "../../public/zara.png"
import bgimg from "../../public/img2.png"
import star from "../../public/star.png"
import star2 from "../../public/star2.png"

export default function Hero(){
  return (
    <div>

{/* top div */}
<div className=" px-16 bg-[#f78cc1] gap-10 py-0.5 sm:flex"
>

{/* left div */}
<div className="sm:w-1/2 h-[calc(100vh-95px)] sm:py-10 space-y-5 mb-52 sm:mb-0
">

<div>
  <h1 className="text-[64px] leading-[64px] font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
</div>


<div>
  <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
</div>


<div>
  <button className="h-[52px] bg-black text-white px-[54px] py-[16px] rounded-full w-full sm:w-auto">Shop Now</button>
</div>


<div className="flex justify-between sm:flex-row flex-col items-center gap-5">

<div className="flex justify-between w-[60%]">

  <div className="space-y-2">
    <p className="text-4xl font-[600]">200+</p>
    <p className="text-sm text-[#00000099]">International Brands</p>
  </div>

 

  <div className="space-y-2">
    <p className="text-4xl font-[600]">2,000+</p>
    <p className="text-sm text-[#00000099]">High-Quality Products</p>
  </div>
  
  </div>

  <div className="space-y-2 sm:w-[25%]">
    <p className="text-4xl font-[600]">30,000+</p>
    <p className="text-sm text-[#00000099]">Happy Customers</p>
  </div>

  
  
</div>

</div>


{/* right div */}
<div className="sm:w-1/2 h-full relative w-full sm:order-2 order-1">
<Image src={bgimg} alt="BG" className="h-full"/>
<Image src={star} alt="BG" className="absolute top-[60px] right-0"/>
<Image src={star2} alt="BG" className="absolute left-0 top-[50%]"/>

</div>

</div>


{/* bottom div */}

<div className="h-[85px] bg-black flex items-center justify-between px-16">
  <div>
<Image src={versace} alt="Versace"/>
  </div>

  <div>
<Image src={zara} alt="ZARA"/>
  </div>

  <div>
<Image src={gucci} alt="GUCCI"/>
  </div>

  <div>
<Image src={prada} alt="PRADA"/>
  </div>

  <div>
<Image src={calvinKlein} alt="CALVIN KLEIN"/>
  </div>

</div>


    </div>
  )
}