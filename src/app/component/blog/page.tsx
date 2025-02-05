
import React from 'react';
import Image from 'next/image'; 


export default function Hero () {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap justify-center p-6 space-x-4">
        {/* Furniture Item 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
         
          <Image
            className="w-full h-48 object-cover"
            src="https://example.com/sofa.jpg"
            alt="Modern Sofa"
            width={288}  
            height={192} 
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Modern Sofa</h2>
            <p className="text-gray-600">Comfortable and stylish sofa perfect for any living room.</p>
          </div>
        </div>

        {/* Furniture Item 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
         
          <Image
            className="w-full h-48 object-cover"
            src="https://example.com/dining-table.jpg"
            alt="Elegant Dining Table"
            width={288}
            height={192}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Elegant Dining Table</h2>
            <p className="text-gray-600">Spacious dining table to bring your family together.</p>
          </div>
        </div>

        {/* Furniture Item 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
          
          <Image
            className="w-full h-48 object-cover"
            src="https://example.com/coffee-table.jpg" 
            alt="Wooden Coffee Table"
            width={288}
            height={192}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Wooden Coffee Table</h2>
            <p className="text-gray-600">A classic wooden coffee table for your living room.</p>
          </div>
        </div>
      </div>

    </div>
  );
};


