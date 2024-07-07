// import React from 'react';
import { products } from '../../data/data';
import { Card } from '../../Component/component-index';

const Product = () => {
  return (
    <div className="ml-16 mr-16 border border-green-500">
      {/* <h1 className="text-2xl font-bold mb-4">Product List</h1> */}
      <div className="flex flex-wrap border-red-500 border pl-8">
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-3">
            <Card
              title={product.title}
              price={product.price}
              brand={product.brand}
              product_details={product.product_details}
              image={product.images_list[0]} // Assuming the first image is used for the card
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Product };
