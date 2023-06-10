// auth/page.tsx
"use client"

import * as React from 'react'
import Login from './login'
import Signup from './signup'

export default function Auth() {
    const [loginUseState, setLoginUseState] = React.useState(true)

    return (
        <div className='flex bg-white overflow-hidden h-screen min-w-screen w-full flex-col self-center justify-center align-items-center bg-[url("https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=579&q=80")] bg-cover bg-no-repeat'>
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