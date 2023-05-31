import * as React from 'react'

type PropsType = {
    loginUseState: boolean,
    setLoginUseState: React.Dispatch<React.SetStateAction<boolean>>
}

function handleSignup() {

}

const signup = (props: PropsType) => {
    return (
        <div className="flex wrap max-width-450 bg-white px-8 rounded-lg justify-center self-center flex-col">
            <h1 className="mb-3 text-2xl font-extrabold leading-none tracking-tight text-black-700"> 
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

            <div className="form-control">
                <form onSubmit={handleSignup} className="flex flex-col">
                    <div className="flex flex-col">
                        <input 
                            type="text" 
                            className="w-full lgn-fields" 
                            placeholder="Name" />
                        <input 
                            type="text" 
                            className="w-full lgn-fields" 
                            placeholder="Email" />
                        <input 
                            type="password" 
                            className="w-full lgn-fields"
                            placeholder="Password" />
                        <p className="flex flex-row gap-x-1 text-sm mt-4 ms-2">
                            <input type="checkbox" className="checked:bg-blue-500" />
                            I agree to the <a href="#" className="text-blue-500">terms and conditions</a>
                        </p>
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="login-button flex bg-black items-center justify-center px-5 py-3 text-base font-medium text-center bg-white-700">
                            Sign up 
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-sm py-4 px-0.5 justify-center self-center flex flex-row gap-x-2">
                Already have an account?
                <a href="#" onClick={() => props.setLoginUseState(true)} className="font-bold"> Log in </a>
            </div>
        </div>
    )
}
export default signup