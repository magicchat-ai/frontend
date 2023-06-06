'use client'

import * as React from "react"
import Image from "next/image"

type PropsType =  {
    image_url: string,
    name: string,
    tagline: string,
    price: number,
    modal: object,
    setModal: React.Dispatch<object>
}

const ProductCard = (props: PropsType) => {
    return (
        <div className="flex flex-col w-56">
            <div className="flex max-w-max mb-4">
                <Image alt={props.name} width="600" height="100" src={props.image_url} />
            </div>
            <div className="flex flex-row justify-between">
                <span className="flex text-black font-bold">{props.name}</span>
                <span className="flex text-black font-bold">${props.price}</span>
            </div>
            <div className="flex flex-col text-gray text-sm">{props.tagline}</div>
            <button onClick={() => props.setModal(props)} className="flex flex-row rounded-full border-[#1e1e1e] border max-w-max mt-4 py-2 px-6 font-bold text-[#1e1e1e]">Talk now</button>
        </div>
    )
}

export default ProductCard