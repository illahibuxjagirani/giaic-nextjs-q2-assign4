import Image from "next/image";
import shirt4 from "../../public/shirt4.png"
import shirt5 from "../../public/shirt5.png"
import pent1 from "../../public/pent1.png"
import pent2 from "../../public/pent2.png"
import starf from "../../public/starf.png"
import starh from "../../public/starh.png"



export default function Selling(){
  return(
    <div className="px-16 h-[calc(100vh-95px)] space-y-3">

<div>
  <h1 className="text-center text-[50px] font-extrabold">Top Selling</h1>
</div>

<div className="flex justify-between">

{/* shirt1 */}
<div className="space-y-3 cursor-pointer">
  <Image src={shirt4} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">VERTICAL STRIPED SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">5.0/5</p>
  </div>

  <div className="flex gap-3 items-center font-bold">

<p className="font-bold">$212</p>
<p className="text-[#00000066] line-through">$232</p>
<p className="text-[#FF3333] bg-[#FF33331A] px-2 text-sm">-20%</p>
</div>

</div>

{/* pant */}
<div className="space-y-3 cursor-pointer">
  <Image src={shirt5} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">COURAGE GRAPHIC T-SHIRT</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.0/5</p>
  </div>


<div className="flex gap-3 items-center">

<p className="font-bold">$145</p>
</div>
</div>


{/* shirt2 */}
<div className="space-y-3 cursor-pointer">
  <Image src={pent1} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold capitalize">Loose Fit Bermuda shorts</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>
<p className="text-sm">3.0/5</p>
  </div>

<p className="font-bold">$80</p>
</div>


{/* shirt3 */}
<div className="space-y-3 cursor-pointer">
  <Image src={pent2} alt="Image" className="h-[250px] w-[250px]"/>

  <p className="font-bold">FADED SKINNY JEANS</p>

  <div className="flex gap-3 items-center">
<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starh} alt="Image" className="w-[12.49px] h-[18.49px]"/>
</div>
<p className="text-sm">4.5/5</p>
  </div>

  <div className="flex gap-3 items-center">

<p className="font-bold">$210</p>
</div>

</div>


</div>

<div>
  <h1 className="text-center text-[16px] cursor-pointer text-slate-500 hover:text-slate-600">View All</h1>
</div>
    </div>
  )
}