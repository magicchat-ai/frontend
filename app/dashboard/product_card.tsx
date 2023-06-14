'use client'

import * as React from "react"
import Image from "next/image"

type PropsType =  {
    image_url: string,
    name: string,
    tagline: string,
    price: number,
    uuid: string,
    setModal: any
}

const ProductCard = (props: PropsType) => {
    return (
        <div className="flex cursor-pointer flex-col max-w-64 px-4 py-4 gap-y-2 hover:shadow-lg hover:shadow-slate-400 rounded-lg ">
            <div className="flex max-w-max mb-4 max-w-[250px] h-[300px]">
                <Image alt={props.name} width="240" height="300" src={props.image_url} />
            </div>
            <div className="flex flex-row justify-between">
                <span className="flex text-black font-bold">{props.name}</span>
                <span className="flex text-black font-bold">${props.price}</span>
            </div>
            <div className="flex flex-col text-slate-600 dark:text-slate-600 text-sm">{props.tagline}</div>
            <button onClick={() => props.setModal(props)} className="flex flex-row rounded-full border-[#1e1e1e] border max-w-max mt-4 py-2 px-6 font-bold text-[#1e1e1e]">Talk now</button>
        </div>
    )
}

export default ProductCard