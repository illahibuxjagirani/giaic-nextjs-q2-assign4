import Arrivals from "@/components/Arrivals";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Selling from "@/components/Selling";
import Style from "@/components/Style";
import Updates from "@/components/Updates";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Arrivals/>
      <Selling/>
      <Style/>
      <Customers/>
      {/* <Updates/> */}
      <Footer/>
    </div>
  );
}
