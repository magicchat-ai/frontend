// Landing Page

import Image from 'next/image'
import Footer from './dashboard/footer'

export default function Home() {
  return (
    <main className="max-w-full w-screen">
      <div className="sticky max-w-screen-lg top-0 transition-all py-1.5 md:py-0.5 duration-200 z-50 text-[#ffffff] bg-black w-screen" >
        <div className="mx-auto sm:px-7 px-4 dark:text-white max-w-screen-lg">
          <div className="relative flex items-center justify-between py-3">
            <div className="flex justify-start xl:flex-1">
              <a href="/" className="text-[#ffffff]">
                <span className="text-white-700"> MagicChat </span>
              </a>
            </div>
            <div className="flex -my-2 -mr-2 md:hidden">
              <a href="/auth" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm px-4 h-9 bg-teal-8 hover:bg-teal-9 text-white focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full">
                Sign up
              </a>
              <button className="inline-flex items-center justify-center p-2 ml-2 text-gray-400 rounded-md focus:outline-none" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R956:">
                <span className="sr-only">Open menu</span>
                <svg width="20" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h20v2H0V0zM0 5h20v2H0V5zM0 10h20v2H0v-2z" fill="white"></path>
                </svg>
              </button>
            </div>
            <nav className="hidden ml-4 xl:ml-0 md:flex md:flex-1 justify-end gap-x-2 px-2">
              <div className="relative" data-headlessui-state="">
                <button className="text-white hover:bg-white md:inline-flex hidden items-center whitespace-nowrap text-sm font-normal focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R15l6:">
                  <span> home </span>
                </button>
              </div>
              <a href="/about">
                <div className="text-white hover:bg-white text-sm font-normal hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition flex items-center cursor-pointer">
                  about
                </div>
              </a>
              <div className="relative sm:hidden lg:block" data-headlessui-state="">
                <button className="text-white hover:bg-white md:inline-flex hidden items-center text-sm font-normal focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:R1dl6:">
                  <span> product </span>
                </button>
              </div>
            </nav>
            <div className="items-center justify-end hidden space-x-3 md:flex lg:flex-1 lg:w-0 flex-nowrap">
              <a href="https://go.glideapps.com?signUp" target="_blank" rel="noopener noreferrer" className="font-semibold text-sm px-4 h-10 bg-teal-8 hover:bg-teal-9 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full bg-white">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 rounded-4xl -mt-16 md:-mt-32">
        <div className="mb-22">
          <div className="-mt-20">

            <header className="jsx-1009e820c0ddca8b pb-20 overflow-hidden bg-black lg:pt-24 lg:-mt-24 md:pt-16 md:-mt-16">
              <div className="jsx-1009e820c0ddca8b max-w-[1224px] mx-auto ">
                <div className="jsx-1009e820c0ddca8b gap-6 px-8 pt-[135px] pb-0 md:pb-16 mb-[-20px] lg:mb-0 mx-auto mt-4 lg:pt-20 lg:grid xl:px-0 lg:grid-cols-12 lg:gap-y-20">
                  <div className="jsx-1009e820c0ddca8b text-white lg:col-span-7 ">
                    <h1 className="jsx-1009e820c0ddca8b text-5xl font-medium lg:text-7xl">
                      Enjoy talking to your favorite characters
                    </h1>
                  </div>
                  <div className="jsx-1009e820c0ddca8b lg:col-start-9 lg:col-span-4">
                    <p className="jsx-1009e820c0ddca8b max-w-3xl mt-4 text-[#f5f9ffc4] text-[20px] leading-[26px] lg:mt-8">
                      Talk to Santa, Easter Bunny, Birthday Fairy and many more characters. 
                    </p>
                    <div className="jsx-1009e820c0ddca8b mt-8">
                      <a href="/auth" target="_blank" rel="noopener noreferrer" className="bg-[#18BED4] text-md lg:text-btn h-11 px-5 font-semibold bg-teal-8 hover:bg-teal-9 text-white focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full">
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
                    <div className="jsx-1009e820c0ddca8b keen-slider__slide flex-row "> {/* style="transform: translate3d(1565px, 0px, 0px);"> */}
                      <article className="relative w-[560px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <video className="object-cover w-full h-full" src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679490972/glideapps.com/homepage/2023/1.1%20Apps%20anywhere%20%282023-03-22%29_med.mp4" playsinline="" poster="https://images.ctfassets.net/n3rcstr5ldte/1ulbYM9Qi8Ez10FwkMa6P7/13b37e0f0abb74f1f9bc08f9ca206da7/apps-that-work-anywhere.jpg">
                            </video>
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap" > {/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
                              Apps that work anywhere
                            </button>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="jsx-1009e820c0ddca8b keen-slider__slide"> {/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
                      <article className="relative w-[590px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <video className="object-cover w-full h-full" src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679993537/glideapps.com/homepage/2023/4%20Data%20sources%20that%20sync%20and%20scale%20-%20STATIC%203x%2060fps_med.mp4" autoplay="" loop="" playsinline="" poster="https://images.ctfassets.net/n3rcstr5ldte/76TRrU7tNttLXnwnezigyE/5b4f25e555c9f8f7a99d9532ba55feda/data-sources-that-sync-and-scale.jpg">
                            </video>
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap"> {/* style="background-color: rgba(0, 2, 5, 0.35);"> */}
                              Make your christmas great in a click!
                            </button>
                          </div>
                          <div className="absolute bottom-5 right-5">
                            <figure className="h-[31px]">
                              <img alt="buttons image" sizes="100vw" src="/_next/image?url=%2Fimages%2Fhomepage-2023%2Fhome-header%2Fbuttons.svg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" className="object-contain w-full h-full" /> {/* style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" /> */}
                            </figure>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="jsx-1009e820c0ddca8b keen-slider__slide"> {/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
                      <article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <video className="object-cover w-full h-full" src="https://res.cloudinary.com/glide/video/upload/v1679490951/glideapps.com/homepage/2023/1.2%20Drag-and-drop%20components_med.mp4" poster="https://images.ctfassets.net/n3rcstr5ldte/29CGkwdvm5xykSjTJsSbnr/5398a3f52b7402523779218dfa0b1e17/drag-and-drop-components.jpg">
                            </video>
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap"> {/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
                              Talk to birthday fairy in a click!
                            </button>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="jsx-1009e820c0ddca8b keen-slider__slide"> {/* style="transform: translate3d(-1171px, 0px, 0px);">*/}
                      <article className="relative w-[560px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <video className="object-cover w-full h-full" src="https://res.cloudinary.com/glide/video/upload/w_1224/v1679935855/glideapps.com/homepage/2023/5%20Build%20Custom%20Workflows%203x%2029_med.mp4" poster="https://images.ctfassets.net/n3rcstr5ldte/1jMqGHPpgZnN24emt0jj89/76326ff60b7270657b36fab7367cdfcf/build-custom-workflows.jpg"></video>
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap"> {/* style="background-color: rgba(245, 249, 255, 0.07);"> */}
                              Kids love it and you will too.
                            </button>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="jsx-1009e820c0ddca8b keen-slider__slide"> {/* style="transform: translate3d(-1171px, 0px, 0px);"> */}
                      <article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <video className="object-cover w-full h-full" src="https://res.cloudinary.com/glide/video/upload/v1679490862/glideapps.com/homepage/2023/1.6%20Share%20apps%20with%20one%20click_med.mp4" poster="https://images.ctfassets.net/n3rcstr5ldte/3En5tH23tjmnhZaAiHE77Y/7287ad4e4611da31e5ee8c3f9a8b39cf/share-apps-with-one-click.jpg"></video>
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap" > {/*style="background-color: rgba(245, 249, 255, 0.07);">*/}
                              Share apps with one click
                            </button>
                          </div>
                        </a>
                      </article>
                    </div>

                    <div className="jsx-1009e820c0ddca8b keen-slider__slide"> {/*style="transform: translate3d(-1171px, 0px, 0px);">*/}
                      <article className="relative w-[294px] h-[352px] cursor-pointer mr-6">
                        <a href="#" className="pointer-events-none select-none">
                          <figure className="relative w-full h-full overflow-hidden rounded-3xl bg-neutrals-opaque-13">
                            <img alt="Image Integrate with tools you love" sizes="100vw" src="/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3rcstr5ldte%2F4k41fa9gYhPFahBw2ipmvs%2F59875640fb701539ebb4c520bfb18f47%2FComponent.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" className="object-contain w-full h-full max-h-[370px]" /> {/* style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" /> */}
                          </figure>
                          <div className="absolute bottom-5 left-5">
                            <button className="jsx-c5f8a238cb774370 inline-flex items-center justify-center px-4 py-2 text-xs text-white transition rounded-full whitespace-nowrap"> {/* style="background-color: rgba(245, 249, 255, 0.07);"> */}
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

      {/* <Footer /> */}
    </main>
  )
}
