function Footer() {
    return (
			<>
				<div className="w-full h-8 flex-wrap" 
                    style={{background: "linear-gradient(to right, #FBFF28, #FD26DA)",
                            borderRadius: "15px 15px 0px 0px"}}></div>
				<div className="flex w-full flex-wrap px-8 flex-col">
					<div className="w-full py-8 flex-col">
						<div className="flex gap-x-4 w-full flex-wrap py-2 flex-row justify-between">
							<div className="flex max-w-max flex-col">
								<h3 className="text-2xl text-black font-bold">
									Sign up to our newsletter
								</h3>
								<span className="text-sm text-[#6C6C6C]">
									Stay up-to-date with the latest news, announcements, and new
									characters we launch.
								</span>
							</div>
							<div className="flex max-w-max max-h-max flex-wrap gap-y-2 flex-row">
								<input
									type="email"
									className="max-h-10 px-2 py-2 border-slate-500"
									placeholder="Enter your email"
								/>
								<button className="max-h-10 hover:bg-slate-800 text-white bg-black px-4 py-2 rounded-md">
									Subscribe
								</button>
							</div>
						</div>
						<div className="py-4 flex flex-row gap-x-2 flex-wrap justify-between">
							<div data-name="column-one" className="flex flex-col py-4">
								<span className="text-lg text-black-800 font-bold flex gap-x-2 flex-row">
									<svg
										width="32"
										height="25"
										viewBox="0 0 32 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12.0301 1.00057C7.67507 3.02405 -2.43986 15.2385 1.16708 20.6928C4.7741 26.1472 21.8892 25.7349 27.3617 23.1922C30.8218 21.5845 34.6371 16.2852 28.9786 7.7287C23.3202 -0.827696 15.4061 -0.568014 12.0301 1.00057ZM15.8535 8.70861C17.1336 5.4428 18.9623 2.93539 18.9623 2.93539C18.9623 2.93539 21.5851 4.44807 22.8192 5.65903C22.9243 5.76221 23.033 5.86675 23.1441 5.97395C24.3382 7.12445 25.8234 8.55575 26.3686 11.3614C27.5029 17.1991 24.975 21.0872 24.975 21.0872C24.975 21.0872 25.913 16.5556 24.2359 12.8247C23.2698 10.6755 19.4128 7.63504 19.4128 7.63504C19.4128 7.63504 18.64 9.67383 16.9559 11.8235C16.6904 12.1623 16.4538 12.4823 16.2272 12.7886C15.0172 14.4252 14.098 15.6684 10.6225 17.2832C8.08685 18.4614 3.25632 18.6057 3.25632 18.6057C3.25632 18.6057 8.76263 17.2268 12.1634 14.6954C14.6218 12.8657 14.7853 12.2594 15.1707 10.8303C15.3184 10.2825 15.4986 9.61365 15.8535 8.70861Z"
											fill="#4A13E7"
										/>
									</svg>
									MagicChat
								</span>
								<span className="text-sm text-[#6C6C6C]">
									Talk to characters and avatars your kids love.
								</span>
							</div>
							<div data-name="column-two" className="flex gap-y-3 flex-col">
								<span className="text-md text-[#6C6C6C] font-semibold">
									{" "}
									Product{" "}
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Overview </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Features </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Pricing </a>
								</span>
							</div>
							<div data-name="column-three" className="flex flex-col gap-y-3">
								<span className="text-md text-[#6C6C6C] text-gray font-semibold">
									{" "}
									Company{" "}
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> About </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Careers </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Contact </a>
								</span>
							</div>
							<div data-name="column-four" className="gap-y-3 flex flex-col">
								<span className="text-md text-[#6C6C6C] text-gray font-semibold">
									{" "}
									Social{" "}
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> LinkedIn </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Twitter </a>
								</span>
								<span className="text-md font-semibold text-black">
									<a href="#"> Facebook </a>
								</span>
							</div>
						</div>
						<hr />
						<div className="flex flex-row flex-wrap py-8 gap-y-8 text-sm justify-between">
							<div className="flex text-[#6C6C6C]">
								&copy; 2023 MagicChat, Inc. All rights reserved. Designed and developed by Ayush
								Anand
							</div>
							<div className="flex gap-x-3">
								<a href="#twitter">
									{" "}
									<svg
										width="30"
										height="28"
										viewBox="0 0 30 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.60578 27.6719C20.8154 27.6719 26.9468 17.2828 26.9468 8.27444C26.9468 7.9787 26.9468 7.68519 26.9289 7.39278C28.1216 6.42913 29.151 5.23267 29.9694 3.86365C28.8584 4.41525 27.6775 4.77699 26.47 4.93648C27.7414 4.08416 28.6935 2.74512 29.1495 1.1651C27.9523 1.95926 26.6438 2.51975 25.2788 2.82048C22.9706 0.0757789 19.1103 -0.0572028 16.6551 2.52467C15.0732 4.18943 14.4004 6.67156 14.892 9.0391C9.99196 8.76331 5.42612 6.17483 2.33073 1.91657C0.713233 5.03175 1.54055 9.01547 4.21856 11.0158C3.24866 10.9843 2.29954 10.6922 1.45143 10.1638V10.2504C1.45292 13.4952 3.49819 16.2891 6.34107 16.9321C5.44394 17.2062 4.50226 17.2459 3.59028 17.0482C4.38789 19.8262 6.67675 21.7288 9.28347 21.7837C7.12531 23.681 4.45918 24.7113 1.71433 24.708C1.23012 24.7063 0.745909 24.6747 0.263184 24.6099C3.05111 26.6103 6.29354 27.6719 9.60578 27.6669"
											fill="black"
										/>
									</svg>
								</a>
								<a href="#github">
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.9553 0.634033C21.475 0.634033 27.5706 6.83043 27.5706 14.4755C27.5706 20.5896 23.6739 25.7763 18.2673 27.6083C17.577 27.7446 17.3319 27.3124 17.3319 26.9438C17.3319 26.4875 17.3482 24.9972 17.3482 23.145C17.3482 21.8544 16.9125 21.0121 16.4237 20.5828C19.4559 20.2399 22.6419 19.0693 22.6419 13.753C22.6419 12.241 22.1136 11.0072 21.2395 10.0379C21.3811 9.68823 21.8481 8.28036 21.106 6.37416C21.106 6.37416 19.9651 6.00328 17.3659 7.79338C16.2781 7.48693 15.1126 7.33274 13.9553 7.32734C12.798 7.33274 11.6339 7.48693 10.5474 7.79338C7.94548 6.00328 6.8018 6.37416 6.8018 6.37416C6.06249 8.28036 6.52949 9.68823 6.66973 10.0379C5.79971 11.0072 5.26735 12.241 5.26735 13.753C5.26735 19.0558 8.44653 20.2443 11.4705 20.594C11.0811 20.9396 10.7285 21.5492 10.6059 22.4443C9.82984 22.798 7.85834 23.4101 6.64385 21.2947C6.64385 21.2947 5.92361 19.9648 4.55663 19.8676C4.55663 19.8676 3.22914 19.8501 4.46404 20.7087C4.46404 20.7087 5.35585 21.1339 5.97535 22.7337C5.97535 22.7337 6.77457 25.2041 10.5624 24.3671C10.5692 25.5241 10.5814 26.6144 10.5814 26.9438C10.5814 27.3097 10.3309 27.7379 9.65148 27.6096C4.24075 25.7804 0.339966 20.591 0.339966 14.4755C0.339966 6.83043 6.43691 0.634033 13.9553 0.634033Z"
											fill="black"
										/>
									</svg>
								</a>
								<a href="#linkedin">
									<svg
										width="27"
										height="27"
										viewBox="0 0 27 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M24.2244 0.0177126H2.53113C2.25152 0.00461629 1.97206 0.0467816 1.70877 0.141819C1.44548 0.236857 1.20352 0.382881 0.996727 0.571527C0.789951 0.760188 0.622401 0.987781 0.503697 1.24126C0.384994 1.49475 0.317444 1.76916 0.304932 2.04878V23.7893C0.321311 24.3744 0.561123 24.9313 0.975115 25.3451C1.38911 25.7591 1.94588 25.999 2.53113 26.0154H24.2244C24.7933 25.99 25.3297 25.7427 25.7185 25.3266C26.1074 24.9105 26.3177 24.3587 26.3043 23.7893V2.04878C26.309 1.77661 26.258 1.50639 26.1545 1.25463C26.051 1.00289 25.8971 0.774942 25.7023 0.584753C25.5076 0.39458 25.2761 0.2462 25.0219 0.148692C24.7678 0.051185 24.4964 0.00661486 24.2244 0.0177126ZM8.42974 21.6933H4.64358V10.1081H8.42974V21.6933ZM6.62604 8.3532C6.36183 8.36241 6.09857 8.31688 5.85281 8.21949C5.60704 8.1221 5.38406 7.97493 5.1979 7.78725C5.01173 7.59956 4.86638 7.37541 4.771 7.12887C4.67559 6.88234 4.63222 6.61874 4.64358 6.35463C4.6319 6.08767 4.67615 5.82123 4.7735 5.57238C4.87085 5.32352 5.01914 5.09776 5.20886 4.90959C5.39859 4.7214 5.62555 4.57495 5.87519 4.47964C6.12485 4.38431 6.39167 4.34222 6.65854 4.35607C6.92274 4.34687 7.186 4.39238 7.43176 4.48977C7.67753 4.58717 7.90051 4.73433 8.08667 4.92202C8.27284 5.1097 8.41819 5.33385 8.51358 5.58039C8.60898 5.82693 8.65235 6.09053 8.64099 6.35463C8.65267 6.6216 8.60843 6.88804 8.51107 7.13689C8.41372 7.38575 8.26543 7.6115 8.07571 7.79968C7.88598 7.98787 7.65903 8.13432 7.40938 8.22963C7.15972 8.32496 6.8929 8.36704 6.62604 8.3532ZM21.9819 21.6933H18.1795V15.3564C18.1795 13.8452 17.6433 12.8053 16.2946 12.8053C15.8756 12.8089 15.4679 12.942 15.1277 13.1864C14.7872 13.4307 14.5308 13.7744 14.3934 14.1702C14.2877 14.4669 14.2435 14.782 14.2634 15.0964V21.6933H10.5259V10.1081H14.2634V11.7329C14.5957 11.1225 15.0901 10.6159 15.6924 10.2688C16.2946 9.92188 16.9809 9.74815 17.6758 9.76682C20.1295 9.76682 21.9819 11.3917 21.9819 14.8527V21.6933Z"
											fill="black"
										/>
									</svg>
								</a>
								<a href="#facebook">
									<svg
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.4687 0.634033C7.04374 0.634033 0.96875 6.71987 0.96875 14.2154C0.96875 20.9925 5.90974 26.6175 12.3627 27.634V18.1461H8.93374V14.2154H12.3627V11.2199C12.3627 7.81776 14.3742 5.94728 17.4657 5.94728C18.9372 5.94728 20.4762 6.20481 20.4762 6.20481V9.5527H18.7752C17.1012 9.5527 16.5747 10.5964 16.5747 11.6672V14.2154H20.3277L19.7202 18.1461H16.5747V27.634C19.7559 27.1295 22.6527 25.4999 24.7421 23.0392C26.8315 20.5785 27.976 17.4489 27.9687 14.2154C27.9687 6.71987 21.8937 0.634033 14.4687 0.634033Z"
											fill="black"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}

export default Footer