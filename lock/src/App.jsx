import React from 'react';
import SmartLockCard from './card';
import blackLock from './images/smart_lock_pli_black__artboard_1.webp';
import roseGoldLock from './images/smart_lock_pli_rose_gold__artboard_1_1.webp';
import KeyFeatures from './feature';

const App = () => {
    const products = [
        {
            imageUrl: blackLock,
            altimageUrl: roseGoldLock,
            flink: "https://www.flipkart.com/godrej-locks-catus-touch-plus-digital-lock-wooden-door-4-1-access-3-bolts-smart/p/itme03fde07c2b34?pid=SLOHF73WJQNAHY8E&lid=LSTSLOHF73WJQNAHY8EOG9O3N&marketplace=FLIPKART&q=smartlock&store=igc%2Fu0f&srno=s_1_7&otracker=search&otracker1=search&fm=organic&iid=46083dc1-1593-4112-8307-30030f51915c.SLOHF73WJQNAHY8E.SEARCH&ppt=None&ppn=None&ssid=421nyspnuo0000001740821994378&qH=27fa644b2d5e8883",
            alink: "https://www.amazon.in/LAVNA-LA16-Fingerprint-Bluetooth-Mobile/dp/B0CBCXKSSP/ref=sr_1_12?sr=8-12",
            title: 'ATOMBERG AZHERO SMART DOOR LOCK 2',
            originalPrice: '18600',
            discountedPrice: '10299',
            discountPercentage: '44',
            colorOptions: ['grey', 'brown'],
        },
        {
            imageUrl: roseGoldLock,
            altimageUrl: blackLock,
            flink: "https://www.flipkart.com/atomberg-azhero-6-ways-unlocking-fingerprint-2-ss-bolt-free-installation-smart-door-lock/p/itm31bc94add40c9?pid=SLOHFHHKN22WBXVQ&lid=LSTSLOHFHHKN22WBXVQ8ZZBHD&marketplace=FLIPKART&q=smartlocks&store=igc%2Fu0f&srno=s_1_2&otracker=search&otracker1=search&iid=646dceb0-e78a-4910-9f39-732ac091d9ed.SLOHFHHKN22WBXVQ.SEARCH&ssid=w2heoxxqk00000001740830222513&qH=ba673a4974243389",
            alink: "https://www.amazon.in/Smiledrive-Fingerprint-Superfast-Unlocking-Mechanisms/dp/B0CQMC7PBZ/ref=sr_1_15?sr=8-15",
            title: 'ATOMBERG SL 1',
            originalPrice: '26000',
            discountedPrice: '15299',
            discountPercentage: '39',
            colorOptions: ['gold', 'black'],
        },
        {
            imageUrl: roseGoldLock,
            altimageUrl: blackLock,
            flink: "https://www.flipkart.com/ifitech-smart-rechargeable-fingerprint-padlock-door-lock/p/itm06ff1a75481ee?pid=SLOGWU9FC3CD9HT7&lid=LSTSLOGWU9FC3CD9HT7ETT2BO&marketplace=FLIPKART&q=smartlocks&store=igc%2Fu0f&srno=s_1_1&otracker=search&otracker1=search&iid=646dceb0-e78a-4910-9f39-732ac091d9ed.SLOGWU9FC3CD9HT7.SEARCH&ssid=w2heoxxqk00000001740830222513&qH=ba673a4974243389",
            alink: "https://www.amazon.in/Mygate-Biometric-Fingerprint-Unlocking-Warranty/dp/B0DC9Y42CV/ref=sr_1_14?sr=8-14",
            title: 'ATOMBERG AZHERO SMART DOOR LOCK',
            originalPrice: '18600',
            discountedPrice: '10299',
            discountPercentage: '44',
            colorOptions: ['black', 'brown'],
        },
        {
            imageUrl: roseGoldLock,
            altimageUrl: blackLock,
            flink: "https://www.flipkart.com/pald-household-cabinet-password-locks-security-slide-latch-3-digit-code-lock-fordoors-smart-door/p/itm445cb934a1ef4?pid=SLOH2SSYHXFPXABX&lid=LSTSLOH2SSYHXFPXABXUL8NVR&marketplace=FLIPKART&q=smartlocks&store=igc%2Fu0f&srno=s_1_8&otracker=search&otracker1=search&iid=646dceb0-e78a-4910-9f39-732ac091d9ed.SLOH2SSYHXFPXABX.SEARCH&ssid=w2heoxxqk00000001740830222513&qH=ba673a4974243389",
            alink: "https://www.amazon.in/QUBO-Essential-Unlocking-Fingerprint-Mechanical/dp/B0BDFMGZVD/ref=sxin_23_pa_sp_search_thematic_sspa?cv_ct_cx=smartlock&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM",
            title: 'ATOMBERG SL 2',
            originalPrice: '26000',
            discountedPrice: '15299',
            discountPercentage: '39',
            colorOptions: ['yellow', 'brown'],
        },
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {products.map((product, index) => (
                    <SmartLockCard key={index} products={products} productTitle={product.title} />
                ))}
            </div>
            <KeyFeatures />
        </>
    );
};

export default App;