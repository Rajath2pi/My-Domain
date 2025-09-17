import { staticDataController } from "@/assets/controllers/staticDataController";

export default async function Education() {
  const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(
    "./src/assets/lib/profileInfo.json"
  );

  return (
    <section className="container mx-auto px-4">
      <div className="row items-center">
        {/* Video Section */}
        <div className="col-md-6 flex justify-center">
          <video
            className="w-full max-w-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/education.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Education Section */}
        {data?.education?.map(
          (
            education: {
              specialization: string;
              Collage: string;
              place: string;
              graduateYear: string;
            },
            index: number
          ) => (
            <div
              key={index}
              className="col-md-6 bg-slate-200 rounded-2xl shadow-md p-8 mt-6 md:mt-0 xs:mb-10"
            >
              <h3 className="text-xl text-gray-500 font-medium mb-2">
                I&apos;m a Graduate
              </h3>
              <h2 className="text-4xl font-bold text-blue-500 mb-3">
                {education.specialization}
              </h2>
              <h3 className="text-lg text-gray-600 font-medium">
                Completed in <span className="font-semibold">{education.graduateYear}</span> from
              </h3>
              <h2 className="text-2xl text-gray-700 font-semibold mt-2">
                {education.Collage}, {education.place}
              </h2>
            </div>
          )
        )}
      </div>
    </section>
  );
}
