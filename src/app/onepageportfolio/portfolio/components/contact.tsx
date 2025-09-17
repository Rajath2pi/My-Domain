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
            <div className="relative max-h-screen mt-5 row max-[510px]:h-screen bg-slate-300">
                <div className="col-12 h-80 bg-slate-400 relative z-10 p-10">
                    <h1 className="text-blue-500 text-6xl ml-5 mt-10">Get in touch</h1>
                    <p className="text-gray-700 text-lg ml-5 mt-4 max-w-96">
                        Want to get in touch with me, Go through the contact details below.
                    </p>
                </div>

                <div className="col-6 bg-slate-500 rounded-full absolute top-5 right-5 transform translate-x z-20 h-80 max-[750px]:hidden">
                    <div className="mt-5 ml-20 flex">
                        <Image className="" width={350} height={300} src={'/images/appcontent/business-hand-shake.png'} alt={'_hand-shake'} />
                        <h2 className="mt-20 text-gray-100 text-3xl">Hello there...</h2>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-wrap gap-4 relative max-w-full justify-center md:my-20 max-[770px]:my-10">
                        {data?.contact && data.contact.map((contactDetails: any, index: number) => {
                            const colors = ["bg-blue-300", "bg-gray-300", "bg-green-100", "bg-red-100", "bg-purple-100"];
                            const colorClass = colors[index % colors.length]; // Ensure safe modulo operation

                            return (
                                <ContentCard
                                    key={`contact_${index}`}
                                    classname={`text-center min-w-40 max-h-fit ${colorClass}`}
                                    heading={contactDetails.key}
                                    subHeading={undefined}
                                    content={{ type: "button", description: undefined, buttonData: [contactDetails] }}
                                />
                            );
                        })}
                        {/* <ContentCard classname="text-center min-w-40 max-h-fit bg-blue-300" heading={data.contact[0].key} subHeading = {undefined} content={{ type: "button",  description: undefined, buttonData: [data.contact[0]] }} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-gray-300" heading={data.contact[1].key} subHeading = {undefined} content={{ type: "button", description: undefined, buttonData: [data.contact[1]]}} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-green-100" heading={data.contact[2].key} subHeading = {undefined} content={{ type: "button",  description: undefined, buttonData: [data.contact[2]] }} /> */}
                        {/* <ContentCard classname="text-center min-w-40 max-h-fit bg-red-100" heading={data.contact[2].key} content={{ type: "button", buttonData: [data.contact[2]] }} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-purple-100" heading={data.contact[2].key} content={{ type: "button", buttonData: [data.contact[2]] }} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}