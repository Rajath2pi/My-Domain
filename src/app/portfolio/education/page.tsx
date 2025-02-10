import { staticDataController } from "@/assets/controllers/staticDataController";


export default async function Education() {

    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            <div className="mt-14 row">
                <div className="col-md-6 right-0">
                    <video className="rounded-lg" autoPlay
                        loop
                        muted
                        playsInline>
                        <source src="/education.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {data && data?.education && data?.education?.map((education: {
                    specialization: string,
                    Collage: string,
                    place: string,
                    graduateYear: string
                }, index: number) => (
                    <div className="col-md-6 bg-slate-200">
                        <div className="m-8">
                            <h3 className="text-3xl text-slate-400">Im an Graduate</h3>
                            <h2 className="text-5xl text-blue-400 my-2">{education.specialization}</h2>
                            <h3 className="text-2xl text-slate-400">Completed on {education.graduateYear} from</h3>
                            <h2 className="text-3xl text-slate-500 my-2">{education.Collage}, {education.place}</h2>
                            <p></p>
                        </div>

                    </div>

                ))}

            </div >
        </>
    )
}