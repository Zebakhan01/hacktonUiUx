'use client'
import React, { useEffect, useState } from "react"; 
import sanityClient from "@sanity/client" ;
import Image from "next/image" ;
const sanity = sanityClient({
projectId:"97bnhhw1",
dataset:"production" ,
apiVersion:"2023-01-01",
useCdn:true,
}) ;
 
interface Product {
_id: string ;
title: string;
price: number ;
description: string ;
discountPercentage: number ;
imageUrl: string ;
productImage: {
assest:{
_ref: string ;
};
};

tags: string[ ] 
};
const ProductCards:React.FC= () =>{
const [products, setProducts ]=useState<Product [] >([]);
const [cart, setCart]=useState<Product [ ] > ([]);

const fetchProducts =async () => {
try{
const query =`*[type == "product"] {
id,
title,
price,
description,
discountPercentage,
"imageUrl": product Image. assest- >url,
 tags
}`;
const data = await sanity.fetch (query);
setProducts(data);
}
catch(error){
console. error ("Error Fetching Products:", error) ;
}
};
const addToCart=(product: Product ) =>{
setCart( (prevCart) => [...prevCart, product ]); 
alert(`${product.title} has been added to your cart!` );
};
useEffect(() =>{ 
    fetchProducts () 
} ,[]);
    function truncateDescription(description: string): React.ReactNode | Iterable<React.ReactNode> {
        throw new Error("Function not implemented.");
    }

return (
<div className="p-4">
<h2 className="text-center text-slate-800 mt-4 mb-4"> Products API`s Data </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
{products.map( (product ) =>(
<div 
key={product._id}
className="g-white shadow-md rounded-lgp-4 hover:shadow-lg transition-shadow duration-300">

<Image src=
{product.imageUrl} 
alt={product. title} 
width={300}
height={300}
className="w-full h-48 object-cover rounded-md "/>

<div className="mt-4">
<h2 className="text-lg font-semibold"> {product.title} </h2>
<p text-slate-800 mt-2 text-sm>{truncateDescription(product.description)}</p>
<div className="flex justify-between items-center mt-4">
<div>
<p className=" text-slate-600 font-bold"> {product. price}</p> 
{product.discountPercentage> 0 &&(
<p className="text-sm text-green-700">
{product.discountPercentage} % oFF </p>

)}
</div>
</div>
<div className="flex flex-wrap mt-2 gap-2">
   {product.tags.map((tag,index)=>(
    <span
        key={index}
        className="text-xs bg-slate-400 text-black rounded-full x-2 py-1">
            {tag}
    </span>
   ))}
   </div>
{/*Addto Cart functionality*/}
<button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
onClick={()=>addToCart(product)}
>
Add To Cart
</button>
</div>
</div>
))}
</div>
{/*Addto Cart functionality*/}
<div className="mt-8 bg-slate-100 py-6 rounded-lg shadow-md">
    <h2 className=" text-lg font-black text-red-800 ">Cart Summery</h2>
    {cart.length > 0? (
<ul className=" space-y-4">
    {cart.map((item,index)=>(
        <li
        key={index} 
        className="flex justify-between items-center bg-white shadow-sm rounded-md">
            <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-blue-600">{item.price.toFixed(2)}</p>
</div>
<Image src=
{item.imageUrl} 
alt={item.title} 
width={50}
height={50}
className="rounded-md "/>
        </li>
    ))}

</ul>
    ):(
<p className="text-black text-center">Your Cart Is Empty Please Add Your Products
</p>
    )}

</div>

</div>
)}

export default ProductCards