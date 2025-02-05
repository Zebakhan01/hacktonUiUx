import Image from "next/image";
import InnerPeace from "../../../public/Pictures/inner.png";
import SideInner from "../../../public/Pictures/Sideinner.png";

export default function SlideSection() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] flex items-center justify-between px-4">
        {/* L (Text) */}
        <div className="slideText pt-9 w-full sm:w-1/2">
          <h4 className="font-extrabold text-[2rem]">50+ Beautiful rooms inspiration</h4>
          <p>
            Our designer already made a lot of beautiful prototypes of rooms that
            inspire you.
          </p>
          <button className="bg-[#B88E2F] p-2">Explore More</button>
        </div>

        {/* R side (Images) */}
        <div className="slideImages flex sm:gap-4 gap-2 sm:w-1/2">
          <div className="image-item">
            <Image src={InnerPeace} width={250} height={250} alt="Inner Peace" />
          </div>
          <div className="image-item">
            <Image src={SideInner} width={270} height={250} alt="Side Inner" />
          </div>
        </div>
      </div>
    </>
  );
}
