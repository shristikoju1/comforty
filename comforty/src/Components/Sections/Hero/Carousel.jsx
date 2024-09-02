import { useState } from "react";
import SliderLeft from "../../../assets/svg/slider-left.svg?react";
import SliderRight from "../../../assets/svg/slider-right.svg?react";

export default function Carousel({ children: heroData }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? heroData.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === heroData.length - 1 ? 0 : curr + 1));

    return (
        <div className="relative overflow-hidden">
            <div
                className="relative z-10 flex transition-transform duration-500 ease-out "
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {heroData}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="z-10 p-1 bg-white rounded-full xt-gray-800 shadow-80 hover:bg-white"
                >
                    
                    <SliderLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="z-10 p-1 text-gray-800 bg-white rounded-full shadow-80 hover:bg-white"
                >
                    <SliderRight size={40} />
                </button>
            </div>

            <div className="left-0 right-0 bg-green-500  bottom-4 z-200">
                <div className="flex items-center justify-center gap-2">
                    {heroData.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-black rounded-full ${
                                curr === i ? 'p-2' : 'bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
