import Image from "next/image"

export default function Footer(){

    return(
        <>
        <div className="bg-slate-900 bottom-0 row">
            <div className="text-white col-6 flex">
                <Image className="m-2 absolute" width={30} height={30} src={'/images/icons/icons8-india-48.png'} alt={'_footer_linkedin'}/>
                <p className="m-2 absolute left-9">Made In India @2025</p>
            </div>
            <div className=" col-6">
                <Image className="float-right m-2 cursor-pointer" width={30} height={30} src={'/images/icons/icons8-linkedin-48.png'} alt={'_footer_linkedin'}/>
                <Image className="float-right m-2 cursor-pointer" width={30} height={30} src={'/images/icons/icons8-instagram-logo-94.png'} alt={'_footer_linkedin'}/>
                <Image className="float-right m-2 cursor-pointer" width={30} height={30} src={'/images/icons/icons8-git-48.png'} alt={'_footer_linkedin'}/>
            </div>
        </div>
        </>
    )
}