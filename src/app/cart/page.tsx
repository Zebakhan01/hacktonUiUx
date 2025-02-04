import Image from "next/image";
import ShopeHero from "../../../public/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image src={ShopeHero} alt="Picture of the author" className="w-full h-auto" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center">
          <h3 className="font-bold text-[1.5rem] md:text-2xl">Cart</h3>
          <div className="flex items-center text-sm md:text-base">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>cart</h3>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="producDetails flex flex-col md:flex-row justify-around items-center p-4 bg-[#F9F1E7]">
          <h2 className="text-sm md:text-base">Product</h2>
          <h2 className="text-sm md:text-base">Price</h2>
          <h2 className="text-sm md:text-base">Quantity</h2>
          <h2 className="text-sm md:text-base">Subtotal</h2>
        </div>
        
        <div>
          <br />
          <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-6">
            <Image src="/sofaaa.png" width={250} height={250} alt="Asgaard sofa" className="w-full h-auto" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm md:text-base">Asgaard sofa</p>
              <p className="text-sm md:text-base">Rs. 250,000.00</p>
              <input type="number" className="p-2 w-20 mt-2 text-sm md:text-base" />
              <p className="text-sm md:text-base">Rs. 250,000.00</p>
            </div>
          </div>

          <div className="cartTotal bg-[#F9F1E7] text-center mt-4 w-full sm:w-[20rem] h-[15rem] pt-6 md:pt-8">
            <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
            <p><span className="font-bold">Subtotal </span> Rs. 250,000.00</p>
            <p><span className="font-bold">Total</span> Rs. 250,000.00</p>

            <button className="mt-5 rounded-md border-gray-900 border-2 p-2 px-3 text-sm md:text-base">Check Out</button>
          </div>
        </div>
      </div>

      <div className="mb-3 mt-10 flex flex-col md:flex-row justify-evenly items-center p-2 w-full h-[8rem] bg-[#F9F1E7]">
        <div className="text-center">
          <Image src="/Group.png" width={40} height={40} alt="High Quality" />
          <h4 className="font-bold text-sm md:text-base">High Quality</h4>
          <p className="text-xs md:text-sm">Crafted from top materials</p>
        </div>
        <div className="text-center">
          <Image src="/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold text-sm md:text-base">Warranty Protection</h4>
          <p className="text-xs md:text-sm">Over 2 years</p>
        </div>
        <div className="text-center">
          <Image src="/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold text-sm md:text-base">Free Shipping</h4>
          <p className="text-xs md:text-sm">Order over 150 $</p>
        </div>
        <div className="text-center">
          <Image src="/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 className="font-bold text-sm md:text-base">24 / 7 Support</h4>
          <p className="text-xs md:text-sm">Dedicated support</p>
        </div>
      </div>
    </>
  );
}
