import React from 'react'
import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'

const NavBar = () => (
	<nav className="flex items-center justify-between flex-wrap bg-black p-6">
		<div className="flex items-center flex-shrink-0">
			<Link href="/">
				<a className="font-semibold text-xl tracking-tight text-gray-400 hover:text-white">
					VerifyTheSource.
				</a>
			</Link>
		</div>
		<div className="flex items-center w-auto">
			{/* <div className="text-2xl flex-grow"></div> */}
			<div>
				<div className="inline-block mt-0">
					<Link href="/about">
						<a className="text-gray-400 hover:text-white mr-3 md:mr-7 lg:mr-10">About</a>
					</Link>
				</div>
				<div className="inline-block mt-0">
					<a href="mailto:shandwer@umd.edu?cc=k4m4@umd.edu&subject=VerifyTheSource Website" className="text-gray-400 hover:text-white mr-3 md:mr-7 lg:mr-10">
						Contact
					</a>
				</div>
				<div className="inline-block mt-0 w-5 text-center">
					<DarkModeToggle />
				</div>
			</div>
		</div>
	</nav>
)

export default NavBar
