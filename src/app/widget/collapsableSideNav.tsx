'use client';

import Image from "next/image";
import { useState } from "react";

type NavItem = {
  id?: string | number;
  title: string;
  [key: string]: any; // allows extra properties
};

export default function CollapsableSideNav(props: {
  navContents: NavItem[];
  emitSelectedData: (data: NavItem) => void;
}) {
  const [openNav, setOpenNav] = useState(false);
  const [translateValue, setTranslateValue] = useState<number>(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const itemHeight = 60; // height per nav item
  const visibleItems = 4; // max items visible at once

  function handleNavState() {
    setOpenNav((prev) => !prev);
  }

  function translateDown() {
    const maxScrollUp = -((props.navContents.length - visibleItems) * itemHeight);
    setTranslateValue((prev) => Math.max(prev - itemHeight, maxScrollUp));
  }

  function translateUp() {
    setTranslateValue((prev) => Math.min(prev + itemHeight, 0));
  }

  return (
    <div
      className={`relative my-4 bg-slate-500 rounded-r-3xl z-10 sticky top-1/3 opacity-90 p-2 shadow-lg
        transition-all duration-300 ease-in-out 
        ${openNav ? "w-14 h-28" : "w-80 h-fit"}`}
    >
      {/* Collapse Up */}
      {!openNav && props.navContents.length > visibleItems && (
        <Image
          className="absolute left-1/3 top-0 z-10 cursor-pointer"
          width={32}
          height={32}
          src="/images/icons/icons8-collapse-arrow-64.png"
          alt="scroll up"
          onClick={translateUp}
        />
      )}

      {/* Navigation Items */}
      <div className="relative h-fit overflow-hidden my-6">
        {props.navContents.map((item, index) => {
          const isActive = activeNavIndex === index;
          return (
            <div
              key={item.id || index}
              className={`overflow-hidden text-center h-12 w-60 p-2 m-3 rounded-full cursor-pointer
                transform transition-all duration-300 ease-in-out
                ${openNav ? "hidden" : ""} 
                ${isActive ? "bg-blue-400 scale-110 shadow-md" : "bg-white hover:bg-slate-100"}`}
              style={{ transform: `translateY(${translateValue}px)` }}
              onClick={() => {
                props.emitSelectedData(item);
                setActiveNavIndex(index);
              }}
            >
              <p
                className={`truncate transition-all duration-300 
                  ${isActive ? "text-base font-bold text-white" : "text-sm font-medium text-gray-700"}`}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Collapse Down */}
      {!openNav && props.navContents.length > visibleItems && (
        <Image
          className="absolute left-1/3 bottom-0 z-10 cursor-pointer"
          width={32}
          height={32}
          src="/images/icons/icons8-expand-arrow-64.png"
          alt="scroll down"
          onClick={translateDown}
        />
      )}

      {/* Collapse / Expand Toggle */}
      <Image
        className="absolute z-10 right-0 top-1/2 cursor-pointer -translate-y-1/2"
        width={28}
        height={28}
        src={
          openNav
            ? "/images/icons/icons8-expand-arrow-40.png"
            : "/images/icons/icons8-collapse-arrow-40.png"
        }
        alt={openNav ? "expand right" : "collapse left"}
        onClick={handleNavState}
      />
    </div>
  );
}
