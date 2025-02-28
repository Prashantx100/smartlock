import React from 'react';
import Navbar from './navbar'; // Adjust path if needed
import SmartLockCard from './card';

const App = () => {
  return (
    <div className="container">
      <h1>Different Access for different people</h1>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        <SmartLockCard
          imageUrl=".\src\images\smart_lock_pli_black__artboard_1.webp"
          title="ATOMBERG AZHERO SMART DOOR LOCK"
          originalPrice="18600"
          discountedPrice="10299"
          discountPercentage="44"
          colorOptions={['black', 'gold']}
          joinLiveDemo={() => alert('Join Live Demo clicked!')}
          addToCart={() => alert('Add to cart clicked!')}
        />
        <SmartLockCard
          imageUrl=".\src\images\smart_lock_pli_rose_gold__artboard_1_1.webp"
          title="ATOMBERG SL 1"
          originalPrice="26000"
          discountedPrice="15299"
          discountPercentage="39"
          colorOptions={['black', 'brown']}
          joinLiveDemo={() => alert('Join Live Demo clicked!')}
          addToCart={() => alert('Add to cart clicked!')}
        />
      </div>
    </div>
  );
};

export default App;