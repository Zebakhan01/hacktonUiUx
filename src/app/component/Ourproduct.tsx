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
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 transform hover:scale-105 w-full max-w-xs">
      <Link href={`/product/${card.name}`} passHref>
        <div className="flex justify-center items-center h-64 md:h-72">
          <Image
            src={card.image}
            alt={card.name}
            width={285}
            height={446}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{card.name}</h5>
        <p className="text-gray-700 mb-4">{card.description}</p>
        <h5 className="text-lg font-bold text-[#B88E2F]">{card.price}</h5>
        <button className="mt-4 w-full py-2 px-4 bg-[#B88E2F] text-white rounded-md hover:bg-[#9f6e2f] transition duration-300">
          Add to Cart
        </button>
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
      image: '/Pictures/Images.png',
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: 'Rp 2.500.000',
      age: 25,
      image: '/Pictures/dining.png',
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Lolito',
      price: 'Rp 2.500.000',
      age: 25,
      image: '/Pictures/lolito.png',
      description: 'Luxury big sofa.',
    },
    {
      name: 'Grifo',
      price: 'Rp 2.500.000',
      age: 25,
      image: '/Pictures/grifo.png',
      description: 'A creative designer who loves creating stunning visuals.',
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-[#F9F1E7]">
      <h2 className="text-center text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.map((card, index) => (
          <ProductCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
}
