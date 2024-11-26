import Image from "next/image";
import shirt1 from "../../public/shirt1.png"
import shirt2 from "../../public/shirt2.png"
import shirt3 from "../../public/shirt3.png"
import pant from "../../public/pant.png"
import starf from "../../public/starf.png"
import starh from "../../public/starh.png"



export default function Arrivals(){
  return(
    <div className="px-16 h-[calc(100vh-95px)] space-y-3">

<div>
  <h1 className="text-center text-[50px] font-extrabold">New Arrivals</h1>
</div>

<div className="flex justify-between">

{/* shirt1 */}
<div className="space-y-3">
  <Image src={shirt1} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">T-SHIRT WITH TAPE DETAILS</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>4.5/5</p>
  </div>

<p className="font-bold">$120</p>
</div>

{/* pant */}
<div className="space-y-3">
  <Image src={pant} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">SKINNY FIT JEANS</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>3.5/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$240</p>
<p className="text-[#00000066] line-through">$260</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
</div>
</div>


{/* shirt2 */}
<div className="space-y-3">
  <Image src={shirt2} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">CHECKERED SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>4.5/5</p>
  </div>

<p className="font-bold">$180</p>
</div>


{/* shirt3 */}
<div className="space-y-3">
  <Image src={shirt3} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">SLEEVE STRIPED T-SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p>4.5/5</p>
  </div>

  <div className="flex gap-3 items-center">

<p className="font-bold">$130</p>
<p className="text-[#00000066] line-through">$160</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-30%</p>
</div>

</div>


</div>
    </div>
  )
}