import Image from "next/image";
import cross from "../../public/cross.png"
import downArrow from "../../public/down-arrow.png"
import search from "../../public/search.png"
import account from "../../public/account.png"
import cart from "../../public/cart.png"

export default function Navbar(){
  return (
    <div className="">

{/* top div */}
    <div className="px-16 h-[38px] bg-black flex w-full justify-between text-white items-center">
<div className="flex gap-3 justify-center w-full">
<p>Sign up and get 20% off to your first order</p>
<button className="underline">Sign Up Now</button>
</div>

<Image src={cross} alt="Image" className="h-[20px] w-[20px]">

</Image>
    </div>

    {/* bottom div */}
    <div className="h-[85px] px-16 flex items-center" >

<div className="h-[62px] flex justify-between items-center w-full">

{/* logo div */}
<div>
<h1 className="font-extrabold text-3xl uppercase">ibshop.co</h1>
</div>

{/* tab div */}
<div>

<ul className="flex gap-5">
  <li className="flex"><span>Shop</span> <Image src={downArrow} alt="Image"></Image></li>
  <li>On Sale</li>
  <li>New Arrivals</li>
  <li>Brands</li>
</ul>

</div>


{/* search div */}
<div className="flex w-[45%] relative items-center">
<Image src={search} alt="Image" className="absolute left-3"></Image>
<input type="text" name="" id="" className="bg-[#F0F0F0] w-full py-2 rounded-full px-10" placeholder="Search for Products"/>
</div>


{/* cart div */}
<div className="flex gap-3">
<Image src={cart} alt="Image"></Image>
<Image src={account} alt="Image"></Image>
</div>

</div>

    </div>


    </div>
  )
}