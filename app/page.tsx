// Landing Page

import Image from 'next/image'
import SantaSmilingImage from "../public/assets/santa_landing.png"
import Footer from './dashboard/footer'

export default function Home() {
  return (
		<main className="max-w-full bg-white w-screen overflow-x-clip">
			<div className="sticky w-full top-0 transition-all py-1.5 md:py-0.5 duration-200 z-50 text-[#ffffff] bg-[#340464bc] backdrop-blur w-screen">
				<div className="mx-auto sm:px-7 px-4 dark:text-white w-full ">
					<div className="relative flex items-center justify-between py-3">
						<div className="flex justify-start xl:flex-1">
							<a href="/" className="text-[#ffffff]">
								<span className="text-white-700 flex flex-row gap-x-2 font-bold text-lg">
									<svg
										width="29"
										height="27"
										viewBox="0 0 29 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.6057 1.59058C6.64738 3.68132 -2.54608 16.3018 0.732268 21.9374C4.0107 27.5732 19.5666 27.1472 24.5406 24.52C27.6854 22.8589 31.1532 17.3834 26.0102 8.54239C20.8673 -0.298462 13.6742 -0.0301557 10.6057 1.59058ZM14.0807 9.55488C15.2443 6.18049 16.9064 3.58973 16.9064 3.58973C16.9064 3.58973 19.2903 5.15269 20.4119 6.40391C20.5074 6.51053 20.6062 6.61854 20.7072 6.7293C21.7926 7.91805 23.1424 9.39694 23.638 12.2959C24.6689 18.3276 22.3713 22.3451 22.3713 22.3451C22.3713 22.3451 23.2239 17.6627 21.6995 13.8078C20.8214 11.5872 17.3158 8.44562 17.3158 8.44562C17.3158 8.44562 16.6134 10.5522 15.0827 12.7733C14.8415 13.1234 14.6264 13.454 14.4205 13.7705C13.3207 15.4615 12.4852 16.7461 9.32634 18.4146C7.02166 19.6319 2.63118 19.7809 2.63118 19.7809C2.63118 19.7809 7.63587 18.3562 10.7268 15.7407C12.9613 13.8501 13.1099 13.2237 13.4602 11.7471C13.5944 11.1811 13.7582 10.49 14.0807 9.55488Z"
											fill="white"
										/>
									</svg>
									MagicChat
								</span>
							</a>
						</div>
						<div className="flex -my-2 -mr-2 md:hidden">
							<a
								href="/auth"
								rel="noopener noreferrer"
								className="font-semibold text-sm px-4 h-9 bg-teal-8 hover:bg-teal-9 text-white focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full"
							>
								Sign up
							</a>
							<button
								className="inline-flex items-center justify-center p-2 ml-2 text-gray-400 rounded-md focus:outline-none"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
								id="headlessui-popover-button-:R956:"
							>
								<span className="sr-only">Open menu</span>
								<svg
									data-role="open-menu"
									width="20"
									height="12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 0h20v2H0V0zM0 5h20v2H0V5zM0 10h20v2H0v-2z"
										fill="white"
									></path>
								</svg>
							</button>
						</div>
						<nav className="hidden ml-4 xl:ml-0 md:flex md:flex-1 justify-end gap-x-2 px-2">
							<div className="relative" data-headlessui-state="">
								<button
									className="text-white hover:bg-white md:inline-flex hidden items-center whitespace-nowrap text-sm font-medium focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group"
									type="button"
									aria-expanded="false"
									data-headlessui-state=""
									id="headlessui-popover-button-:R15l6:"
								>
									<span> Home </span>
								</button>
							</div>
							<a href="#about">
								<div className="text-white hover:bg-white text-sm font-medium hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition flex items-center cursor-pointer">
									About
								</div>
							</a>
							<div
								className="relative sm:hidden lg:block"
								data-headlessui-state=""
							>
								<a href="#pricing">
									<button
										className="text-white hover:bg-white md:inline-flex hidden items-center text-sm font-medium focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group"
										type="button"
										aria-expanded="false"
										data-headlessui-state=""
										id="headlessui-popover-button-:R1dl6:"
									>
										Pricing 
									</button>
								</a>
							</div>
						</nav>
						<div className="items-center justify-end hidden space-x-3 md:flex lg:flex-1 lg:w-0 flex-nowrap">
							<a
								href="/auth"
								rel="noopener noreferrer"
								className="font-semibold text-sm px-4 h-10 bg-teal-8 hover:bg-teal-9 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full bg-white hover:bg-opacity-90"
							>
								Signup Now
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				className="mt-4 rounded-4xl -mt-16 md:-mt-32"
				style={{
					background:
						"radial-gradient(60.87% 39.84% at 63.16% 60.16%, #860B7A 0%, #340464 100%)",
				}}
			>
				<div className="mb-22">
					<div className="-mt-20">
						<header className="pb-20 overflow-hidden lg:pt-24 lg:-mt-24 md:pt-16 md:-mt-16">
							<div className="max-w-[1224px] mx-auto ">
								<div className="gap-6 px-8 pt-[135px] pb-0 md:pb-16 mb-[-20px] lg:mb-0 mx-auto mt-4 lg:pt-20 lg:grid xl:px-0 lg:grid-cols-12 lg:gap-y-20">
									<div className="text-white lg:col-span-7 ">
										<h1 className="text-5xl font-medium lg:text-7xl">
											Enjoy talking to your favorite characters
										</h1>
									</div>
									<div className="jsx-1009e820c0ddca8b lg:col-start-9 lg:col-span-4">
										<p className="jsx-1009e820c0ddca8b max-w-3xl mt-4 text-[#f5f9ffc4] text-[20px] leading-[26px] lg:mt-8">
											Talk to Santa, Easter Bunny, Birthday Fairy and many more
											characters.
										</p>
										<div className="jsx-1009e820c0ddca8b mt-8">
											<a
												href="/auth"
												rel="noopener noreferrer"
												className="bg-white text-md lg:text-btn h-11 px-5 font-semibold bg-teal-8 hover:bg-teal-9 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full hover:bg-[#c7c7c7]"
											>
												Start talking
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="flex no-scrollbar mt-10 rounded-lg flex-row gap-x-7 px-4 py-4 h-[16em] md:h-[22em] bg-transparent overflow-x-scroll">

								<div className="flex flex-col min-w-[20em] md:min-w-[30em] rounded-xl h-full bg-[url('https://images.unsplash.com/photo-1600129979988-634770ae8b67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwa2lkc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-center bg-cover">
									<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-12 items-center justify-center items-center self-center gap-y-12  backdrop-brightness-70">
									</div>
								</div>

								<div className="flex flex-col min-w-[20em] md:min-w-[30em] rounded-xl h-full bg-[url('https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMGJpcnRoZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')] bg-no-repeat bg-center bg-cover">
									<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-12 items-center justify-center items-center self-center gap-y-12  backdrop-brightness-70">
									</div>
								</div>

								<div className="flex flex-col min-w-[20em] md:min-w-[30em] rounded-xl h-full bg-[url('https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=809&q=80')] bg-no-repeat bg-center bg-cover">
									<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-12 items-center justify-center items-center self-center gap-y-12  backdrop-brightness-70">
									</div>
								</div>

								<div className="flex flex-col min-w-[20em] md:min-w-[30em] rounded-xl h-full bg-[url('https://images.unsplash.com/photo-1549815587-9757d02af740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-no-repeat bg-center bg-cover">
									<div className="w-full h-full flex flex-col justify-center rounded-xl px-8 py-12 items-center justify-center items-center self-center gap-y-12  backdrop-brightness-70">
									</div>
								</div>

							</div>
						</header>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center py-24 self-center gap-y-12 justify-self-center dark:text-black px-2 bg-[linear-gradient(180deg,_rgba(52,4,100,1),_rgba(0,0,214,0)_70.71%),linear-gradient(200deg,_rgba(7,9,130,1),_rgba(7,9,130,1)_70.71%),linear-gradient(336deg,_rgba(35,90,186,1),_rgba(35,90,186,1)_70.71%)]">
				{/* @ts-expect-error */}
				<a name="about"></a>
				<div className="flex flex-row font-extrabold leading-relaxed text-3xl px-4 pb-8 mb-8 md:mb-6 md:text-4xl max-w-screen-md justify-center self-center content-center justify-items-center text-white text-center">	
					Unleash Your Imagination with AI-Powered Avatar Talk!
				</div>
				<div className="flex flex-row flex-wrap gap-x-12 gap-y-12 max-w-screen-lg self-center px-10 md:px-20 py-20 rounded-lg bg-[#C7C7C75A] backdrop-blur backdrop-brightness-10 border border-slate-300">
					<div className="flex flex-col md:w-1/2 justify-between gap-y-12 flex-wrap min-w-[260px] max-w-[380px]">
						<div className="flex flex-col gap-y-4">
							<h2 className="flex text-white text-lg font-bold items-center gap-x-2">
								<svg
									width="16"
									height="16"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.8369 18.8151C17.6643 18.8142 18.3344 18.1411 18.3335 17.3117L18.3181 3.79642C18.3172 2.96706 17.6456 2.29548 16.8181 2.29642C15.9906 2.29736 15.3206 2.97046 15.3215 3.79982L15.3352 15.8134L3.34879 15.827C2.52131 15.828 1.85126 16.5011 1.8522 17.3304C1.85314 18.1598 2.52472 18.8314 3.3522 18.8304L16.8369 18.8151ZM0.220559 2.82015L15.7769 18.3765L17.8934 16.2504L2.33706 0.694015L0.220559 2.82015Z"
										fill="white"
									/>
								</svg>
								Meet your superheroes
							</h2>
							<p className="font-light text-white">
								Meet your legendary characters and superheroes come to life on
								your screen! Prepare to embark on an unparalleled interactive
								experience that will transport you into the world of your
								dreams.
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<h2 className="flex text-white text-lg font-bold items-center gap-x-2 ">
								<svg
									width="16"
									height="16"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.8369 18.8151C17.6643 18.8142 18.3344 18.1411 18.3335 17.3117L18.3181 3.79642C18.3172 2.96706 17.6456 2.29548 16.8181 2.29642C15.9906 2.29736 15.3206 2.97046 15.3215 3.79982L15.3352 15.8134L3.34879 15.827C2.52131 15.828 1.85126 16.5011 1.8522 17.3304C1.85314 18.1598 2.52472 18.8314 3.3522 18.8304L16.8369 18.8151ZM0.220559 2.82015L15.7769 18.3765L17.8934 16.2504L2.33706 0.694015L0.220559 2.82015Z"
										fill="white"
									/>
								</svg>
								Engage in captivating conversations
							</h2>
							<p className="font-light text-white">
								Talk to beloved holiday figures like Santa Claus, and an array
								of legendary characters from folklore and pop culture. Immerse
								yourself in their fascinating stories, or simply enjoy a
								light-hearted chat filled with laughter and surprises.
							</p>
						</div>
					</div>
					<div className="flex flex-col md:w-1/2 justify-between gap-y-12 flex-wrap min-w-[260px] max-w-[380px]">
						<div className="flex flex-col gap-y-4">
							<h2 className="flex text-white text-lg font-bold items-center gap-x-2">
								<svg
									width="16"
									height="16"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.8369 18.8151C17.6643 18.8142 18.3344 18.1411 18.3335 17.3117L18.3181 3.79642C18.3172 2.96706 17.6456 2.29548 16.8181 2.29642C15.9906 2.29736 15.3206 2.97046 15.3215 3.79982L15.3352 15.8134L3.34879 15.827C2.52131 15.828 1.85126 16.5011 1.8522 17.3304C1.85314 18.1598 2.52472 18.8314 3.3522 18.8304L16.8369 18.8151ZM0.220559 2.82015L15.7769 18.3765L17.8934 16.2504L2.33706 0.694015L0.220559 2.82015Z"
										fill="white"
									/>
								</svg>
								Interact with your heroes
							</h2>
							<p className="text-white font-light">
								Ask them burning questions, and discover hidden depths to their
								personalities. Experience the thrill of engaging with your
								favorite characters, as we bring them to life with stunning
								realism.
							</p>
						</div>
						<div className="flex flex-col gap-y-4">
							<h2 className="flex text-white text-lg font-bold items-center gap-x-2">
								<svg
									width="16"
									height="16"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.8369 18.8151C17.6643 18.8142 18.3344 18.1411 18.3335 17.3117L18.3181 3.79642C18.3172 2.96706 17.6456 2.29548 16.8181 2.29642C15.9906 2.29736 15.3206 2.97046 15.3215 3.79982L15.3352 15.8134L3.34879 15.827C2.52131 15.828 1.85126 16.5011 1.8522 17.3304C1.85314 18.1598 2.52472 18.8314 3.3522 18.8304L16.8369 18.8151ZM0.220559 2.82015L15.7769 18.3765L17.8934 16.2504L2.33706 0.694015L0.220559 2.82015Z"
										fill="white"
									/>
								</svg>
								MagicChat is real magic!
							</h2>
							<p className="text-white font-light">
								MagicChat is a universe where imagination knows no bounds.
								Unleash your curiosity, connect with legendary figures, and
								embark on extraordinary adventures, all with the power of
								conversation like never before. Join to talk to your favorite 
								characters with a free account now!
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* @ts-expect-error */}
			<a name="pricing"></a>
			<div className="flex flex-col flex-wrap justify-center text-black dark:text-white gap-x-8 py-8 px-4 md:px-12 bg-[linear-gradient(0deg,_rgba(255,255,255,1),_rgba(0,0,255,0)_70.71%),linear-gradient(180deg,_rgba(7,9,130,1),_rgba(7,9,130,1)_70.71%)]">
				<div className="flex flex-row gap-x-2 font-extrabold leading-relaxed text-3xl tracking-wide px-4 mb-8 md:mb-6 md:text-4xl max-w-screen-md justify-center self-center content-center justify-items-center text-center">	
					A great experience is 
					<span className="text-pink-500">priceless</span>
				</div>
				<div className="text-white max-w-xl items-center text-center my-6 font-light text-2xl self-center">
					Versatile pricing solutions for everyone, so that your kids enjoy their time talking to superheroes,
					and you not worrying about the bills.
				</div>

				<div className="self-center shadow shadow-slate-600 text-white px-6 py-10 max-w-sm my-6 rounded-lg bg-[linear-gradient(180deg,#0057ff,#8247ff)] flex flex-col">
					<span className="font-bold">STANDARD PLAN</span>
					<span className="font-thin pt-6 pb-2 flex flex-row gap-x-1">
						<span className="font-semibold text-3xl">$3</span>
						/ min
					</span>
					<span className="font-light pb-6">
						Designed for enhanced and rich conversation between your kids and characters.
					</span>

					<span className="font-bold py-4">
						What's included:
					</span>
					<ul className="font-light gap-y-1 flex flex-col list-disc px-4">
						<li>Talk to any character at a flat rate.</li>
						<li>Pay only for the text/voice generated, no time restrictions.</li>
						<li>A dirt-cheap rate of $0.002921 per letter of text generated.</li>
						<li>This price is indicative of a normal conversation, pay only per character.</li>
					</ul>

					<a href="/auth" className="self-center">
						<button className="px-6 py-2 bg-white font-bold max-w-fit rounded-md self-center mt-8 text-black hover:bg-slate-100">
							Signup Now
						</button>
					</a>

				</div>

			</div>

			<div className="flex flex-col gap-y-6 justify-center py-8 px-8 bg-white dark:text-black">
				<svg
					className="justify-between self-center"
					width="50"
					height="6"
					viewBox="0 0 50 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_52_48)">
						<path d="M0 0V5.14464H50C50 5.14464 27.3468 0 0 0Z" fill="black" />
					</g>
					<defs>
						<clipPath id="clip0_52_48">
							<rect width="50" height="5.14464" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<div className="flex flex-row flex-wrap justify-between gap-y-12 gap-x-8 py-8 px-4 md:px-12">
					<div className="flex flex-col max-w-max justify-center gap-8">
						<h2 className="flex text-4xl font-bold w-80">
							characters you love are just a chat away
						</h2>
						<a href="/auth" 
							rel="noopener noreferrer">
							<button className="flex px-8 py-4 text-white text-md bg-black rounded-md max-w-max flex-row gap-x-2 justify-center items-center hover:bg-slate-700">
								Start today
								<svg
									className="flex"
									width="15"
									height="15"
									viewBox="0 0 20 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.058 1.99834C19.0571 1.17086 18.384 0.500811 17.5546 0.501753L4.03934 0.517092C3.20998 0.518033 2.5384 1.18961 2.53934 2.01709C2.54028 2.84458 3.21338 3.51463 4.04274 3.51368L16.0563 3.50005L16.07 15.4864C16.0709 16.3139 16.744 16.9839 17.5734 16.983C18.4027 16.9821 19.0743 16.3105 19.0734 15.483L19.058 1.99834ZM3.06307 18.6146L18.6194 3.0583L16.4933 0.941798L0.936935 16.4981L3.06307 18.6146Z"
										fill="white"
									/>
								</svg>
							</button>
						</a>
					</div>
					<div className="flex flex-row">
						<Image
							src={SantaSmilingImage}
							width="519"
							height="431"
							alt="santa smiling"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
