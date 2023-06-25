"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { signOut, sendPasswordResetEmail, sendEmailVerification } from 'firebase/auth'
import { getDoc, doc } from "firebase/firestore"
import { db, auth, IAuthState } from '../../firebase'
import CheckoutForm from "./stripe_form"
import NavBar from "../navbar"
import Footer from "../footer"
import Loading from "@/app/loading"

type IUserData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    currBalance: number,
    lastPayment: string,
}

const AccountPage = () => {
    const router = useRouter()
    const [tab, setTab] = React.useState(0)
    const [userData, setUserData] = React.useState<IUserData>()
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
  
    React.useEffect(()=> {
		async function getData() {
			const docSnap = await getDoc(doc(db, "users", `${authState.user?.uid}`))
			
			const newUserData = {
				'firstName': authState.user?.displayName?.split(' ')[0],
				'lastName': authState.user?.displayName?.split(' ')[1],
				'email': authState.user?.email,
				'phoneNumber': authState.user?.phoneNumber,
				'currBalance': docSnap.data()?.currBalance,
				'lastPayment': new Date(docSnap.data()?.lastPayment.seconds).toString(),
			}
			setUserData(newUserData)
		}
        
		if(authState.user) getData()
	}, [authState.user])

    if (authState.pending) {
        return (<Loading />)
    }
    else if(!authState.isSignedIn)
        router.push("/auth")

    function handleLogout(e: any) {
        signOut(auth)
        router.push('/')
    }
    
    function handleResendEmail(e: any) {
        sendEmailVerification(authState.user)
        .then((e: any) => alert('Sent email!'))
        .catch((e: any) => alert('Error sending email.'))
    }

    function handleResetPassword(e: any) {
        sendPasswordResetEmail(auth, authState.user.email)
        .then((e: any) => alert('Sent Link on registered email!'))
        .catch((e: any) => alert('Error sending reset link.'))
    }

    const MyDetailsComponent = () => (<div className="w-full flex flex-col gap-y-4">
            <span className="flex text-2xl text-black font-bold">My details</span>
            <span className="flex text-black font-semibold border-b py-2 border-slate-200 w-full">
                Personal Information
            </span>

            <form className="flex flex-col flex-wrap gap-y-4">
                <div className="flex flex-row gap-x-3 flex-wrap gap-y-4">
                    <span className="flex flex-col">
                        <label className="text-black"> First Name </label>
                        <input type="text" placeholder={userData?.firstName} className="w-[10em] bg-slate-200 text-black rounded-md p-2" disabled/>
                    </span>
                    <span className="flex flex-col">
                        <label className="text-black"> Last Name </label>
                        <input type="text" placeholder={userData?.lastName} className="w-[10em] bg-slate-200 text-black rounded-md p-2" disabled/>
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="flex flex-row justify-between gap-x-2 max-w-[30em] flex-wrap gap-y-2">
                        <label className="text-black">Email</label>
                        <a className="text-sm text-blue-600 font-bold cursor-pointer" onClick={handleResendEmail}>Resend Verification Email</a>
                    </span>
                    <input type="email" className="w-[15em] bg-slate-200 text-black rounded-md p-2" placeholder={userData?.email} disabled/>
                </div>
                <div className="flex flex-col">
                    <label className="text-black">Phone Number</label>
                    <input type="number" className="w-[15em] bg-slate-200 text-black rounded-md p-2" placeholder={userData?.phoneNumber} disabled/>
                    <span className="text-sm font-semibold text-slate-500">Keep country code and 10 digits of phone number</span>
                </div>
                <button className="shadow-lg shadow-slate font-semibold text-sm rounded-md px-12 py-3 text-white bg-blue-600 max-w-min hover:bg-blue-700">
                    EDIT
                </button>
            </form>

            <span className="flex text-black font-semibold border-b py-2 border-slate-200 w-full">
                Security Details
            </span>

            <div className="flex flex-col py-4">
                <button 
                    onClick={handleResetPassword}
                    className="shadow-lg shadow-slate py-2 px-6 rounded-md text-white bg-red-600 max-w-fit hover:bg-red-700">Reset Password</button>
                <span className="text-sm font-bold text-slate-600">sends a password reset email</span>
            </div>
        </div>)

    const MySubsComponent = () => (
        <div className="w-full flex flex-col gap-y-4">
            <span className="flex text-2xl font-bold text-black">My subscription</span>

            <span className="flex text-lg font-semibold border-b border-slate-500">Your wallet</span>
            
            <div className="flex flex-row gap-x-10 w-full flex-wrap">
                <label className="font-bold text-black">Current Balance</label> 
                <input type="text" className="px-2 py-1 w-[12em] bg-slate-200 rounded-md" placeholder={`$ ${userData?.currBalance}`} disabled/>
            </div>
            <span className="flex font-semibold max-w-prose text-slate-500 text-sm">
                Account Balance  would be updated within 15 minutes.
                If you do not see updated balance beyond this period, please contact support.
            </span>

            <div className="flex flex-row flex-wrap gap-x-10">
                <label className="font-bold text-black">Last Payment Time</label>
                <input type="text" className="px-2 py-1 bg-slate-200 w-[20em] rounded-md" placeholder={userData?.lastPayment} disabled/>
            </div>

            <div className="flex flex-col flex-wrap">
                <CheckoutForm user_id={authState.user?.uid} />
            </div>
        </div>
    )

    return (
        <div className="flex flex-col w-full h-full bg-slate-100"> 
            <NavBar />

            <div className="flex flex-row px-8 py-6 justify-between w-full">
                <div className="flex flex-col gap-y-4">
                    <span className="text-black text-3xl font-semibold">My Acccount</span>
                    <span className="text-black">View or edit your account settings from here</span>
                </div>
                <button 
                    className="font-bold hover:bg-slate-300 cursor-pointer text-zinc-700 px-4 py-2 h-min rounded-md"
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="flex flex-row gap-x-4 flex-wrap gap-y-4 px-8">
                <div className="flex flex-col gap-x-8 w-full max-w-[14em]">
                    <ul className="flex flex-col gap-y-4 w-full">
                        <li className={`px-4 rounded-md py-2 cursor-pointer font-bold ${(tab===0)?'text-blue-600 bg-blue-200 hover:bg-blue-300':'text-slate-600 hover:bg-slate-200'}`} onClick={() => setTab(0)}>My details</li>
                        <li className={`px-4 rounded-md py-2 cursor-pointer font-bold ${(tab===1)?'text-blue-600 bg-blue-200 hover:bg-blue-300':'text-slate-600 hover:bg-slate-200'}`} onClick={() => setTab(1)}>My subscription</li>
                    </ul>
                </div>

                <div className="flex shadow-lg shadow-slate mb-24 flex-col w-full py-8 px-8 rounded-md bg-white">
                    {(tab===0 && <MyDetailsComponent />) || <MySubsComponent />}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AccountPage