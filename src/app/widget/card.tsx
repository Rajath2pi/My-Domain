'use client';
import { CardButtonData } from "@/assets/modals/CardButtonData"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function ContentCard(props: {
    classname: string,
    heading: string,
    subHeading: string | undefined,
    content: {
        description: Array<string> | undefined,
        type: string,
        buttonData: Array<CardButtonData> | undefined;
    }
}) {

    const [buttonData, setButtonData] = useState<Array<CardButtonData>>();
    useEffect(() => {
        if (props.content.type == 'button') {
            setButtonData(props.content.buttonData)
        }
    }, [props.content.buttonData])


    return (
        <>
            <div className={props.classname + " card rounded-2xl"}>
                <div className={" card-body"}>
                    {(props && props.heading) && <h1 className="text-2xl flex justify-center pb-3">{props.heading}</h1>}
                    <hr className="w-100 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
                    <div className="max-h-80 overflow-y-auto scrollbar-hide">
                        {props?.subHeading && <h1 className="text-2xl text-slate-700 mb-2 italic">{props.subHeading}</h1>}
                        {(props && props?.content?.type == 'text') && props?.content?.description && props?.content?.description.map((item: string, index: number) => (
                            <p className="card-text text-xl text-wrap font-thin leading-10">{item}</p>
                        ))}
                    </div>

                    {props?.content?.type === "button" &&
                        buttonData?.map((button, index) => (
                            <div key={button.key + "_" + index} className="inline-flex items-center gap-2">
                                <div className="flex m-2">
                                    <a href={button.route} className="btn btn-dark text-white text-sm" target="_blank">
                                        {button.image && (
                                            <Image className="m-auto" width={30} height={20} src={button.image} alt={button.key + "_" + index} />
                                        )}{button.key}
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
                {/* <div className="inline-flex items-center justify-center">
                    <Image width={30} height={30} src={'/images/icons/icons8-expand-down-arrow-40.png'} alt={"_scroll down arrow"} />
                </div> */}
            </div>
        </>
    )
}