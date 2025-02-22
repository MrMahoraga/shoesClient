import React from 'react'
import { Link } from 'react-router-dom';


export default function AllProduct() {

    const data = [
        {
            img: "https://docs.material-tailwind.com/img/team-1.jpg",
            name: "John Doe",
            position: "Software Engineer",
            facebook: "#facebook",
            twitter: "#twitter",
            instagram: "#instagram"
        },
        {
            img: "https://docs.material-tailwind.com/img/team-2.jpg",
            name: "Jane Smith",
            position: "Product Manager",
            facebook: "#facebook",
            twitter: "#twitter",
            instagram: "#instagram"
        },
        {
            img: "https://docs.material-tailwind.com/img/team-3.jpg",
            name: "Natalie Paisley",
            position: "CEO / Co-Founder",
            facebook: "#facebook",
            twitter: "#twitter",
            instagram: "#instagram"
        },
        {
            img: "https://docs.material-tailwind.com/img/team-3.jpg",
            name: "Natalie Paisley",
            position: "CEO / Co-Founder",
            facebook: "#facebook",
            twitter: "#twitter",
            instagram: "#instagram"
        }
    ];

    return (
        <div>
            <div>
                <h1 className="text-center text-5xl font-bold mb-8">All Products</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {data.map(({ img, name, position }, key) => (
                    <div key={key} className="flex justify-center">
                        <div className="flex flex-col items-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 m-4 p-6 rounded-xl w-60">
                            <img src={img} alt={name} className="rounded-md h-50 w-50 object-cover" />
                            <h1 className="text-center text-lg font-semibold mt-4">{name}</h1>
                            <h2 className="text-center text-gray-600">{position}</h2>
                            <h2 className="text-center text-gray-600">₹8,000</h2>
                            <Link to="/CardView">
                                <button className='bg-blue-400 px-5 rounded-sm mt-2'>Click</button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}