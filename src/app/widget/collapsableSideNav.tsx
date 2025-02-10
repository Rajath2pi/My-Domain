'use client';
import Image from "next/image";
import { useState } from "react";

export default function CollapsableSideNav(props: { navContents: Array<any>, emitSelectedData: (data: any) => void }) {
    const [openNav, setNavToggle] = useState(false);
    const [translateValue, setTranslateValue] = useState<number>(0);
    const [activeNavIndex, setActiveNavIndex] = useState(0)

    function handleNavState() {
        setNavToggle((prev) => !prev);
    }

    function translateDown() {
        setTranslateValue((prev) => {
            const maxScrollUp = -((props.navContents.length - 4) * 60);
            return Math.max(prev - 60, maxScrollUp); // Prevent scrolling beyond limit
        });
    }

    function translateUp() {
        setTranslateValue((prev) => Math.min(prev + 60, 0)); // Prevent excessive upward scrolling
    }

    return (
        <div className={`my-4 bg-slate-500 rounded-r-3xl z-10 sticky top-1/3 opacity-80 p-2 ${openNav ? 'w-14 h-28' : 'w-80 h-fit'}`}>
            {/* Collapse Up */}
            {!openNav && props.navContents.length > 4 && (
                <Image 
                    className="absolute left-1/3 top-0 z-10 cursor-pointer" 
                    width={40} height={30} 
                    src={'/images/icons/icons8-collapse-arrow-64.png'} 
                    alt="collapse_up" 
                    onClick={translateUp} 
                />
            )}

            {/* Navigation Items */}
            <div className="h-fit overflow-hidden my-4">
                {props.navContents.map((item, index) => (
                    <div 
                        key={item.id || index} 
                        className={`overflow-hidden text-center h-10 w-60 p-2 m-3 rounded-full opacity-100
                            transform transition-transform duration-500 ease-in-out ${openNav ? 'hidden' : ''} ${activeNavIndex == index ? 'bg-blue-200': 'bg-white'}`}
                        style={{ transform: `translateY(${translateValue}px)` }} 
                        onClick={() => {props.emitSelectedData(item);setActiveNavIndex(index)}}
                    >
                        <p className="cursor-pointer text-sm">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Collapse Down */}
            {!openNav && props.navContents.length > 4 && (
                <Image 
                    className="absolute left-1/3 bottom-0 z-10 cursor-pointer" 
                    width={40} height={30} 
                    src={'/images/icons/icons8-expand-arrow-64.png'} 
                    alt="collapse_down" 
                    onClick={translateDown} 
                />
            )}

            {/* Collapse / Expand Toggle */}
            <Image 
                className="absolute z-10 right-0 top-1/2 cursor-pointer" 
                width={30} height={30} 
                src={openNav ? '/images/icons/icons8-expand-arrow-40.png' : '/images/icons/icons8-collapse-arrow-40.png'} 
                alt={openNav ? 'expand_right' : 'collapse_left'} 
                onClick={handleNavState} 
            />
        </div>
    );
}
