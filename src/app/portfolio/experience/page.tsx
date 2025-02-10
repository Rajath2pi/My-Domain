'use server'
import CompanyExperience from "@/app/components/Experience/companyexperience"
import { staticDataController } from "@/assets/controllers/staticDataController";
import { WorkExperienceData } from "@/assets/modals/WorkExperienceData";
import Image from "next/image"

export default async function Experience() {
    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            <div className="row mt-14">
                <div className="bg-slate-500 md:pt-10  col-md-6 md:rounded-r-full">
                    <div className="m-10">
                        <h2 className="text-white md:mt-14 text-xl">Wanna Know my journey?</h2>
                        <h3 className="text-blue-200 mt-10 text-5xl leading-snug">Well you can find it bellow</h3>
                    </div>
                </div>
                <div className="col-md-6 max-[770px]:hidden">
                    <div className="ml-16">
                        <Image className="mt-10" width={400} height={300} src={'/images/appcontent/experience1.jpg'} alt={'experience_image'} />
                    </div>
                </div>
                {data?.workExperienceData && data.workExperienceData.map((workED: WorkExperienceData, index: number) => (
                    <CompanyExperience workData={workED} index={index} />
                ))}
            </div>
        </>
    )
}