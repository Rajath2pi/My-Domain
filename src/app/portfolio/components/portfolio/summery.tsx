import { staticDataController } from "@/assets/controllers/staticDataController";
import ContentCard from "../../../widget/card";


export default async function Summery() {

    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            <div className="bg-gray-500 py-10">
                <ContentCard heading="Summary:" subHeading="" content={{type:'text', description : [data.summery], buttonData : undefined}} classname=" bg-slate-600 text-blue-100  text-center mx-4"/>
            </div>
        </>
    )
}