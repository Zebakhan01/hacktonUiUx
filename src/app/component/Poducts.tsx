import Link from 'next/link';
import Image from 'next/image';

interface Card {
  name: string;
  price: string;
  age: number;
  image: string;
  description: string;
}

const ProductCard = ({ card }: { card: Card }) => {
  return (
    <div
      className="card bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105"
      style={{ width: '15rem' }}
    >
      <Link href={`/product/${card.name}`} passHref>
        <a>
          <Image
            src={card.image}
            alt={card.name}
            width={285}
            height={446}
            className="card-img-top transition-opacity duration-500 opacity-0 hover:opacity-100"
            style={{ transition: 'opacity 0.5s ease-in-out' }} // Smooth opacity transition
          />
        </a>
      </Link>
      <div className="card-body p-4">
        <h5 className="card-title text-xl font-bold mb-2">{card.name}</h5>
        <p className="card-text text-gray-700 mb-4">{card.description}</p>
        <h5 className="card-title text-lg font-bold text-[#B88E2F]">{card.price}</h5>
      </div>
    </div>
  );
};

export default function ShopHero() {
  const data: Card[] = [
    {
      name: 'Syltherine',
      price: 'Rp 2.500.000',
      age: 30,
      image: '/Pictures/Images.png',  // Sahi path diya
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: 'Rp 2.500.000',
      age: 25,
      image: '/Pictures/Images.png',  // Sahi path diya
      description: 'A creative designer who loves creating stunning visuals.',
    },
    // Aur objects add kar sakte hain
  ];

  return (
    <div className="flex justify-evenly items-center p-2 w-[100%] bg-[#F9F1E7]">
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {data.map((card, index) => (
          <ProductCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
}
