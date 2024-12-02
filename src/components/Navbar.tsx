import Image from "next/image";
import cross from "../../public/cross.png"
import downArrow from "../../public/down-arrow.png"
import search from "../../public/search.png"
import search1 from "../../public/search1.png"
import burger from "../../public/burger.png"
import account from "../../public/account.png"
import cart from "../../public/cart.png"
import Link from "next/link";

export default function Navbar(){
  return (
    <div className="sticky top-0 z-50">

{/* top div */}
    <div className="px-10 sm:px-16 h-[30px] bg-black flex w-full justify-between text-white items-center">
<div className="flex gap-3 justify-center w-full">
<p>Sign up and get 20% off to your first order</p>
<button className="underline">Sign Up Now</button>
</div>

<Image src={cross} alt="Image" className="h-[20px] w-[20px]"/>


    </div>

    {/* bottom div */}
    <div className="h-[65px] px-10 sm:px-16 flex items-center bg-white" >

<div className="h-[62px] flex justify-between items-center w-full">

{/* logo div */}
<div className="flex gap-3 items-center">
  
  <Image src={burger} alt="Burger Menu" className="sm:hidden block"/>
 
<Link href={'/'} className="font-extrabold text-2xl sm:text-3xl uppercase">ibshop.co</Link>
</div>

{/* tab div */}
<div>

<ul className="sm:flex gap-5 hidden">
  <Link href={"/"} className="flex"><span>Shop</span> <Image src={downArrow} alt="Image"></Image></Link>
  <Link href={'/'}>On Sale</Link>
  <Link href={"/arrivals"}>New Arrivals</Link>
  <Link href={"/"}>Brands</Link>
</ul>

</div>


{/* search div */}
<div className="flex w-[45%] relative items-center">
<Image src={search} alt="Image" className="absolute left-3 cursor-pointer hover:scale-105 sm:block hidden"></Image>
<input type="text" name="" id="" className="bg-[#F0F0F0] w-full py-2 rounded-full px-12 sm:block hidden" placeholder="Search for Products"/>
</div>


{/* cart div */}
<div className="flex gap-3">
<Image src={search1} alt="Image" className="text-black fill-black cursor-pointer hover:scale-105"></Image>
<Image src={cart} alt="Image"></Image>
<Image src={account} alt="Image"></Image>
</div>

</div>

    </div>


    </div>
  )
}