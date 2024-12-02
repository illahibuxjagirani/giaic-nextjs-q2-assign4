import Image from "next/image";
import pic1 from "../../public/pic1.png"
import pic2 from "../../public/pic2.png"
import pic3 from "../../public/pic3.png"
import pic4 from "../../public/pic4.png"




export default function Style(){
  return(
    <div className="px-16 space-y-6 bg-[#F0F0F0] py-10">

<div>
  <h1 className="text-center text-[50px] font-extrabold uppercase">BROWSE BY dress STYLE</h1>
</div>

<div className="space-y-3">
{/* top div */}
<div className="flex items-center gap-3">

<div className="">
<Image src={pic1} alt="Picture1"/>
</div>

<div className="">
<Image src={pic2} alt="Picture1"/>
</div>

</div>


{/* bottom div */}
<div className="flex gap-3">

<div>
<Image src={pic3} alt="Picture1"/>
</div>

<div>
<Image src={pic4} alt="Picture1"/>
</div>


</div>



</div>


    </div>
  )
}