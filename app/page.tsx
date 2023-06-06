// Landing Page

import Image from 'next/image'
import SantaSmilingImage from "../public/assets/santa_landing.png"
import Footer from './dashboard/footer'

export default function Home() {
  return (
		<main className="max-w-full w-screen overflow-x-clip">
			<div className="sticky w-full top-0 transition-all py-1.5 md:py-0.5 duration-200 z-50 text-[#ffffff] bg-[#340464] w-screen">
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
									<span> home </span>
								</button>
							</div>
							<a href="/about">
								<div className="text-white hover:bg-white text-sm font-medium hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition flex items-center cursor-pointer">
									about
								</div>
							</a>
							<div
								className="relative sm:hidden lg:block"
								data-headlessui-state=""
							>
								<button
									className="text-white hover:bg-white md:inline-flex hidden items-center text-sm font-medium focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group"
									type="button"
									aria-expanded="false"
									data-headlessui-state=""
									id="headlessui-popover-button-:R1dl6:"
								>
									<span> product </span>
								</button>
							</div>
						</nav>
						<div className="items-center justify-end hidden space-x-3 md:flex lg:flex-1 lg:w-0 flex-nowrap">
							<a
								href="/auth"
								rel="noopener noreferrer"
								className="font-semibold text-sm px-4 h-10 bg-teal-8 hover:bg-teal-9 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full bg-white hover:bg-opacity-90"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>

			<div
				className="my-4 rounded-4xl -mt-16 md:-mt-32"
				style={{
					background:
						"radial-gradient(60.87% 39.84% at 63.16% 60.16%, #860B7A 0%, #340464 100%)",
				}}
			>
				<div className="mb-22">
					<div className="-mt-20">
						<header className="jsx-1009e820c0ddca8b pb-20 overflow-hidden lg:pt-24 lg:-mt-24 md:pt-16 md:-mt-16">
							<div className="jsx-1009e820c0ddca8b max-w-[1224px] mx-auto ">
								<div className="jsx-1009e820c0ddca8b gap-6 px-8 pt-[135px] pb-0 md:pb-16 mb-[-20px] lg:mb-0 mx-auto mt-4 lg:pt-20 lg:grid xl:px-0 lg:grid-cols-12 lg:gap-y-20">
									<div className="jsx-1009e820c0ddca8b text-white lg:col-span-7 ">
										<h1 className="jsx-1009e820c0ddca8b text-5xl font-medium lg:text-7xl">
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

							<div className="jsx-1009e820c0ddca8b relative px-4 md:hidden">
								<div className="jsx-1009e820c0ddca8b aspect-w-[1.59] aspect-h-1 mt-20 rounded-3xl overflow-hidden z-0">
									{/* Cover photo here
                  <video src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679490972/glideapps.com/homepage/2023/1.1%20Apps%20anywhere%20%282023-03-22%29_med.mp4" poster="https://images.ctfassets.net/n3rcstr5ldte/1ulbYM9Qi8Ez10FwkMa6P7/13b37e0f0abb74f1f9bc08f9ca206da7/apps-that-work-anywhere.jpg?h=250" className="jsx-1009e820c0ddca8b object-cover w-full h-full">
                  </video> */}
								</div>
								<div className="jsx-1009e820c0ddca8b absolute bottom-5 left-5">
									<span className="jsx-1009e820c0ddca8b inline-flex items-center justify-center px-4 py-2 ml-3 text-xs text-white transition rounded-full whitespace-nowrap bg-alpha-dark-2 backdrop-blur">
										Apps that work anywhere
									</span>
								</div>
							</div>

							<div className="jsx-1009e820c0ddca8b origin-bottom-left scale-[0.8] md:scale-100 max-md:hidden">
								<div className="jsx-1009e820c0ddca8b relative w-screen">
									<div className="jsx-1009e820c0ddca8b items-end hidden pt-[30px] lg:pt-20 header-carousel lg:flex keen-slider flex">
										<div className="jsx-1009e820c0ddca8b keen-slider__slide flex-row ">
											{" "}
											{/* style="transform: translate3d(1565px, 0px, 0px);"> */}
											<article className="relative w-[560px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<video
															className="object-cover w-full h-full"
															src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679490972/glideapps.com/homepage/2023/1.1%20Apps%20anywhere%20%282023-03-22%29_med.mp4"
															poster="https://images.ctfassets.net/n3rcstr5ldte/1ulbYM9Qi8Ez10FwkMa6P7/13b37e0f0abb74f1f9bc08f9ca206da7/apps-that-work-anywhere.jpg"
														></video>
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
															Apps that work anywhere
														</button>
													</div>
												</a>
											</article>
										</div>

										<div className="jsx-1009e820c0ddca8b keen-slider__slide">
											{" "}
											{/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
											<article className="relative w-[590px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<video
															className="object-cover w-full h-full"
															src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679993537/glideapps.com/homepage/2023/4%20Data%20sources%20that%20sync%20and%20scale%20-%20STATIC%203x%2060fps_med.mp4"
															poster="https://images.ctfassets.net/n3rcstr5ldte/76TRrU7tNttLXnwnezigyE/5b4f25e555c9f8f7a99d9532ba55feda/data-sources-that-sync-and-scale.jpg"
														></video>
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/* style="background-color: rgba(0, 2, 5, 0.35);"> */}
															Make your christmas great in a click!
														</button>
													</div>
													<div className="absolute bottom-5 right-5">
														<figure className="h-[31px]">
															<img
																alt="buttons image"
																sizes="100vw"
																src="/_next/image?url=%2Fimages%2Fhomepage-2023%2Fhome-header%2Fbuttons.svg&amp;w=3840&amp;q=75"
																decoding="async"
																data-nimg="fill"
																className="object-contain w-full h-full"
															/>{" "}
															{/* style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" /> */}
														</figure>
													</div>
												</a>
											</article>
										</div>

										<div className="jsx-1009e820c0ddca8b keen-slider__slide">
											{" "}
											{/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
											<article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<video
															className="object-cover w-full h-full"
															src="https://res.cloudinary.com/glide/video/upload/v1679490951/glideapps.com/homepage/2023/1.2%20Drag-and-drop%20components_med.mp4"
															poster="https://images.ctfassets.net/n3rcstr5ldte/29CGkwdvm5xykSjTJsSbnr/5398a3f52b7402523779218dfa0b1e17/drag-and-drop-components.jpg"
														></video>
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
															Talk to birthday fairy in a click!
														</button>
													</div>
												</a>
											</article>
										</div>

										<div className="jsx-1009e820c0ddca8b keen-slider__slide">
											{" "}
											{/* style="transform: translate3d(-1171px, 0px, 0px);">*/}
											<article className="relative w-[560px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<video
															className="object-cover w-full h-full"
															src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679935855/glideapps.com/homepage/2023/5%20Build%20Custom%20Workflows%203x%2029_med.mp4"
															poster="https://images.ctfassets.net/n3rcstr5ldte/1jMqGHPpgZnN24emt0jj89/76326ff60b7270657b36fab7367cdfcf/build-custom-workflows.jpg"
														></video>
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/* style="background-color: rgba(245, 249, 255, 0.07);"> */}
															Kids love it and you will too.
														</button>
													</div>
												</a>
											</article>
										</div>

										<div className="jsx-1009e820c0ddca8b keen-slider__slide">
											{" "}
											{/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
											<article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<video
															className="object-cover w-full h-full"
															src="https://res.cloudinary.com/glide/video/upload/v1679490862/glideapps.com/homepage/2023/1.6%20Share%20apps%20with%20one%20click_med.mp4"
															poster="https://images.ctfassets.net/n3rcstr5ldte/3En5tH23tjmnhZaAiHE77Y/7287ad4e4611da31e5ee8c3f9a8b39cf/share-apps-with-one-click.jpg"
														></video>
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
															Share apps with one click
														</button>
													</div>
												</a>
											</article>
										</div>

										<div className="jsx-1009e820c0ddca8b keen-slider__slide">
											{" "}
											{/*style="transform: translate3d(-1171px, 0px, 0px);">*/}
											<article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
												<a href="#" className="pointer-events-none select-none">
													<figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
														<img
															alt="Image Integrate with tools you love"
															sizes="100vw"
															src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3rcstr5ldte%2F4k41fa9gYhPFahBw2ipmvs%2F59875640fb701539ebb4c520bfb18f47%2FComponent.png&amp;w=3840&amp;q=75"
															decoding="async"
															data-nimg="fill"
															className="object-contain w-full h-full max-h-[370px]"
														/>{" "}
														{/* style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" /> */}
													</figure>
													<div className="absolute bottom-5 left-5">
														<button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap">
															{" "}
															{/* style="background-color: rgba(245, 249, 255, 0.07);"> */}
															Integrate with tools you love
														</button>
													</div>
												</a>
											</article>
										</div>
									</div>
								</div>
							</div>
						</header>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center py-32 self-center gap-y-12 justify-self-center">
				<div className="flex flex-row font-bold text-4xl max-w-screen-md justify-center self-center content-center justify-items-center text-center">
					Unleash Your Imagination with AI-Powered Avatar Talk!
				</div>
				<div
					className="flex flex-row flex-wrap gap-x-12 gap-y-12 max-w-screen-lg self-center px-20 py-20 rounded-lg bg-black"
					style={{
						background:
							"radial-gradient(85.14% 577.3% at 8.67% 46.68%, #1A16E2 0%, #031DA2 0%, #9732E6 45.18%, #9C0935 92.96%)",
					}}
				>
					<div className="flex flex-col w-1/2 justify-between gap-y-12 flex-wrap min-w-[260px] max-w-[380px]">
						<div>
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
							<p className="text-white">
								Meet your legendary characters and superheroes come to life on
								your screen! Prepare to embark on an unparalleled interactive
								experience that will transport you into the world of your
								dreams.
							</p>
						</div>
						<div>
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
							<p className="text-white">
								Talk to beloved holiday figures like Santa Claus, and an array
								of legendary characters from folklore and pop culture. Immerse
								yourself in their fascinating stories, or simply enjoy a
								light-hearted chat filled with laughter and surprises.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-1/2 justify-between gap-y-12 min-w-[260px] max-w-[380px] flex-wrap">
						<div>
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
							<p className="text-white">
								Ask them burning questions, and discover hidden depths to their
								personalities. Experience the thrill of engaging with your
								favorite characters, as we bring them to life with stunning
								realism.
							</p>
						</div>
						<div>
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
							<p className="text-white">
								MagicChat AI is a universe where imagination knows no bounds.
								Unleash your curiosity, connect with legendary figures, and
								embark on extraordinary adventures, all with the power of
								conversation like never before.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-y-6 justify-center py-8 px-8">
				<svg
					className="justify-between self-center"
					width="50"
					height="6"
					viewBox="0 0 50 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_52_48)">
						<path d="M0 0V5.14464H50C50 5.14464 27.3468 0 0 0Z" fill="black" />
					</g>
					<defs>
						<clipPath id="clip0_52_48">
							<rect width="50" height="5.14464" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<div className="flex flex-row flex-wrap justify-between gap-y-8 py-8 px-12">
					<div className="flex flex-col max-w-max justify-center gap-8">
						<h2 className="flex text-4xl font-bold w-80">
							characters you love are just a chat away
						</h2>
						<a href="/auth" 
							rel="noopener noreferrer">
							<button className="flex px-8 py-4 text-white text-md bg-black rounded-md max-w-max flex-row gap-x-2 justify-center items-center hover:bg-[#1e1e1e]">
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
