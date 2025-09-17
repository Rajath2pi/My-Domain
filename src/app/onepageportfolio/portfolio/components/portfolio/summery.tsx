import ContentCard from "@/app/widget/card";
import { staticDataController } from "@/assets/controllers/staticDataController";


export default async function Summary() {
  const { data } = await staticDataController.fetchStaticData(
    `./src/assets/lib/profileInfo.json`
  );

  if (!data?.summery) return null;

  return (
    <section className="bg-gray-500 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-blue-200 text-4xl md:text-5xl font-bold text-center mb-8">
          Summary
        </h2>
        <ContentCard
          heading=""
          subHeading={undefined}
          content={{
            type: "text",
            description: [data.summery],
            buttonData: undefined,
          }}
          classname="bg-slate-600 text-blue-100 text-lg leading-relaxed text-center mx-auto p-8 rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}
