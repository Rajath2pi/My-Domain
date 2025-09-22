import ContentCard from "@/app/widget/card"
import { staticDataController } from "@/assets/controllers/staticDataController";
import Image from "next/image"

export default async function ContactMe() {
    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);


    function getBgColor(index: number, total: number) {
        switch (total % index) {
            case 1:
                return 'bg-blue-300';
            case 2:
                return 'bg-gray-300';
            case 3:
                return 'bg-green-100';
            case 4:
                return 'bg-red-100';
            case 5:
                return 'ba-purple-100';
            default: return 'bg-white';
        }
    }

    return (
        <>
            <div className="relative max-h-fit row max-[510px]:h-screen ">
                <div className="col-12 h-80 relative z-10 p-10">
                    <h1 className="text-gray-200 text-5xl ml-5 mt-10">Get in touch</h1>
                    <p className="text-gray-400 text-lg ml-5 mt-4 max-w-96 ">
                        Want to get in touch with me, Go through the contact details below.
                    </p>
                </div>

                <div className="col-6 bg-gray-900 bg-opacity-50 rounded-full absolute top-5 right-5 transform translate-x z-20 h-40 max-[750px]:hidden" >

                    <div className="mt-5 ml-20 flex ">
                        <Image className="" width={250} height={100} src={'/images/appcontent/business-hand-shake.png'} alt={'_hand-shake'} />
                        <h2 className=" text-gray-100 text-3xl">Hello there...</h2>
                    </div>
                </div>
                <div className="flex gap-4 justify-center">
                    {data?.contact && data.contact.map((contactDetails: any, index: number) => {
                        const colors = ["bg-blue-300", "bg-red-100", "bg-gray-300", "bg-green-100", "bg-purple-100"];
                        const colorClass = colors[index % colors.length]; // Ensure safe modulo operation

                        return (
                            <ContentCard
                                key={`contact_${index}`}
                                classname={`text-center min-w-40 max-h-fit ${colorClass} bg-opacity-70`}
                                heading={contactDetails.key}
                                subHeading={undefined}
                                content={{ type: "button", description: undefined, buttonData: [contactDetails] }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}