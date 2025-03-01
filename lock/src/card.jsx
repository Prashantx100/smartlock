import React, { useState } from 'react';

const SmartLockCard = ({ products, productTitle }) => {
    const filteredProducts = products.filter((p) => p.title === productTitle);
    const [selectedProduct, setSelectedProduct] = useState(filteredProducts[0]);
    const [currentImage, setCurrentImage] = useState(selectedProduct.imageUrl);

    const handleColorChange = (color) => {
        // Find the index of the clicked color in the colorOptions array
        const colorIndex = selectedProduct.colorOptions.indexOf(color);

        // Set the image based on the color index (0 for first image, otherwise alt image)
        setCurrentImage(
            colorIndex === 0 ? selectedProduct.imageUrl : selectedProduct.altimageUrl
        );
    };

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <div className='w-full overflow-hidden'>
                <img className="transform hover:scale-110 transition-transform duration-500" src={currentImage} alt={selectedProduct.title} />
            </div>

            <div className="px-6 py-4 flex flex-col flex-grow">
                {/* Added flex-grow */}
                <div className="font-bold text-xl mb-2 h-15">
                    {selectedProduct.title}
                </div>
                <div className="flex items-center mb-2">
                    {selectedProduct.colorOptions.map((color, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full mr-2 cursor-pointer border-2`}
                            // Directly use the color from colorOptions for background
                            style={{ backgroundColor: color, borderColor: 'grey' }}
                            onClick={() => handleColorChange(color)}
                        ></div>
                    ))}
                </div>
                <div className="flex items-center mb-2">
                    <span className="line-through text-gray-500 mr-2">₹{selectedProduct.originalPrice}</span>
                    <span className="font-bold text-xl">₹{selectedProduct.discountedPrice}</span>
                    <span className="text-red-500 ml-2">-{selectedProduct.discountPercentage}%</span>
                </div>
            </div>
            <div className="flex justify-center space-x-5 mb-2 mb-4">
                <button className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded">
                    <a href={selectedProduct.alink} target="_blank" rel="noopener noreferrer">
                        Amazon
                    </a>
                </button>
                <button className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded">
                    <a href={selectedProduct.flink} target="_blank" rel="noopener noreferrer">
                        Flipkart
                    </a>
                </button>
            </div>
        </div>
    );
};

export default SmartLockCard;