import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
          id: 1,
          membership_type: "Basic",
          price: 29.99,
          duration: "1 month",
          features: [
            "Access to basic gym facilities",
            "Standard workout equipment",
            "Locker room access"
          ]
        },
        {
          id: 2,
          membership_type: "Standard",
          price: 49.99,
          duration: "3 months",
          features: [
            "Access to advanced gym facilities",
            "Full range of workout equipment",
            "Locker room and shower access",
            "Personalized fitness assessment"
          ]
        },
        {
          id: 3,
          membership_type: "Premium",
          price: 79.99,
          duration: "6 months",
          features: [
            "VIP access to all gym facilities",
            "State-of-the-art workout equipment",
            "Luxurious locker room and spa access",
            "Personalized fitness assessment",
            "Monthly one-on-one personal training session"
          ]
        },
        {
          id: 4,
          membership_type: "Corporate",
          price: 99.99,
          duration: "12 months",
          features: [
            "Corporate group membership",
            "Access to advanced gym facilities",
            "Full range of workout equipment",
            "Locker room and shower access",
            "Personalized fitness assessment",
            "Monthly group fitness classes"
          ]
        }
      ];
      
      
    return (
        <div className='mt-5'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-center mb-5'>Best Prices in the town</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;