import React, {useState} from 'react';
import { FaCheck } from "react-icons/fa";

// import { designToolImg } from '../../assets/toolsIcons';

//  {
//     "id": 1,
//     "name": "AI Writing Pro",
//     "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
//     "price": 29,
//     "period": "monthly",
//     "tagType": "best seller",
//     "features": [
//       "Unlimited AI generations",
//       "50+ writing templates",
//       "Grammar checker"
//     ],
//     "icon": "https://img.icons8.com/color/96/artificial-intelligence.png"
//   }

const Card = ({ product }) => {

    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className={`badge badge-xs p-3 rounded-full ${
                            product.tagType === 'Best Seller' ? 'badge-warning text-amber-700' : 
                            product.tagType === 'Popular' ? 'badge-primary text-indigo-300' : 'badge-success text-green-800'}`}>{product.tagType}</span>
                    </div>
                    <div className='bg-gray-100 p-2 border border-gray-300 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                        <img src={product.icon} alt={product.name} />
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="text-xl">${product.price}/{product.period}</span>
                    <ul className="mt-6 flex flex-col justify-start gap-2 text-xs">
                        {
                            product.features.map((feature) => (
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }

                    </ul>
                    <div className="mt-6">
                        <button onClick={handleAddToCart}

                        className={`btn ${isAdded ? 'btn-success text-white' : 'btn-primary'} btn-block`}>
                            {isAdded ? <FaCheck className='me-1' /> : null}
                            {isAdded ?  'Added to Cart' : 'Buy Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;