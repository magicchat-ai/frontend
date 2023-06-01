function Footer() {
    return (
        <div className="flex w-full max-w-screen-lg flex-col">
            <div className="w-full h-2 bg-white"></div>
            <div className="w-full px-2 py-8 flex-col">
                <div className="w-full flex-row">
                    <div className="flex">
                        <h3 className="text-lg text-black-700"> Sign up to our newsletter </h3>
                        <span className="text-sm text-gray-400">
                            Stay up-to-date with the latest news, announcements, and new characters we launch.
                        </span>
                    </div>
                    <div className="">
                        <input type="email" className="br-gray px-2 py-2" placeholder="Enter your email" />
                        <button className="text-white bg-black px-4 py-2 rounded-md"> Subscribe </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer