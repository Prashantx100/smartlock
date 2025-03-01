import React, { useState } from 'react';

const SmartLockCard = ({ products, productTitle }) => {
    // ... (rest of your code)
    const filteredProducts = products.filter((p) => p.title === productTitle);
    const [selectedProduct, setSelectedProduct] = useState(filteredProducts[0]);

    const handleColorChange = (image,product) => {
        

        // filteredProducts.map((p)=>{p.imageUrl === image?p.imageUrl = blackLock})

        // const matchingProduct = filteredProducts.find(
        //     (p) => p.colorOptions.includes(color) && p.title === product.title
        // );
        // if (matchingProduct) {
        //     setSelectedProduct(matchingProduct);
        // }
    };

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <div className='w-full overflow-hidden'>
                <img className="transform hover:scale-110 transition-transform duration-500" src={selectedProduct.imageUrl} alt={selectedProduct.title} />
            </div>
            
            <div className="px-6 py-4 flex flex-col flex-grow"> {/* Added flex-grow */}
                <div className="font-bold text-xl mb-2 h-15">{selectedProduct.title}</div>
                <div className="flex items-center mb-2">
                    {selectedProduct.colorOptions.map((color, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full mr-2 cursor-pointer`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorChange(selectedProduct.imageUrl,selectedProduct)}
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
                <button
                    className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded"
                    onClick={() => alert('Amazon clicked!')}
                >
                    Amazon
                </button>
                <button
                    className="bg-[#CA5134] hover:bg-[#e13307] text-white font-bold py-2 px-4 rounded"
                   /* onClick={() => 
                        
                    } */
                >
                    <a href="https://www.flipkart.com/godrej-locks-catus-touch-plus-digital-lock-wooden-door-4-1-access-3-bolts-smart/p/itme03fde07c2b34?pid=SLOHF73WJQNAHY8E&lid=LSTSLOHF73WJQNAHY8EOG9O3N&marketplace=FLIPKART&q=smartlock&store=igc%2Fu0f&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=46083dc1-1593-4112-8307-30030f51915c.SLOHF73WJQNAHY8E.SEARCH&ppt=None&ppn=None&ssid=421nyspnuo0000001740821994378&qH=27fa644b2d5e8883" target="_blank">
                    Flipkart
                    </a>
                </button>
            </div>
        </div>
    );
};

export default SmartLockCard;



    
