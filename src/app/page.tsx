// app/page.tsx (Next.js 13+ with App Router)
export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-teal-400/30 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-40 w-[500px] h-[300px] bg-purple-400/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

            {/* Border */}
            <div className="w-[90%] max-w-4xl py-10 rounded-md md:flex justify-between gap-5">
                {/* Grid Overlay */}
                <div className="absolute top-0 left-0 w-2/5 h-2/3 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_3px,transparent_3px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none" />
                {/* <div className="absolute top-0 left-10 w-[500px] h-[300px] bg-[#171717] blur-3xl rounded-full translate-x-1/3 translate-y-1/3" /> */}
                {/* Content */}
                <div className="relative z-10">
                    {/* Assignment Label */}
                    <div className="inline-block relative mb-8">
                        {/* Shadow */}
                        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-gray-700 rounded-lg" />

                        {/* Button */}
                        {/* <div className="relative bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold text-lg tracking-widest">
                            
                        </div> */}
                    </div>

                    {/* Title */}
                    <h1 className="text-white font-extrabold text-5xl leading-tight">
                        Rajath R Patil
                        <br />
                        Front End DEVELOPER
                    </h1>

                    {/* Company */}
                    <div className="mt-12">
                        <p className="text-gray-400 tracking-widest text-lg">Contact:</p>
                        <p className="text-white text-lg mt-1">
                            yathriks2pi@gmail.com | 
                            <a href="https://www.linkedin.com/in/rajath-r-patil-42a1a2236"  target="_blank" className="text-purple-500 mx-2">LinkedIn</a>
                        </p>
                    </div>
                </div><br></br>
                <div className="text-white bg-gray-600 md:w-1/2 rounded-md p-1">
                    <h1 className="text-3xl font-semibold text-gray-300 p-2">Portfolio and Projects:</h1>
                    <ul className="my-2 mx-2">
                        <li className="hover:bg-gray-500 font-semibold bg-gray-800 items-center px-5 py-2 rounded-lg my-2"><a href="https://my-domain-silk.vercel.app/onepageportfolio" target="_blank" className="text-gary-400 text-2xl">Portfolio <span className="text-gray-500 text-sm my-auto">Click to view</span></a></li>
                        <li className="hover:bg-gray-500 font-semibold bg-gray-800 items-center px-5 py-2 rounded-lg my-2"><a href="https://my-ecommerce-dashboard-4od4.vercel.app/" target="_blank" className="text-gary-400 text-2xl mx-2">Business Dashboard</a></li>
                        <li className="hover:bg-gray-500 font-semibold bg-gray-800 items-center px-5 py-2 rounded-lg my-2"><a href="https://web-app-fetures.vercel.app/pagination" target="_blank" className="text-gary-400 text-2xl mx-2">web Feature<span className="text-gray-500 text-sm my-auto">New: Pagination(/pagination), Folder System(/file-explorer)</span></a></li>
                        <li className="font-semibold bg-gray-800 items-center px-5 cursor-not-allowed py-5 rounded-lg">Node Project coming soon...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
