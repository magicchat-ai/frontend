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
            className="flex cursor-pointer flex-col max-w-64 gap-y-2 hover:shadow-md border-slate-200 border hover:shadow-slate-100 rounded-xl">
            <div className="flex rounded-t-xl max-w-max mb-4 max-w-[220px] h-[240px]">
                <Image alt={props.name} className="rounded-t-xl" width="270" height="200" src={props.image_url} />
            </div>
            <div className="flex flex-row justify-between px-4">
                <span className="flex text-black font-bold">{props.name}</span>
                <span className="flex text-black font-bold">${props.price}</span>
            </div>
            <div className="flex flex-row max-w-[220px] text-slate-600 px-4 pb-4 flex-wrap dark:text-slate-600 text-sm">{props.tagline}</div>
        </div>
    )
}

export default ProductCard