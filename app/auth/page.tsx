"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { auth, IAuthState } from '../firebase'
import Login from './login'
import Signup from './signup'

export default function Auth() {
    const router = useRouter()
    const [loginUseState, setLoginUseState] = React.useState(true)

    const [authState, setAuthState] = React.useState<IAuthState>({
        isSignedIn: false,
        pending: true,
        user: null,
    })

    React.useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user => 
            setAuthState({ user, pending: false, isSignedIn: !!user })
        )
        return () => unregisterAuthObserver()
    }, [])
  
    if (authState.pending) {
        return (<h1> loading... </h1>)
    }
    else if(authState.isSignedIn)
        router.push("/dashboard")
    
    return (
        <div className='flex bg-white overflow-x-hidden h-screen px-4 w-full h-full fixed flex-col self-center justify-center align-items-center bg-[url("https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=579&q=80")] bg-cover bg-no-repeat'>
            <a href="/" className="items-center text-xl text-white font-bold px-4 py-1">MagicChat</a>
            {
                loginUseState &&
                <Login 
                    loginUseState={loginUseState}
                    setLoginUseState={setLoginUseState}
                />
            }
            {
                !loginUseState &&
                <Signup 
                    loginUseState={loginUseState}
                    setLoginUseState={setLoginUseState}
                />
            }

            <div className="footer text-white-500 flex justify-center self-center flex-row gap-x-1 text-sm py-1" style={{color: "white"}}>
                <a href="#">Terms of Use </a> | <a href="#">Privacy Policy</a>
            </div>

        </div>
    )
}