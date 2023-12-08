// import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useState } from 'react';
import { BarChart, XAxis, YAxis, Bar, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phonesData = data.data.data;
        const phonesWithFakeData = phonesData.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        setPhones(phonesWithFakeData);
    });

    return (
        <div>
            <h2 className='text-4xl font-bold'>Phones: {phones.length}</h2>

            <div>
                <BarChart width={1200} height={400} data={phones}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip ></Tooltip>
                    <Bar dataKey="price" fill="#8884d8"></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;