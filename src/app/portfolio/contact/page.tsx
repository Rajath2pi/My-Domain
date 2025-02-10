import ContentCard from "@/app/widget/card"
import { staticDataController } from "@/assets/controllers/staticDataController";
import Image from "next/image"

export default async function ContactMe() {
const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            <div className="relative mt-0 row">
                <div className="col-12 h-80 mt-10 bg-slate-600 relative z-10 p-10">
                    <h1 className="text-blue-300 text-6xl ml-5 mt-10">Get in touch</h1>
                    <p className="text-gray-300 ml-5 mt-4 max-w-96">
                        Want to get in touch with me, Go through the contact details below.
                    </p>
                </div>

                <div className="col-6 bg-slate-500 rounded-full absolute top-10 right-0 transform translate-x z-20 h-80 max-[750px]:hidden">
                    <div className="mt-5 ml-20 flex">
                        <Image className="" width={350} height={300} src={'/images/appcontent/business-hand-shake.png'} alt={'_hand-shake'} />
                        <h2 className="mt-20 text-gray-100 text-3xl">Hello there...</h2>
                    </div>
                </div>
                <div className="bg-slate-500">
                    <div className="flex flex-wrap gap-4 relative max-w-full justify-center md:my-20 max-[770px]:my-10">
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-blue-300" heading={data.contact[0].key} subHeading = {undefined} content={{ type: "button",  description: undefined, buttonData: [data.contact[0]] }} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-gray-300" heading={data.contact[1].key} subHeading = {undefined} content={{ type: "button", description: undefined, buttonData: [data.contact[1]]}} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-green-100" heading={data.contact[2].key} subHeading = {undefined} content={{ type: "button",  description: undefined, buttonData: [data.contact[2]] }} />
                        {/* <ContentCard classname="text-center min-w-40 max-h-fit bg-red-100" heading={data.contact[2].key} content={{ type: "button", buttonData: [data.contact[2]] }} />
                        <ContentCard classname="text-center min-w-40 max-h-fit bg-purple-100" heading={data.contact[2].key} content={{ type: "button", buttonData: [data.contact[2]] }} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}