import { WorkExperienceData } from "@/assets/modals/WorkExperienceData";
import Image from "next/image";

export default function CompanyExperience({
  workData,
  index,
}: {
  workData: WorkExperienceData;
  index: number;
}) {
  if (!workData) return <p>No Data</p>;

  const isEven = index % 2 === 0;

  return (
    <>
      {/* Left Column (Company Info) */}
      <div
        className={`col-md-6 ${
          isEven ? "" : "bg-slate-400 md:rounded-r-3xl"
        }`}
      >
        <div className="my-10 flex justify-center max-[450px]:ml-5">
          {workData.companyLogo && (
            <Image
              className="rounded-full"
              width={120}
              height={100}
              src={workData.companyLogo}
              alt={`${workData.companyName}_logo`}
            />
          )}
          <div
            className={`m-2 ${
              isEven ? "text-slate-800" : "text-white"
            } max-[450px]:text-lg text-2xl`}
          >
            {workData.companyName}
            <br />
            {workData.place}
            <br />
            <p className="text-sm">{workData.workType}</p>
            <p className="text-sm">{workData.totalWorkingYears}</p>
          </div>
        </div>
        <hr className="mx-10 text-white" />
      </div>

      {/* Right Column (Designations + Roles) */}
      <div
        className={`col-md-6 ${
          isEven
            ? "md:bg-slate-400 md:rounded-l-3xl"
            : "max-[640px]:bg-slate-400 md:rounded-l-3xl"
        }`}
      >
        <div className="m-12">
          <div className="m-2">
            {/* Designations */}
            {workData.designations?.map((desig, i) => (
              <div key={`designation_${i}`}>
                <h3 className="text-slate-800 text-2xl">
                  {desig.designationName}
                </h3>
                <p
                  className={`text-sm leading-6 italic ${
                    isEven
                      ? "md:text-gray-100"
                      : "md:text-slate-600 max-[640px]:text-gray-100"
                  }`}
                >
                  {desig.servedTime}
                </p>
                <hr className="text-white my-2" />
              </div>
            ))}

            {/* Roles and Responsibilities */}
            <h3 className="text-slate-600 text-2xl mt-4">
              Roles and Responsibilities:
            </h3>
            <ul
              className={`text-sm list-disc my-2 ml-5 leading-6 text-justify ${
                isEven
                  ? "md:text-slate-100"
                  : "text-slate-600 max-[640px]:text-gray-100"
              }`}
            >
              {workData.rolesAndResponsibilities?.map((role, i) => (
                <li key={`role_${i}`}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="m-10 text-white" />
      </div>
    </>
  );
}
