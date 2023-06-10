import * as React from 'react'
import { useRouter } from 'next/navigation';
import { app, db, auth } from '../firebase'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup = (props: PropsType) => {

    const router = useRouter()

    function handleSignup(event: any) {
        event.preventDefault()
        event.target.setAttribute("disabled", "true")
        event.target.style.backgroundColor = "rgb(150, 150, 150)"

        router.push("/dashboard")
    }

    return (
        <div className="flex mx-auto my-auto max-w-[450px] bg-white px-8 py-6 rounded-lg justify-center self-center flex-col">
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-black font-bold dark:text-bold"> 
                Create an account 
            </h1>

            <p className="mb-4 text-lg font-small text-gray-500 lg:text-xl dark:text-gray-400">
                Let your kids talk to an AI avatar today.
            </p>

            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white-700 rounded-lg lg-google-btn">
                Sign up with Google
            </button>

            <div className="seperator flex py-4 justify-self-center justify-between items-center gap-x-3 self-center">
                <hr className="w-28" /> or <hr className="w-28" />
            </div>

            <div className="flex flex-col gap-4">
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <input 
                            type="text" 
                            className="w-full px-2 py-2 border-bottom border-slate-600" 
                            placeholder="Name" />
                        <input 
                            type="text" 
                            className="w-full px-2 py-2 border-bottom border-slate-600" 
                            placeholder="Email" />
                        <input 
                            type="password" 
                            className="w-full px-2 py-2 border-bottom border-slate-600"
                            placeholder="Password" />
                        <p className="flex flex-row gap-x-1 text-sm mt-4 ms-2">
                            <input type="checkbox" className="checked:bg-blue-500" />
                            I agree to the <a href="#" className="text-blue-500">terms and conditions</a>
                        </p>
                    </div>
                    <div>
                        <button 
                            type="submit"
                            onClick={handleSignup}
                            className="w-full font-bold bg-black text-white dark:text-white dark:bg-black rounded-md flex items-center justify-center text-base px-5 py-3 text-center hover:bg-[#1e1e1e]">
                            Sign up 
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-sm py-4 px-0.5 justify-center self-center flex flex-row gap-x-2 text-black dark:text-black">
                Already have an account?
                <a href="#" onClick={() => props.setLoginUseState(true)} className="font-bold"> Log in </a>
            </div>
        </div>
    )
}
export default Signup