import { FaCheck } from "react-icons/fa6";
const PriceOption = ({option}) => {
    const {membership_type, price, duration, features} = option;
    return (
        <div className="flex flex-col gap-4 justify-between p-4 border border-gray-600 rounded-xl">
            <div>
                <h2 className="text-center">
                    <span className="text-2xl md:text-5xl font-semibold">{price}</span>
                    <span className="text-lg md:text-xl italic font-semibold">/ {duration}</span>
                </h2>
                <h4 className="text-lg md:text-2xl font-medium text-center mt-3">{membership_type}</h4>
                <ul className=" flex flex-col gap-1 mt-4">
                    {
                        features.map((feature, index) => <li key={index} className="flex gap-2 items-center"><FaCheck /> <span>{feature}</span></li>)
                    }
                </ul>
            </div>
            <button className="btn btn-primary">Get Start</button>
        </div>
    );
};



export default PriceOption;