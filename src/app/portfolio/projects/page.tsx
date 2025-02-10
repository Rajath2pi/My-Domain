'use server';
import CollapsableSideNav from "@/app/widget/collapsableSideNav";
import ContentCard from "@/app/widget/card";
import { staticDataController } from "@/assets/controllers/staticDataController";
import ProjectsProjection from "@/app/components/Projects/projectsProjection";

export default async function Projects() {

    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData('./src/assets/lib/profileInfo.json');

   

    return (
        <>
            <ProjectsProjection data={data} />
        </>
    )
}