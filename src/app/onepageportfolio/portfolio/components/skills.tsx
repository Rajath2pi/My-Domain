import ContentCard from "@/app/widget/card";
import { staticDataController } from "@/assets/controllers/staticDataController";
import { CardButtonData } from "@/assets/modals/CardButtonData";

type Skills = {
  skillDomain: string;
  skillKeys: CardButtonData[];
};

export default async function Skills() {
  const { statusCode, data, statusMessage } =
    await staticDataController.fetchStaticData(
      `./src/assets/lib/profileInfo.json`
    );

  return (
    <section className="bg-slate-300 overflow-hidden py-12 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-blue-400 text-4xl md:text-6xl font-bold text-center mb-6">
        My Skills
      </h1>
      <p className="text-gray-500 text-base md:text-lg text-center max-w-3xl mx-auto mb-12">
        Here are some of the <span className="font-semibold text-red-500 text-2xl">skills</span> I have learned and applied in my{" "}
        <span className="font-semibold text-blue-600 text-2xl"> 3 years</span> of
        professional experience.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.skills?.map((skill: Skills, index: number) => (
          <ContentCard
            key={`skill_${index}`}
            heading={skill.skillDomain}
            subHeading={undefined}
            content={{
              type: "button",
              description: undefined,
              buttonData: skill.skillKeys,
            }}
            classname="bg-slate-400 rounded-xl shadow-md hover:shadow-lg transition"
          />
        ))}
      </div>
    </section>
  );
}
