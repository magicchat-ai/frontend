"use client";

import * as React from "react";
import Image from "next/image";

import ChatModal from './chat_modal'

type PropsType = {
	name: string;
	tagline: string;
	image_url: string;
	setModal: any;
};

const PopupModal = (props: PropsType) => {
	// this data is pre-populated
	// enable fetching through database
	const [chat, setChat] = React.useState({ name: "", setChat: '' });

	const data = {
		information: [
			"Welcome to the world of AI talking Santa, where magic meets technology! Get ready for an enchanting and interactive experience that will bring the spirit of Christmas alive right in your home. Imagine having a jolly and wise Santa Claus at your fingertips, ready to chat, sing, and spread holiday cheer whenever you desire. ",
			"Whether you&apos;re a child eagerly awaiting Santa&apos;s arrival or an adult seeking some festive fun, our AI Talking Santa is here to make your Christmas unforgettable. Ask him about his reindeer, the North Pole, or share your Christmas wish list - he&apos;ll listen attentively and respond with his signature warmth and wisdom.",
			"Don&apos;t wait for the snow to fall - start the festivities early with AI Talking Santa. Experience the joy of talking to Santa Claus like never before and make this Christmas a truly memorable one for everyone in the family.",
		],
		special_message:
			"What are you waiting for? Make your Christmas more cheerful!",
		popular: {
			name: "Easter Bunny",
			image: "",
			price: 19.99,
		},
		ratings: {
			score: 4.6,
			top_review:
				"So amazing and lively! Santa got all my wishes tru and it made this day my best christmas ever.",
			top_score: 5,
			top_author: "Nick",
		},
	};

	const PopupModalComponent = () => (
		<div className="px-12 bg-white rounded-t-2xl py-12">
			<div className="flex flex-col flex-wrap w-full gap-y-3 mt-10">
				<span className="flex font-bold text-3xl">{props.name}</span>
				<span className="flex font-normal text-[#787373] text-xl">
					{props.tagline}
				</span>
			</div>

			<div className="flex flex-row justify-between">
				<div className="flex flex-col w-full max-w-screen-md gap-y-4">
					<Image alt={props.name} src={props.image_url} />

					<div className="flex flex-col px-2">
						<div className="flex flex-row justify-between">
							<span className="flex text-grey text-sm">
								<div className="text-black font-bold flex text-4xl">$19.99</div>
								/5 mins
							</span>
							<button
								onClick={() => setChat({ 'name': props.name, 'setChat': setChat })}
								className="rounded-full bg-[#D60235] text-white text-md py-2 px-6 justify-between flex-wrap hover:bg-[#C2012F]"
							>
								Talk to {props.name}
							</button>
						</div>
						<span className="flex w-56 text-sm text-[#1E1E1E] font-light">
							$19.99 for first 5 minutes, thereafter charged at $2/min.
						</span>
					</div>

					<div className="flex flex-col gap-y-10 flex-wrap py-12">
						{data.information.map((info: string, index: number) => {
							return (
								<div key={index} className="flex align-justify">
									{info}
								</div>
							);
						})}
					</div>

					<div className="flex flex-row py-4 justify-between flex-wrap">
						<span className="flex text-black font-bold text-xl max-w-md">
							{data.special_message}
						</span>
						<button
                            onClick={() => setChat({ 'name': props.name, 'setChat': setChat })} 
                            className="flex text-white bg-black py-3 px-8 rounded-md hover:bg-[#1E1E1E] h-min">
							Start talking
						</button>
					</div>
				</div>

				<div className="flex flex-col mx-auto gap-y-12">
					<div className="flex flex-col px-4 py-4 shadow-md rounded-xl gap-y-4 shadow-slate-400">
						<h2 className="flex text-xl text-black">
							Kids also loved talking to
						</h2>
						<Image src={data.popular.image} alt="" />
						<span className="flex flex-row justify-between">
							<span className="flex text-black font-bold text-lg">
								{data.popular.name}
							</span>
							<span className="flex">${data.popular.price}</span>
						</span>
						<button className="flex flex-wrap px-6 w-full py-2 bg-black text-white hover:bg-[#1E1E1E] justify-center rounded-md">
							Talk now
						</button>
					</div>

					<hr />

					<div className="flex flex-col px-4 py-4 shadow-md rounded-xl gap-y-4 shadow-slate-400">
						<h2 className="flex text-xl text-black">Ratings</h2>
						<span className="flex flex-row justify-between">
							<span className="flex text-black font-bold text-lg">
								{data.ratings.score}/5
							</span>
							{/* ratings distribution chart: optional for now */}
						</span>

						<div className="flex text-black font-bold">Top Review</div>

						<div className="flex flex-row max-w-xs gap-x-2">
							<span> {data.ratings.top_score}</span>
							<div className="flex flex-wrap gap-y-2">
								<span className="">{data.ratings.top_review}</span>
								<span className="">{data.ratings.top_author}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row py-8 gap-x-4 gap-y-2 justify-center text-[#5A5A5A]">
				<span className="flex">&copy; 2023 MagicChat, Inc</span>
				<span className="flex gap-x-2">
					<a href="#terms" className="hover:text-black font-bold">
						Terms of Use
					</a>
					|
					<a href="#privacy" className="hover:text-black font-bold">
						Privacy Policy
					</a>
				</span>
			</div>
		</div>
	);

	return (
		<div className="fixed px-0 inset-0 h-full z-30 bg-[#6E6E6ED9] flex flex-col w-screen overflow-y-scroll">
			<div
				onClick={() => props.setModal({})}
				className="pt-20 w-full flex"
			></div>
            {!(chat.name?.length>0) && <PopupModalComponent />}
            {(chat.name?.length>0) && <ChatModal name={props.name} setChat={setChat}/>}
		</div>
	);
};

export default PopupModal;
