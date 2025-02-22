import React, { useEffect, useRef, useState } from 'react';
import sunglass from "../../assets/images/sunglass.png";
import sunglasss2 from "../../assets/images/sunglasss2.png";
import screenglasses from "../../assets/images/screenglasses.png";
import contact from "../../assets/images/contact.png";
import powersunglass from "../../assets/images/powersunglass.png";
import power from "../../assets/images/zeropower.png";

export default function CreateCard() {
    const card = [
        { img: sunglass, data: "Eyeglasses" },
        { img: sunglasss2, data: "Sunglasses" },
        { img: screenglasses, data: "Screenglasses" },
        { img: contact, data: "Contact lenses" },
        { img: powersunglass, data: "Power sunglasses" },
        { img: power, data: "Zero power Glasses" },
    ];

    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollInterval;

        if (scrollContainer) {
            const scroll = () => {
                if (!isHovered) {
                    scrollContainer.scrollLeft += 1;
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                        scrollContainer.scrollLeft = 0;
                    }
                }
            };
            scrollInterval = setInterval(scroll, 10);
        }

        return () => clearInterval(scrollInterval);
    }, [isHovered]);

    return (
        <div
            className="flex overflow-hidden whitespace-nowrap px-5 pt-5 mt-15"
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {[...card, ...card].map((value, index) => (
                <div key={index} className="h-[320px] w-[300px] mx-2 rounded-md bg-slate-50 p-2 shadow-md border border-gray-400 flex-shrink-0">
                    <div className="flex h-[130px] w-full bg-white rounded-md overflow-hidden">
                        <img src={value.img} alt={value.data} className="w-full h-full object-contain" />
                    </div>
                    <div className="pt-2 text-center text-gray-700 font-semibold">{value.data}</div>
                </div>
            ))}
        </div>
    );
}
