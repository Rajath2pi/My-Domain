import { WorkExperienceData } from "@/assets/modals/WorkExperienceData"
import Image from "next/image"

export default function CompanyExperience(props:{workData : WorkExperienceData, index : number}) {


    return (
        <>{
            !props.workData && <p>No Data</p>
            }
            <div className={`col-md-6 ${props.index/2 == 0 ? '' : 'bg-slate-400 md:rounded-r-3xl'}`}>
                <div className="my-10 justify-center flex max-[450px]:ml-5">
                    {props.workData.companyLogo && <Image className="rounded-full" width={120} height={100} src={props.workData.companyLogo} alt={'company_logo'} />}
                    <div className={`m-2 ${props.index/2 == 0 ? 'text-slate-800' : 'text-white'} max-[450px]:text-lg text-2xl`}>
                        {props.workData.companyName}<br></br> {props.workData.place}<br></br>
                        <p className="text-sm">{props.workData.workType}</p>
                        <p className="text-sm">{props.workData.totalWorkingYears}</p>
                    </div>
                </div>
                <hr className="mx-10 text-white"></hr>
            </div>
            <div className={`col-md-6 ${props.index/2 != 0 ? 'max-[640px]:bg-slate-400 md:rounded-l-3xl' : 'md:bg-slate-400 md:rounded-l-3xl'}`}>
                <div className="m-12">
                    <div className="m-2">
                        {props && props?.workData.designations && props.workData?.designations.map(desig => (
                            <div>
                                <h3 className="text-slate-800 text-2xl">{desig.designationName}</h3>
                                <p className={`text-sm list-disc leading-6 ${props.index/2 != 0 ? 'md:text-slate-600 max-[640px]:text-gray-100' : 'md:text-gray-100'}  italic`}>{desig.servedTime}</p>
                                <hr className="text-white my-2"></hr>
                            </div>
                        ))}
                        <h3 className="text-slate-600 text-2xl">Roles and Responsibilities:</h3>

                        <ul className={`text-sm list-disc my-2 ml-5 ${props.index/2 != 0 ? 'text-slate-600 max-[640px]:text-gray-100' : 'md:text-slate-100'} leading-6 text-justify`}>
                            {props && props?.workData.rolesAndResponsibilities && props?.workData.rolesAndResponsibilities?.map(role => (
                                <li>{role}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr className="m-10 text-white"></hr>
            </div>
        </>
    )
}