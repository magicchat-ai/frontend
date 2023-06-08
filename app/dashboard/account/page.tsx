import NavBar from "../navbar"

const AccountPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen bg-slate-100"> 
            <NavBar />

            <div className="flex flex-col px-8 py-6">
                <div className="flex w-full flex-col gap-y-4">
                    <span className="text-black text-3xl font-semibold">My Acccount</span>
                    <span className="">View or edit your account settings from here</span>
                </div>
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
                    </form>


                </div>
            </div>
        </div>
    )
}

export default AccountPage