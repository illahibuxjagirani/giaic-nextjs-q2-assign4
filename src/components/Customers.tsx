import Image from "next/image";

import starf from "../../public/starf.png"
import starh from "../../public/starh.png"
import tick from "../../public/tick.png"



export default function Customers(){
  return(
    <div className="px-16 gap-10 h-screen flex flex-col justify-center">

<div>
  <h1 className=" text-[50px] font-extrabold uppercase">OUR HAPPY CUSTOMERS</h1>
</div>

<div className="flex gap-3">


<div className="space-y-3 p-3">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">Sarah M.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

</div>

<div className="space-y-3 p-3">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">Alex K.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>

</div>

<div className="space-y-3 p-3">

<div className="flex">
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
<Image src={starf} alt="Image" className="w-[18.49px] h-[18.49px]"/>
</div>

<div className="flex gap-2 items-center">
  <h1 className="font-bold">James L.</h1> <Image src={tick} alt="Tick"/>
</div>

<p className="text-justify">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>

</div>

</div>
    </div>
  )
}