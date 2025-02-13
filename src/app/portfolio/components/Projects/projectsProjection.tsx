'use client';
import CollapsableSideNav from "@/app/widget/collapsableSideNav";
import ContentCard from "@/app/widget/card";
import { useState } from "react";

export default function ProjectsProjection(props: { data: any }) {

    const [selectedProject, setSelectedProject] = useState(props.data.projects[0])

    function captureData(data: any) {
        setSelectedProject(data)
    }


    return (
        <>
            <div className="mt-14">

                <div className="bg-slate-600 p-10">
                    <h2 className="text-blue-200 text-3xl leading-snug">Projects Are Key Part Of Job</h2>
                    <h2 className="text-blue-100 text-6xl leading-snug">Creativity Is Containers To Hold Jobs</h2>
                    <h3 className="pl-10 pt-2 text-blue-300 text-2xl"></h3>
                </div>
                <div className="h-screen flex">
                    {props?.data && props?.data?.projects &&
                        <CollapsableSideNav navContents={props.data.projects} emitSelectedData={(data) => captureData(data)} />
                    }
                    <div className=" w-full absolute">
                        <div className="m-3">
                            {
                                selectedProject && <ContentCard classname="md:m-10 xl:m-10 bg-slate-300 " heading={selectedProject.title} subHeading={selectedProject.subTitle} content={{ description: selectedProject.description, type: 'text', buttonData: undefined }}></ContentCard>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}