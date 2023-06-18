"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}

const Signup = (props: PropsType) => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    const [errorMessage, setErrorMessage] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)
    const checkbox = React.useRef<HTMLInputElement>(null)

    const router = useRouter()

    async function handleSignup(event: any) {
        event.preventDefault()
        event.target.setAttribute("disabled", "true")

        if(!checkbox.current?.checked) {
            setErrorMessage('Please agree to the terms')
            setIsError(true)
            return
        }
        if(name==="" || email==="" || password==="") {
            setErrorMessage("Please enter some value")
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
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCred: any) => {
                updateProfile(userCred.user, {
                    displayName: name
                })
                setDoc(doc(db, 'users', userCred.user.uid), {
                    currBalance: 0,
                    lastPayment: new Date()
                }).catch((e: any) => console.log(e))
            })
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
        <div className="flex mx-auto my-auto max-w-[450px] bg-white px-8 py-6 rounded-lg justify-center self-center flex-col">
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-black font-bold dark:text-bold"> 
                Create an account 
            </h1>

            <p className="mb-4 text-lg font-small text-gray-500 lg:text-xl dark:text-gray-400">
                Let your kids talk to an AI avatar today.
            </p>

            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-slate-400 text-black bg-slate-100 rounded-lg lg-google-btn">
                Sign up with Google
            </button>

            <div className="flex py-4 text-black justify-self-center justify-between items-center gap-x-3 self-center">
                <hr className="w-28" /> or <hr className="w-28" />
            </div>

            <div className="flex flex-col">
                <form onSubmit={handleSignup} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        {isError && <span className="w-full rounded-md items-center text-white bg-red-500 px-2 py-2 items-center text-center">{errorMessage}</span>}
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-2 py-2 border-b border-slate-400 text-black" 
                            placeholder="Name" 
                            required/>
                        <input 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-2 py-2 border-b border-slate-400 text-black" 
                            placeholder="Email" 
                            required/>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-2 py-2 border-b border-slate-400 text-black"
                            placeholder="Password" 
                            required/>
                        <p className="flex flex-row gap-x-1 text-sm mt-4 ms-2 text-black">
                            <input type="checkbox" ref={checkbox} checked className="checked:bg-blue-500" required/>
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