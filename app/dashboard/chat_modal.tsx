"use client";

import * as React from "react";
import scrollIntoView from 'scroll-into-view-if-needed'

type PropsType = {
	name: string;
	setChat: any;
};

const ChatModal = (props: PropsType) => {
	const [chatList, setChatList] = React.useState([
        {'role': props.name, 'content': 'Ho ho ho! Hello kid, I am Santa. It\'s Christmas time. What do you want?'}
    ]);

	const bottomRef = React.useRef<HTMLInputElement>(null);
    const [messageTrigger, setMessageTrigger] = React.useState(1)
    const [prompt, setPrompt] = React.useState('')

    React.useEffect(() => {
        console.log("triggered")
        scrollIntoView(bottomRef.current, {
          scrollMode: 'if-needed',
          block: 'nearest',
          inline: 'nearest',
        })
    }, [messageTrigger]);
    
    function handleTextChange(e: any) {
        e.target.style.height = "auto";

        if (e.target.scrollHeight <= 100) {
            e.target.style.height = e.target.scrollHeight + "px";
            e.target.style.overflowY = "hidden";
        } else {
            e.target.style.height = "100px";
            e.target.style.overflowY = "scroll";
        }
        setPrompt(e.target.value)
    }

    function handleSubmitPrompt(e: any) {
        e.preventDefault()
        let newChat = {"role": 'user', "content": prompt}
        let newChats = chatList.concat([newChat])
    
        setChatList(newChats)
        setPrompt('')
        setMessageTrigger((state) => state+1)

        let response = "sample response"
        let modifiedChat = newChats.concat([{'role': 'Ghostwriter', 'content': response}])

        setChatList(modifiedChat)
        setPrompt('')
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }

	const renderedChatList = chatList.map((chat, index) => (
		<div key={index} className="bg-white text-lg lg:text-xl text-black rounded-lg py-4 px-4 self-center items-end w-[32em] overflow-x-auto flex-wrap">
            {chat.content}
        </div>
	));

	return (
		<div className="px-12 flex flex-col w-full bg-white rounded-t-2xl pt-12">
			<div className="flex flex-row w-full max-w-screen-md mx-auto pb-8 justify-between">
				<span className="text-black font-semibold text-2xl">
					Talking to {props.name}
				</span>
				<svg
					width="33"
					height="29"
					viewBox="0 0 33 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.39793 1.95412C10.4213 1.95412 12.2729 2.42612 15.2753 5.27626L16.7634 6.68824L18.2296 5.25311C20.314 3.21212 22.5321 1.94405 24.0182 1.94405C26.0222 1.94405 27.6022 2.60425 29.1425 4.08568C30.5941 5.48056 31.3941 7.33637 31.3941 9.30993C31.3951 11.2845 30.5962 13.1413 29.129 14.5523C29.0099 14.669 22.7002 21.2288 17.414 26.7268C17.1654 26.9552 16.8804 26.9884 16.7289 26.9884C16.5796 26.9884 16.2987 26.9562 16.0501 26.7338C14.7625 25.353 5.42541 15.3484 4.34038 14.3037C2.88776 12.9068 2.08782 11.05 2.08782 9.07644C2.08782 7.10288 2.88776 5.24808 4.34142 3.85119C5.75436 2.49053 7.40854 1.95412 9.39793 1.95412ZM9.39793 -0.0586927C6.89996 -0.0586927 4.69857 0.660886 2.86582 2.42612C-0.955275 6.09849 -0.955275 12.0534 2.86582 15.7278C3.95712 16.7795 14.5443 28.1297 14.5443 28.1297C15.1479 28.7114 15.9394 29.0002 16.73 29.0002C17.5205 29.0002 18.309 28.7114 18.9136 28.1297C18.9136 28.1297 30.4949 16.083 30.6181 15.9633C34.4372 12.2879 34.4372 6.33198 30.6181 2.65961C28.7217 0.834995 26.6028 -0.0697632 24.0192 -0.0697632C21.5505 -0.0697632 18.7977 1.82731 16.7415 3.84012C14.6205 1.82731 11.9533 -0.0586927 9.39898 -0.0586927H9.39793Z"
						fill="black"
					/>
				</svg>
			</div>
			<div className="flex flex-col rounded-lg justify-seperated h-full py-6 w-full max-w-screen-md mx-auto min-h-screen bg-[url('https://images.unsplash.com/photo-1543258103-a62bdc069871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')] bg-center bg-cover bg-no-repeat bg-fixed">
				<div className="flex gap-y-2 flex-col grow w-full max-w-prose items-center self-center justify-end py-4">
					{renderedChatList}
				</div>
				<div className="flex flex-row">
					<textarea 
                        rows={1} 
                        onChange={handleTextChange} 
                        value={prompt}
                        onKeyDown={(e) => { if(e.key==='Enter') handleSubmitPrompt(e) }} 
                        className="rounded-lg px-4 py-2 mx-auto w-full max-w-prose" placeholder="Type your message..."></textarea>
                        <div ref={bottomRef}></div>
				</div>
			</div>
		</div>
	);
};

export default ChatModal;
