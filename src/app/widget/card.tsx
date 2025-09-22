'use client';

import { CardButtonData } from "@/assets/modals/CardButtonData";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContentCard(props: {
  classname: string;
  heading: string;
  subHeading?: string;
  content: {
    description?: string[];
    type: "text" | "button";
    buttonData?: CardButtonData[];
  };
}) {
  const [buttonData, setButtonData] = useState<CardButtonData[]>();

  useEffect(() => {
    if (props.content.type === "button") {
      setButtonData(props.content.buttonData);
    }
  }, [props.content.type, props.content.buttonData]);

  return (
    <div className={`${props.classname} card rounded-2xl shadow-md`}>
      <div className="card-body">
        {/* Heading */}
        {props.heading && (
          <h1 className="text-2xl font-bold text-center pb-3">
            {props.heading}
          </h1>
        )}

        {/* Divider */}
        <hr className="w-full h-[2px] mx-auto my-4 bg-gray-200 border-0 rounded-md md:my-8 dark:bg-gray-700" />

        {/* Content Area */}
        <div className="max-h-80 overflow-y-auto scrollbar-hide px-1">
          {props.subHeading && (
            <h2 className="text-xl text-gray-400 bg-opacity-40 mb-3 italic">
              {props.subHeading}
            </h2>
          )}

          {/* Text Content */}
          {props.content.type === "text" &&
            props.content.description?.map((item, index) => (
              <p
                key={index}
                className="text-lg text-white-700 font-light leading-8 mb-2"
              >
                {item}
              </p>
            ))}
        </div>

        {/* Button Content */}
        {props.content.type === "button" && buttonData?.length ? (
          <div className="flex flex-wrap gap-3 mt-4">
            {buttonData.map((button, index) => (
              <a
                key={`${button.key}_${index}`}
                href={button.route}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg shadow-sm transition"
              >
                {button.image && (
                  <Image
                    src={button.image}
                    width={24}
                    height={24}
                    className="object-contain"
                    alt={`${button.key}_${index}`}
                  />
                )}
                {button.key}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {/* Optional Scroll Down Icon */}
      {/* 
      <div className="flex justify-center mt-4">
        <Image
          width={30}
          height={30}
          src="/images/icons/icons8-expand-down-arrow-40.png"
          alt="scroll down arrow"
        />
      </div> 
      */}
    </div>
  );
}
