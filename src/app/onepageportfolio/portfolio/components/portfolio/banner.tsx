'use server';

import Image from "next/image";
import { staticDataController } from "@/assets/controllers/staticDataController";

export type Profile = {
  profileName: string;
  jobTitle: string;
  skillsImages: Array<string>;
  profileImage: string;
};

export default async function BannerLayout() {
  const { data } = await staticDataController.fetchStaticData(
    `./src/assets/lib/profileInfo.json`
  );

  if (!data) return null;

  return (
    <section className="bg-[url('/images/banner/banner-1.png')] bg-cover bg-center text-white overflow-hidden shadow-xl">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section: Profile Info */}
        <header className="w-full lg:w-1/2 p-6 lg:p-10">
          <h1 className="text-blue-200 text-6xl lg:text-8xl font-bold tracking-tight">
            {data.profileName}
          </h1>
          <h2 className="text-gray-200 mt-4 text-2xl lg:text-3xl font-light">
            {data.jobTitle}
          </h2>

          <hr className="my-6 border-gray-400" />

          {/* Skills Logos */}
          <div className="flex flex-wrap gap-6 mt-6">
            {data.skillsImages.map((imageUrl: string, index: number) => (
              <Image
                key={`${imageUrl}_${index}`}
                width={48}
                height={48}
                src={imageUrl}
                alt={`${data.profileName} skill - ${index + 1}`}
                className="hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </header>

        {/* Right Section: Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-6">
          <Image
            width={440}
            height={450}
            src={data.profileImage}
            alt={`${data.profileName} profile photo`}
            className="rounded-xl shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}
