import * as React from "react"
import { db } from '../firebase'
import { addDoc, collection } from "firebase/firestore"

type IPropsType = {
    user_id: string | undefined,
    setAddingReview: React.Dispatch<boolean>,
    setModal: any
}

async function handleSubmitReview(e: any, props: IPropsType, comment: string | undefined) {
    if(!comment?.trim().length) return

    await addDoc(collection(db, 'reviews'), {
        content: comment,
        time: new Date(),
        user_id: props.user_id,
    })

    props.setModal({})
}

const AddReview = (props: IPropsType) => {
    const [comment, setComment] = React.useState<string>()

    return <div className="absolute flex flex-row inset-0 w-screen h-screen bg-slate-900 bg-opacity-60 z-40">
        <div className="flex flex-col m-auto py-8 px-12 gap-y-4 w-full max-w-screen-sm bg-white rounded-lg text-black dark:text-black dark:bg-white">
            <div className="flex flex-col font-bold text-lg">Leave a Comment</div>
            <div className="flex flex-col w-full gap-y-4">
                <textarea className="border border-slate-400 rounded-md px-2 py-2" rows={4} placeholder="What did you feel good today?" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <div className="flex flex-row gap-x-2 justify-between flex-wrap">
                    <button className="rounded-md px-4 py-2 bg-green-500 dark:bg-green-500 hover:bg-green-600 text-white font-bold" onClick={(e) => handleSubmitReview(e, props, comment)}>Submit</button>
                    <button className="rounded-md px-4 py-2 bg-slate-200 dark:bg-slate-400 hover:bg-slate-500" onClick={() => props.setModal({})}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
}

export default AddReview