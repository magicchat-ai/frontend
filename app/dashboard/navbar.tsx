import * as React from "react"

export default function NavBar(){
    return (
        <div className="sticky w-full top-0 transition-all py-1.5 md:py-0.5 duration-200 z-20 text-black-400 bg-white w-screen dark:text-white dark:bg-black">
            <div className="mx-auto sm:px-7 px-4 dark:text-white w-full ">
                <div className="relative flex items-center justify-between py-3">
                    <div className="flex justify-start xl:flex-1">
                        <a href="/" className="text-black">
                            <span className="text-black-700 flex flex-row gap-x-2 font-bold text-lg">
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
                                        fill="blue"
                                    />
                                </svg>
                                MagicChat
                            </span>
                        </a>
                    </div>
                    <div className="flex -my-2 -mr-2 md:hidden">
                        <a
                            href="/auth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm px-4 h-9 bg-teal-8 hover:bg-teal-9 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full"
                        >
                            My account
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
                                className="text-black hover:bg-slate-500 md:inline-flex hidden items-center whitespace-nowrap text-sm font-medium focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                id="headlessui-popover-button-:R15l6:"
                            >
                                <span> home </span>
                            </button>
                        </div>
                        <div
                            className="relative sm:hidden lg:block"
                            data-headlessui-state=""
                        >
                            <button
                                className="text-black hover:bg-slate-500 md:inline-flex hidden items-center text-sm font-medium focus:outline-none group  hover:bg-opacity-10 py-2 px-3 xl:px-3.5 rounded-full transition group"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                id="headlessui-popover-button-:R1dl6:"
                            >
                                <span> about </span>
                            </button>
                        </div>
                    </nav>
                    <div className="items-center justify-end hidden space-x-3 md:flex lg:flex-1 lg:w-0 flex-nowrap">
                        <a
                            href="/auth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm px-4 h-10 bg-[#dfdfdf] hover:bg-slate-200 text-black focus-visible:shadow-button-focus-aqua group whitespace-nowrap tracking-[-0.01em] transition inline-flex items-center justify-center rounded-full bg-white hover:bg-opacity-90"
                        >
                            My Account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}