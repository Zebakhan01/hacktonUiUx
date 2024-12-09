import Header from "./component/header"
import Image from "next/image";
import HeroImage from "../../public/Pictures/Hero.png";
import Products from "./component/Poducts";
import Hero2 from "./component/page";

export default function Hero() {
  return (
    <>
   
      {/* w90rem h 63 */}
      <div className="heroImage w-[1440px] h-[1440px] ">
        <Image
          src={HeroImage}
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText  bg-[#FFF3E3] w-[222px] h-[74px] absolute top-[585px] left-[778px] p-t[25px].[25px] p-r[72px] p-b[25px] p-l[72px] gap-[10px]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className=" buyBtn #B88E2F">BUY NOW</button>
        </div>
      </div>
    </>
  );
}