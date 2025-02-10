import ContentCard from "@/app/widget/card";
import { staticDataController } from "@/assets/controllers/staticDataController";
import { CardButtonData } from "@/assets/modals/CardButtonData";

type Skills = {
    skillDomain: string,
    skillKeys: Array<CardButtonData>
}

export default async function Skills() {
    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            <div className="bg-slate-500 overflow-hidden mt-14">
                <h1 className="text-blue-300 text-6xl flex justify-center mt-10">MY SKILLS</h1>
                <p className="text-white flex md:justify-center text-center m-10">
                    Here are some of my skills that i have learnt in my 2+ years of experience
                </p>
                <div className="row text-white">
                    {data && data?.skills?.map((skill: Skills, index: number) =>
                        <div key={"skill_"+index} className="col-md-6 col-sm-12 col-xs-12 ">
                            <ContentCard heading={skill.skillDomain} subHeading={undefined} content={{type:'button', description: undefined, buttonData : skill.skillKeys}} classname="bg-slate-400 mx-2 my-3"/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}