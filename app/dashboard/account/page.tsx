import NavBar from "../navbar"

const AccountPage = () => {
    return (
        <div className="flex flex-col w-screen h-full bg-slate-100"> 
            <NavBar />

            <div className="flex flex-row px-8 py-6 justify-between w-full">
                <div className="flex flex-col gap-y-4">
                    <span className="text-black text-3xl font-semibold">My Acccount</span>
                    <span className="">View or edit your account settings from here</span>
                </div>
                <span className="font-bold text-zinc-700">Logout</span>
            </div>
            <div className="flex flex-row gap-x-4 gap-y-4 px-8">
                <div className="flex flex-col gap-x-8 w-full max-w-[14em]">
                    <ul className="flex flex-col gap-y-4 w-full">
                        <li className="px-4 rounded-md py-2 cursor-pointer bg-blue-200 dark:bg-blue-200 hover:bg-blue-300 font-bold text-blue-600">My details</li>
                        <li className="px-4 rounded-md py-2 text-slate-600 cursor-pointer hover:bg-slate-200 font-semibold">My subscription</li>
                    </ul>
                </div>

                <div className="flex flex-col w-full py-8 gap-y-4 px-8 rounded-md bg-white">
                    <span className="flex text-2xl text-black">My details</span>

                    <span className="flex text-black font-semibold border-b py-2 border-slate-200 w-full">
                        Personal Information
                    </span>

                    <form className="flex flex-col flex-wrap gap-y-4">
                        <div className="flex flex-row gap-x-3 gap-y-4">
                            <span className="flex flex-col">
                                <label className=""> First Name </label>
                                <input type="text" placeholder="John" className="w-[10em] bg-slate-200 text-black rounded-md p-2" disabled/>
                            </span>
                            <span className="flex flex-col">
                                <label className=""> Last Name </label>
                                <input type="text" placeholder="Doe" className="w-[10em] bg-slate-200 text-black rounded-md p-2" disabled/>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex flex-row justify-between gap-x-2 max-w-[30em] flex-wrap gap-y-2">
                                <label className="">Email</label>
                                <a className="text-sm text-blue-600 font-bold cursor-pointer">Resend Verification Email</a>
                            </span>
                            <input type="email" className="w-[15em] bg-slate-200 text-black rounded-md p-2" placeholder="email@domain.com" />
                        </div>
                        <div className="flex flex-col">
                            <label className="">Phone Number</label>
                            <input type="number" className="w-[15em] bg-slate-200 text-black rounded-md p-2" placeholder="+91 00000 00000" />
                            <span className="text-sm font-semibold text-slate-500">Keep country code and 10 digits of phone number</span>
                        </div>
                        <button className="font-semibold text-sm rounded-md px-12 py-3 text-white bg-blue-600 max-w-min hover:bg-blue-700">
                            SAVE
                        </button>
                    </form>

                    <span className="flex text-black font-semibold border-b py-2 border-slate-200 w-full">
                        Security Details
                    </span>

                    <div className="flex flex-col py-4">
                        <button className="py-2 px-6 rounded-md text-white bg-red-600 max-w-fit hover:bg-red-700">Reset Password</button>
                        <span className="text-sm font-bold text-slate-600">sends a password reset email</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage