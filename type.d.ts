interface Product {
  category: string;
  id: string;
  price: number;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: boolean; // Fixed type
  name: string;
  image: { asset: { _ref: string } }; // Corrected type
  _id: string;
  sizes: string[];
}
