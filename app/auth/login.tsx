"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}



const Login = (props: PropsType) => {
    const router = useRouter()

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)
    const [errorMessage, setErrorMessage] = React.useState<string>('')

    async function handleLogin(event: any) {
        event.preventDefault()
        event.target.setAttribute("disabled", "true")

        if(email==="" || password==="") {
            setErrorMessage("Incorrect email or password")
            setIsError(true)
            event.target.removeAttribute("disabled")
            return
        }
        if(!String(email).toLowerCase().match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            setErrorMessage("Invalid Email")
            setIsError(true)
            event.target.removeAttribute("disabled")
            return
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } 
        catch (err) {
            setErrorMessage("Incorrect email or password");
            setIsError(true);
            event.target.removeAttribute("disabled")
            return;
        }
        
        router.push("/dashboard")
    }

    return (
        <div className="flex mx-auto my-auto max-w-[450px] bg-white px-10 py-8 rounded-lg justify-center self-center flex-col">
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-black font-bold dark:text-black"> 
                Sign in to your account 
            </h1>

            <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Continue with Google or enter your details
            </p>

            <button className="inline-flex items-center justify-center px-4 py-2 text-center text-black font-bold bg-white-700 rounded-lg rounded-md w-full border border-slate-500 hover:shadow hover:shodow-slate-200">
                Log in with Google
            </button>

            <div className="flex flex-row py-4 px-5 justify-self-center justify-between items-center gap-x-3 text-slate-500 self-center">
                <hr className="w-full min-w-[8em]" /> or <hr className="w-full min-w-[8em]" />
            </div>

            <div className="flex flex-col gap-x-4 gap-y-4">
                <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
                    <div className="flex flex-col text-black gap-y-2">
                        {isError && <span className="rounded-md bg-red-400 text-white font-semibold w-full items-center px-2 py-2">{errorMessage}</span>}
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full text-black px-2 py-2 border-b border-slate-300 focus-visible:outline-none" 
                            placeholder="Email" />
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-2 py-2 text-black border-b border-slate-300 focus-visible:outline-none"
                            placeholder="Password" />
                        <a href="/auth/forgot" className="self-end text-sm underline underline-offset-3 py-1"> Forgot Password </a>
                    </div>
                    <div>
                        <button 
                            onClick={handleLogin}
                            type="submit"
                            className="w-full font-bold bg-black text-white dark:text-white dark:bg-black rounded-md flex items-center justify-center px-5 py-3 text-base text-center hover:bg-[#1E1E1E]">
                            Login 
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-sm py-4 px-0.5 self-center text-black">
                Don&apos;t have an account?
                <a href="#" onClick={() => props.setLoginUseState(false)} className="font-bold"> Signup for free </a>
            </div>
        </div>
    )
}

export default Login