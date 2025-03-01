import React from 'react';

const KeyFeatures = () => {
  return (
    <div className="key-features mt-[3.5rem] md:mt-[9.5rem]">
      <h2 className="text-[32px] md:text-[40px] xl:text-[50px] leading-[38px] md:leading-[3rem] xl:leading-[4.938rem] mb-[1.875rem] md:mb-[2.5rem] text-center">
        Key Features
      </h2>
      <ul className="key-feature-list flex flex-col md:flex-row md:justify-between md:mt-[2rem] xl:mt-[0.5rem] md:w-[90%] md:mx-auto">
        <li className="flex flex-col items-center w-[80%] mb-[4.5rem] md:mb-[4.5rem] md:w-[22%] mx-auto md:text-center border-2">
          <img
            src="https://media.atomberg.com/cdn-cgi/image/width=142,format=auto,quality=80/media/pdp_content_imgs/smartlock/Snoop_Protection-new-1.svg"
            alt="Snoop ProtectionT"
            loading="lazy"
            fetchpriority="low"
            className="w-[8.875rem] h-[8.875rem] md:w-[6rem] md:h-[6rem] lg:w-[8.8rem] lg:h-[8.8rem] aspect-1"
          />
          <h3 className="text-[#231F20] md:w-[64%] md:text-[#707070] md:text-[20px] lg:text-[24px] text-[24px] leading-[1.5rem] md:leading-[1.5rem] xl:leading-[2rem] font-medium mt-[1.875rem] md:mt-[1rem] xl:mt-[1.8rem]">
            Snoop Protection
          </h3>
          <p className="md:w-[90%] mt-[4px] md:mt-[1rem] xl:mt-[1.5rem] text-[16px] md:text-[18px] text-[#777777] font-light leading-[1.5rem] md:leading-[1.625rem] text-center">
            Enter a random string of numbers before and after your pin, and the lock will open. Perfect for privacy and protecting your pin.
          </p>
        </li>
        <li className="flex flex-col items-center w-[80%] mb-[4.5rem] md:mb-[4.5rem] md:w-[22%] mx-auto md:text-center border-2">
          <img
            src="https://media.atomberg.com/cdn-cgi/image/width=142,format=auto,quality=80/media/pdp_content_imgs/smartlock/reverse-door-new-1.svg"
            alt="Reversible Door Handle"
            loading="lazy"
            fetchpriority="low"
            className="w-[8.875rem] h-[8.875rem] md:w-[6rem] md:h-[6rem] lg:w-[8.8rem] lg:h-[8.8rem] aspect-1"
          />
          <h3 className="text-[#231F20] md:w-[64%] md:text-[#707070] md:text-[20px] lg:text-[24px] text-[24px] leading-[1.5rem] md:leading-[1.5rem] xl:leading-[2rem] font-medium mt-[1.875rem] md:mt-[1rem] xl:mt-[1.8rem]">
            Reversible Door Handle
          </h3>
          <p className="md:w-[90%] mt-[4px] md:mt-[1rem] xl:mt-[1.5rem] text-[16px] md:text-[18px] text-[#777777] font-light leading-[1.5rem] md:leading-[1.625rem] text-center">
            At the time of installation, you can reverse the door handles for left and right-handed doors.
          </p>
        </li>
        <li className="flex flex-col items-center w-[80%] mb-[4.5rem] md:mb-[4.5rem] md:w-[22%] mx-auto md:text-center border-2">
          <img
            src="https://media.atomberg.com/cdn-cgi/image/width=142,format=auto,quality=80/media/pdp_content_imgs/smartlock/emergency-back-power-new-1.svg"
            alt="Emergency Power Back-up"
            loading="lazy"
            fetchpriority="low"
            className="w-[8.875rem] h-[8.875rem] md:w-[6rem] md:h-[6rem] lg:w-[8.8rem] lg:h-[8.8rem] aspect-1"
          />
          <h3 className="text-[#231F20] md:w-[64%] md:text-[#707070] md:text-[20px] lg:text-[24px] text-[24px] leading-[1.5rem] md:leading-[1.5rem] xl:leading-[2rem] font-medium mt-[1.875rem] md:mt-[1rem] xl:mt-[1.8rem]">
            Emergency Power Back-up
          </h3>
          <p className="md:w-[90%] mt-[4px] md:mt-[1rem] xl:mt-[1.5rem] text-[16px] md:text-[18px] text-[#777777] font-light leading-[1.5rem] md:leading-[1.625rem] text-center">
            Connect an external power source in case the battery drains, to unlock the door.
          </p>
        </li>
        <li className="flex flex-col items-center w-[80%] mb-[4.5rem] md:mb-[4.5rem] md:w-[22%] mx-auto md:text-center border-2">
          <img
            src="https://media.atomberg.com/cdn-cgi/image/width=142,format=auto,quality=80/media/pdp_content_imgs/smartlock/Seamless-app-Desktop.svg"
            alt="Seamless App Experience"
            loading="lazy"
            fetchpriority="low"
            className="w-[8.875rem] h-[8.875rem] md:w-[6rem] md:h-[6rem] lg:w-[8.8rem] lg:h-[8.8rem] aspect-1"
          />
          <h3 className="text-[#231F20] md:w-[64%] md:text-[#707070] md:text-[20px] lg:text-[24px] text-[24px] leading-[1.5rem] md:leading-[1.5rem] xl:leading-[2rem] font-medium mt-[1.875rem] md:mt-[1rem] xl:mt-[1.8rem]">
            Seamless App Experience
          </h3>
          <p className="md:w-[90%] mt-[4px] md:mt-[1rem] xl:mt-[1.5rem] text-[16px] md:text-[18px] text-[#777777] font-light leading-[1.5rem] md:leading-[1.625rem] text-center">
            Our intuitive interface has been designed to ensure all setup operations are completed almost instantly.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KeyFeatures;