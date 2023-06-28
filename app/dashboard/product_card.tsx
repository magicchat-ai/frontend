'use client'

import * as React from "react"
import Image from "next/image"

type PropsType =  {
    image_url: string,
    name: string,
    tagline: string,
    price: number,
    uuid: string,
    setModal: any,
    user_id: string | undefined,
}

const ProductCard = (props: PropsType) => {
    return (
        <div 
            onClick={() => props.setModal(props)}
            className="flex cursor-pointer flex-col max-w-64 px-4 py-4 gap-y-2 hover:bg-slate-100 rounded-md ">
            <div className="flex max-w-max mb-4 max-w-[240px] h-[280px]">
                <Image alt={props.name} width="270" height="200" src={props.image_url} />
            </div>
            <div className="flex flex-row justify-between">
                <span className="flex text-black font-bold">{props.name}</span>
                <span className="flex text-black font-bold">${props.price}</span>
            </div>
            <div className="flex flex-col text-slate-600 dark:text-slate-600 text-sm">{props.tagline}</div>
        </div>
    )
}

export default ProductCard