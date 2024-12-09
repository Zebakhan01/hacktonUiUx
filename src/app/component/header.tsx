import Image from "next/image";
import Logo from "../../../public/Pictures/Logo (1).png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar w-[1286px] h-[41px] absolute top-[29px] left-[54px] flex items-center justify-between">
        <div className="logo ">


        <Image src={Logo} width={185} height={41} alt="Main top Picture" />
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href="/Shop">
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <Link href={'/cart'}>
        <AiOutlineShoppingCart />
        </Link>

        </div>


      </div>
    </>
  );
}