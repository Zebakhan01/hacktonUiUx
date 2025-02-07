import Image from "next/image";
import InnerPeace from "../../../public/Pictures/inner.png";
import SideInner from "../../../public/Pictures/Sideinner.png";

export default function SlideSection() {
  return (
    <div className="slideSection bg-[#FCF8F3] flex flex-wrap items-center justify-center sm:justify-between px-4 py-6">
      {/* Left Side (Text) */}
      <div className="slideText w-full sm:w-1/2 text-center sm:text-left px-4">
        <h4 className="font-extrabold text-lg sm:text-2xl md:text-3xl">
          50+ Beautiful rooms inspiration
        </h4>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#a67c1b] transition">
          Explore More
        </button>
      </div>

      {/* Right Side (Images) */}
      <div className="slideImages flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-1/2 px-4">
        <div className="image-item w-40 sm:w-52 md:w-60">
          <Image src={InnerPeace} width={250} height={250} alt="Inner Peace" className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="image-item w-40 sm:w-52 md:w-64">
          <Image src={SideInner} width={270} height={250} alt="Side Inner" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}
