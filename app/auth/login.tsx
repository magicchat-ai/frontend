import * as React from 'react'
import './auth.css'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}
function handleLogin() {
    // do something
}

const login = (props: PropsType) => {
    return (
        <div className="flex wrap max-width-450 bg-white px-8 rounded-lg justify-center self-center flex-col">
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-black-700"> 
                Sign in to your account 
            </h1>

            <p className="mb-4 text-lg font-small text-gray-500 lg:text-xl dark:text-gray-400">
                Continue with Google or enter your details
            </p>

            <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black bg-white-700 rounded-lg lg-google-btn">
                Log in with Google
            </button>

            <div className="seperator flex py-4 justify-self-center justify-between items-center gap-x-3 self-center">
                <hr className="w-28" /> or <hr className="w-28" />
            </div>

            <div className="form-control">
                <form onSubmit={handleLogin} className="flex flex-col">
                    <div className="flex flex-col">
                        <input 
                            type="text" 
                            className="w-full lgn-fields" 
                            placeholder="Email" />
                        <input 
                            type="password" 
                            className="w-full lgn-fields"
                            placeholder="Password" />
                        <a href="/auth/forgot" className="self-end text-sm underline underline-offset-3 py-1"> Forgot Password </a>
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="login-button flex bg-black items-center justify-center px-5 py-3 text-base font-medium text-center bg-white-700">
                            Login 
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-sm py-4 px-0.5">
                Don&apos;t have an account?
                <a href="#" onClick={() => props.setLoginUseState(false)} className="font-bold"> Signup for free </a>
            </div>
        </div>
    )
}

export default login