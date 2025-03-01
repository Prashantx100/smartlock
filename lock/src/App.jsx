import React from 'react';
import SmartLockCard from './card';
import blackLock from './images/smart_lock_pli_black__artboard_1.webp';
import roseGoldLock from './images/smart_lock_pli_rose_gold__artboard_1_1.webp';
import KeyFeatures from './feature';

const App = () => {
    const products = [
        {
            imageUrl: blackLock,
            title: 'ATOMBERG AZHERO SMART DOOR LOCK',
            originalPrice: '18600',
            discountedPrice: '10299',
            discountPercentage: '44',
            colorOptions: ['black', 'gold'],
        },
        {
            imageUrl: roseGoldLock,
            title: 'ATOMBERG SL 1',
            originalPrice: '26000',
            discountedPrice: '15299',
            discountPercentage: '39',
            colorOptions: ['black', 'brown'],
        },
        {
            imageUrl: roseGoldLock,
            title: 'ATOMBERG AZHERO SMART DOOR LOCK',
            originalPrice: '18600',
            discountedPrice: '10299',
            discountPercentage: '44',
            colorOptions: ['silver', 'gold'],
        },
        {
            imageUrl: roseGoldLock,
            title: 'ATOMBERG SL 1',
            originalPrice: '26000',
            discountedPrice: '15299',
            discountPercentage: '39',
            colorOptions: ['silver', 'brown'],
        },
    ];

    return (
        <>
        <div className="flex flex-wrap justify-center">
            <SmartLockCard products={products} productTitle={'ATOMBERG AZHERO SMART DOOR LOCK'} />
            <SmartLockCard products={products} productTitle={'ATOMBERG SL 1'} />
            <SmartLockCard products={products} productTitle={'ATOMBERG AZHERO SMART DOOR LOCK'} />
            <SmartLockCard products={products} productTitle={'ATOMBERG SL 1'} />
        </div>
        <KeyFeatures/>
        </>
    );
};

export default App;