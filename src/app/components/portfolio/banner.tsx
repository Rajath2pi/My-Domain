'use server';
import Image from "next/image"
import HtmlIcon from "@/assets/Images/icons/icons8-html-5-48.png";
import CssIcon from "@/assets/Images/icons/icons8-css-48.png";
import JsIcon from "@/assets/Images/icons/icons8-javascript-48.png";
import AngularIcon from "@/assets/Images/icons/icons8-angular-48.png";
import ReactIcon from "@/assets/Images/icons/icons8-react-80.png";
import VsCodeIcon from "@/assets/Images/icons/icons8-visual-studio-code-2019-48.png";
import ProfileImage from "@/assets/Images/profile-image.jpg";
import { staticDataController } from "@/assets/controllers/staticDataController";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Profile = {
    profileName: string,
    jobTitle: string,
    skillsImages: Array<string>,
    profileImage: string
}

export default async function BannerLayout() {

    const { statusCode, data, statusMessage } = await staticDataController.fetchStaticData(`./src/assets/lib/profileInfo.json`);

    return (
        <>
            {data &&
                <div className="row bg-slate-600 overflow-hidden mt-14">
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 p-5">
                        <h1 className="banner-text text-blue-200 text-7xl lg:text-8xl">
                            {data?.profileName}
                        </h1>
                        <h3 className="text-gray-200 banner-text pt-2 pb-2 text-3xl">
                            {data?.jobTitle}
                        </h3>
                        <hr className="text-white"></hr>
                        <div className="flex space-x-6 pt-5 ">
                            {
                               data?.skillsImages.map((imageUrl: string, index: number) => (
                                <div key={imageUrl+"_"+index}>
                                    <Image width="48" height="48" src={imageUrl} alt={imageUrl+"-icon"} />
                                </div>
                               )) 
                            }
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 xs:hidden mr-0 pr-0">
                        <div className="">
                            <Image width={600} height={500} className="profile-image" src={data.profileImage} alt='_profile-image' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}