import Image from "next/image";
import ShopImage from "../../../public/Pictures/Hero.png";
import { IoIosArrowForward } from "react-icons/io";
import Products from "../component/Poducts";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "Abc",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "https://images.search.yahoo.com/search/images;_ylt=AwrjcGKGm6JnPQIAUR9XNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=google+furniture+images+out+of+country&fr2=piv-web&type=E210US91215G0&fr=mcafee#id=33&iurl=https%3A%2F%2Fwww.southshorefurniture.com%2Fcdn%2Fshop%2Ffiles%2F16179_16180_16181_16182_16208_lifestyle.jpg%3Fv%3D1728590142%26width%3D1070&action=click",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "Abc",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "https://via.placeholder.com/100",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/100",
      description: "A software engineer specializing in backend systems.",
    },
  ];

  return (
    <>
      {/* shopsect */}
      <div className="relative">
        <Image src={ShopImage} alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
   
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "18rem" }}
              className="card-img-top"
              //   alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex gap-2 justify-center " >
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">1</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">2</button>
     <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">3</button>
     <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-white:">Next</button>

</div>
      <div className="flex justify-eyvenl items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        
        < div className="">
    
        <Image src="/Group.png" width={40} height={40} alt="Picture of the author" />
        
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
        <Image src="/warr.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
        <Image src="/vector.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
        <Image src="/customer.png" width={40} height={40} alt="Picture of the author" />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}