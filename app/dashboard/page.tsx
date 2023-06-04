import * as React from "react"
import NavBar from './navbar'
import Footer from './footer'

const dashboard = () => {
    return (
        <main className="max-w-full w-screen overflow-x-clip bg-white">
            <NavBar />
            
            <Footer />
        </main>
    )
}

export default dashboard