import Image from "next/image";
import HeroImage from "../../../public/Hero.png";

export default function Hero() {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] sm:h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1440px]">
        <Image
          src={HeroImage}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        
        {/* Updated Section for Text and Button */}
        <div className="bg-[#FFF3E3] p-6 rounded-lg text-center absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[222px]">
          <h6 className="text-sm sm:text-base md:text-lg">New Arrival</h6>
          <h3 className="font-extrabold text-[1.5rem] sm:text-[2rem] text-[#B88E2F] bg-amber-100 rounded-sm">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <button className="font-bold text-white bg-[#B88E2F] px-6 py-2 rounded-full hover:bg-[#9f6e2f] transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
