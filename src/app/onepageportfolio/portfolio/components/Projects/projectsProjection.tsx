'use client';

import CollapsableSideNav from "@/app/widget/collapsableSideNav";
import ContentCard from "@/app/widget/card";
import { useState } from "react";

export default function ProjectsProjection(props: { data: any }) {
  const [selectedProject, setSelectedProject] = useState(
    props.data.projects[0]
  );

  function captureData(data: any) {
    setSelectedProject(data);
  }

  return (
    <section className="bg-[url('/images/banner/summary-banner.png')] bg-cover bg-center">
      {/* Header Section */}
      <div className="p-10  shadow-md">
        <h2 className="text-blue-200 text-3xl font-semibold leading-snug">
          Projects Are a Key Part of Any Job
        </h2>
        <h2 className="text-blue-100 text-5xl md:text-6xl font-bold leading-snug mt-3">
          Creativity Builds the Containers That Hold Jobs
        </h2>
        <h3 className="pl-10 pt-4 text-blue-300 text-xl md:text-2xl italic">
          {/* Optional subtitle or description can go here */}
        </h3>
      </div>

      {/* Main Content */}
      <div className="h-screen flex relative">
        {/* Side Navigation */}
        {props?.data?.projects && (
          <CollapsableSideNav
            navContents={props.data.projects}
            emitSelectedData={captureData}
          />
        )}

        {/* Project Details */}
        <div className="flex-1 absolute top-0">
          <div className="m-4 md:m-8 lg:m-10">
            {selectedProject && (
              <ContentCard
                classname="bg-gray-800 text-gray-400 bg-opacity-90"
                heading={selectedProject.title}
                subHeading={selectedProject.subTitle}
                content={{
                  description: selectedProject.description,
                  type: "text",
                  buttonData: undefined,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
