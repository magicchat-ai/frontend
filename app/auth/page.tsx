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
        <div className='block bg-white h-full w-full full-wrap'>
            { loginUseState &&
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
        </div>
    )
}