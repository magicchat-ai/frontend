"use client";

import * as React from "react";
import { useRouter } from 'next/navigation'
import { db, auth, IAuthState } from '../firebase'
import NavBar from "./navbar";
import Footer from "./footer";
import ProductCard from "./product_card";
import PopupModal from "./popup_modal";
import { collection, getDocs } from "firebase/firestore";

type ICharacterType = {
	name: string,
	tagline: string,
	price: number,
	image_url: string,
	uuid: string
}
type IModal =  {
    image_url: string,
    name: string,
    tagline: string,
    price: number,
    uuid: string,
    modal: any,
    setModal: any
}

const Dashboard = () => {
	const [characterList, setCharacterList] = React.useState<Array<ICharacterType>>([])
	const [modal, setModal] = React.useState<IModal>({ "name": '', "tagline": '', 'price': 0, 'image_url':'', 'uuid':'','modal':null, 'setModal': null});
	const router = useRouter()

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
  
	React.useEffect(() => {
		async function getCharacters() {
			let newCharacterList = new Array<ICharacterType>
			const querySnapshot = await getDocs(collection(db, 'characters'))
			querySnapshot.forEach((doc) => {
				console.log(doc.data())
				// @ts-expect-error
				newCharacterList.push({'uuid': doc.id, ...doc.data()})
			})
			setCharacterList(newCharacterList)
		}
		getCharacters()
	}, [])

    if (authState.pending) {
        return (<h1> loading... </h1>)
    }
    else if(!authState.isSignedIn)
        router.push("/auth")

	return (
		<main className="max-w-full w-screen overflow-x-clip bg-white">
			{modal.name?.length > 0 && (
				<PopupModal
					image_url={""}
					name={modal?.name}
					tagline={modal?.tagline}
					price={modal?.price}
					uuid={modal?.uuid}
					modal={modal?.modal}
					setModal={setModal}
				/>
			)}

			<NavBar />

			<div className="flex w-full justify-center w-screen">
				<div className="flex flex-col max-w-screen-lg shadow-md shadow-slate-600 my-8 rounded-xl bg-center w-full bg-[url('../public/assets/OpL1im6U7OFk.png')] ">
					<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-8 justify-center self-center text-white gap-y-4 backdrop-brightness-50">
						<span className="flex flex-row text-xl">
							Talk to your favorite character.
						</span>
						<span className="flex flex-row font-bold text-3xl mb-8">
							Anytime. Anywhere.
						</span>
						<button className="flex flex-row bg-white text-black px-6 py-3 my-4 max-w-max hover:bg-[#E7E7E7] shadow-md shadow-slate-800">
							Start using now
						</button>
					</div>
				</div>
			</div>

			{/* <div className="flex flex-col flex-end">
                <span className="flex"> Sort by </span>
            </div> */}

			<div className="flex w-full w-screen justify-center">
				<div className="flex flex-col max-w-screen-lg my-8 rounded-xl w-full px-8 py-8 justify-center self-center gap-y-4">
					<div className="flex text-2xl max-w-screen-lg flex-start dark:text-black">
						Most Popular {characterList[0]?.name}
					</div>
					<div className="flex flex-row max-w-max gap-x-4 gap-y-4 flex-wrap">
						{/* @ts-expect-error */}
						{characterList?.map((data: ICharacterType, index: number) => {
							<ProductCard
								key={index}
								image_url={data.image_url}
								name={data.name}
								tagline={data.tagline}
								price={data.price}
								uuid={data.uuid}
								modal={modal}
								setModal={setModal}
							/>
						})}
						
					</div>
				</div>
			</div>

			<div className={`flex w-full w-screen justify-center mb-12`}>
				<div className="flex flex-col max-w-screen-lg my-8 rounded-xl w-full bg-[url('../public/assets/Sf5qPt6dcBOX.png')] bg-center">
					<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-12 items-center justify-center items-center self-center gap-y-12  backdrop-brightness-50">
						<div className="flex flex-row text-white gap-x-2 font-bold text-lg">
							<svg
								width="29"
								height="27"
								viewBox="0 0 29 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.6057 1.59058C6.64738 3.68132 -2.54608 16.3018 0.732268 21.9374C4.0107 27.5732 19.5666 27.1472 24.5406 24.52C27.6854 22.8589 31.1532 17.3834 26.0102 8.54239C20.8673 -0.298462 13.6742 -0.0301557 10.6057 1.59058ZM14.0807 9.55488C15.2443 6.18049 16.9064 3.58973 16.9064 3.58973C16.9064 3.58973 19.2903 5.15269 20.4119 6.40391C20.5074 6.51053 20.6062 6.61854 20.7072 6.7293C21.7926 7.91805 23.1424 9.39694 23.638 12.2959C24.6689 18.3276 22.3713 22.3451 22.3713 22.3451C22.3713 22.3451 23.2239 17.6627 21.6995 13.8078C20.8214 11.5872 17.3158 8.44562 17.3158 8.44562C17.3158 8.44562 16.6134 10.5522 15.0827 12.7733C14.8415 13.1234 14.6264 13.454 14.4205 13.7705C13.3207 15.4615 12.4852 16.7461 9.32634 18.4146C7.02166 19.6319 2.63118 19.7809 2.63118 19.7809C2.63118 19.7809 7.63587 18.3562 10.7268 15.7407C12.9613 13.8501 13.1099 13.2237 13.4602 11.7471C13.5944 11.1811 13.7582 10.49 14.0807 9.55488Z"
									fill="white"
								/>
							</svg>
							MagicChat
						</div>
						<div className="flex flex-col items-center justify-center max-w-screen-sm ">
							<div className="flex text-white text-lg self-center font-bold ">
								Don&apos;t miss chance talking to your favourite AI character
							</div>
							<span className="flex flex-row align-center text-[#C7C7C7] font-normal text-center text-[#c7c7c7] self-center">
								Join over 2,000+ other kids who are chatting with Santa, Easter
								bunny, Batman, and many more.
							</span>
						</div>
						<div className="flex flex-row flex-wrap gap-x-4 gap-y-4 font-bold">
							<button className="flex border-2 px-6 py-2 bg-[#1e1e1e] hover:bg-[#4E4E4E] rounded-lg text-white">
								Get started
							</button>
							<a
								className="flex border-2 text-black px-6 py-2 rounded-lg bg-white hover:bg-[#E4E4E4]"
								href="/dashboard/account">
								Buy Subscription
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
};

export default Dashboard;
