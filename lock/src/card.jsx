import React, { useState } from 'react';

const SmartLockCard = ({ products, productTitle }) => {
    const filteredProducts = products.filter((p) => p.title === productTitle);
    const [selectedProduct, setSelectedProduct] = useState(filteredProducts[0]);

    const handleColorChange = (color, product) => {
        const matchingProduct = filteredProducts.find(
            (p) => p.colorOptions.includes(color) && p.title === product.title
        );
        if (matchingProduct) {
            setSelectedProduct(matchingProduct);
        }
    };

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={selectedProduct.imageUrl} alt={selectedProduct.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{selectedProduct.title}</div>
                <div className="flex items-center mb-2">
                    {selectedProduct.colorOptions.map((color, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full mr-2 cursor-pointer`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorChange(color, selectedProduct)}
                        ></div>
                    ))}
                </div>
                <div className="flex items-center mb-2">
                    <span className="line-through text-gray-500 mr-2">₹{selectedProduct.originalPrice}</span>
                    <span className="font-bold text-xl">₹{selectedProduct.discountedPrice}</span>
                    <span className="text-red-500 ml-2">-{selectedProduct.discountPercentage}%</span>
                </div>
                <div className="flex justify-center space-x-5 pt-3"> {/* Modified section */}
                <button
                    className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded"
                    onClick={() => alert('Amazon clicked!')}
                >
                    Amazon
                </button>
                <button
                    className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded"
                    onClick={() => alert('Flipkart clicked!')}
                >
                    Flipkart
                </button>
            </div>
            </div>
        </div>
    );
};

export default SmartLockCard;