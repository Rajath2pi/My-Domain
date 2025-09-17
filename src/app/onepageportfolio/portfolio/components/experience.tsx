'use server'

import CompanyExperience from "./Experience/companyexperience";
import { staticDataController } from "@/assets/controllers/staticDataController";
import { WorkExperienceData } from "@/assets/modals/WorkExperienceData";
import Image from "next/image";

export default async function Experience() {
  const { data } = await staticDataController.fetchStaticData(
    `./src/assets/lib/profileInfo.json`
  );

  return (
    <section className="bg-slate-400 md:py-10">
      {/* Intro Section */}
      <div className="row">
        <div className="bg-slate-500 md:pt-10 col-md-6 md:rounded-r-full flex items-center">
          <div className="m-10">
            <h2 className="text-white text-xl">Wanna know my journey?</h2>
            <h3 className="text-blue-200 mt-6 text-4xl md:text-5xl leading-snug">
              Well, you can find it below
            </h3>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 hidden md:flex justify-center items-center">
          <Image
            className="mt-10"
            width={400}
            height={300}
            src="/images/appcontent/experience1.jpg"
            alt="experience illustration"
          />
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="row mt-10">
        {data?.workExperienceData?.map(
          (workED: WorkExperienceData, index: number) => (
            <CompanyExperience
              key={`work_${index}`}
              workData={workED}
              index={index}
            />
          )
        )}
      </div>
    </section>
  );
}
