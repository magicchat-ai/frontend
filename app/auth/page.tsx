// auth/page.tsx
"use client"

import * as React from 'react'
import Login from './login'
import Signup from './signup'
import  './auth.css'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Auth() {
    const [loginUseState, setLoginUseState] = React.useState(true)

    return (
        <div className='flex bg-white h-full w-full full-wrap flex-col self-center justify-center align-items-center'>
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