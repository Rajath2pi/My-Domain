import ContentCard from "@/app/widget/card";
import { staticDataController } from "@/assets/controllers/staticDataController";
import { CardButtonData } from "@/assets/modals/CardButtonData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Skills = {
  skillDomain: string;
  skillKeys: CardButtonData[];
};

export default async function Skills() {
  const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(
      `./src/assets/lib/profileInfo.json`
    );

  return (
    <section className="bg-slate-300 overflow-hidden py-12 px-6 md:px-12 bg-[url('/images/banner/skills-bg.png')] bg-cover bg-center">
      {/* Heading */}
      <h1 className="text-blue-200 text-shadow-2xs text-shadow-sky-100 text-4xl md:text-6xl font-bold text-center mb-6 mt-10">
        My Skills
      </h1>
      <p className="text-gray-100 text-base md:text-xsl text-center max-w-3xl mx-auto mb-12">
        Here are some of the <span className="font-semibold text-red-500 text-2xl">skills</span> I have learned and applied in my{" "}
        <span className="font-semibold text-blue-100 text-2xl"> 3 years</span> of
        professional experience.
      </p>

      {/* Skills Grid */}
      <div className="mx-5">
        <Carousel>
          <CarouselContent>
            {data?.skills?.map((skill: Skills, index: number) => (
              <CarouselItem className="md:basis-1/3">
                <ContentCard
                  key={`skill_${index}`}
                  heading={skill.skillDomain}
                  subHeading={undefined}
                  content={{
                    type: "button",
                    description: undefined,
                    buttonData: skill.skillKeys,
                  }}
                  classname="bg-gray-700 bg-opacity-70 text-gray-300 rounded-xl shadow-md hover:shadow-lg transition"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
