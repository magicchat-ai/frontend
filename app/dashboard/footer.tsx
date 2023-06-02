function Footer() {
    return (
    <>
        <div className="w-full h-4 bg-white"></div>
        <div className="flex w-full max-w-screen-lg px-8 flex-col">
            <div className="w-full py-8 flex-col">
                <div className="flex gap-x-4 w-full py-2 flex-row justify-start">
                    <div className="flex max-w-max flex-col">
                        <h3 className="text-2xl text-black font-bold"> Sign up to our newsletter </h3>
                        <span className="text-sm text-[#6C6C6C]">
                            Stay up-to-date with the latest news, announcements, and new characters we launch.
                        </span>
                    </div>
                    <div className="flex max-w-max max-h-max flex-row">
                        <input type="email" className="max-h-10 px-2 py-2 border-slate-500" placeholder="Enter your email" />
                        <button className="max-h-10 text-white bg-black px-4 py-2 rounded-md"> Subscribe </button>
                    </div>
                </div>
                <div className="py-4 flex flex-row gap-x-2 justify-between">
                    <div data-name="column-one" className="flex flex-col">
                        <span className="text-lg text-black-800 font-bold"> MagicChat </span>
                        <span className="text-sm text-[#6C6C6C]"> Talk to characters and avatars your kids love. </span>
                    </div>
                    <div data-name="column-two" className="flex gap-y-3 flex-col">
                        <span className="text-md text-[#6C6C6C] font-semibold"> Product </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Overview </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Features </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Pricing </a>
                        </span>
                    </div>
                    <div data-name="column-three" className="flex flex-col gap-y-3">
                        <span className="text-md text-[#6C6C6C] text-gray font-semibold"> Company </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> About </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Careers </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Contact </a>
                        </span>
                    </div>
                    <div data-name="column-four" className="gap-y-3 flex flex-col">
                        <span className="text-md text-[#6C6C6C] text-gray font-semibold"> Social </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> LinkedIn </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Twitter </a>
                        </span>
                        <span className="text-md font-semibold text-black"> 
                            <a href="#"> Facebook </a>
                        </span>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row py-8 text-sm justify-between">
                    <div className="flex text-[#6C6C6C]"> &copy; 2023 MagicChat, Inc. All rights reserved. Design by Ayush Anand </div>
                    <div className="flex">
                        <a href='#twitter'> Twitter </a>
                        <a href='#github'> GitHub </a>
                        <a href='#linkedin'> LinkedIn </a>
                        <a href='#facebook'> Facebook </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer