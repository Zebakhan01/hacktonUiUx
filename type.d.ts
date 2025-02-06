interface Product {
  image(image: any): unknown;
  category: string;
  _id: string;
  title:string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  imageUrl: string;
  productImage:{
    assest:{
      _ref:string;
    }
  }
  tags:string[]
  
  
}
