import React from 'react'
import Link from 'next/link'
import Container from './container'

const Footer = () => (
	<footer className="bg-accent-1 border-t border-accent-2 text-black">
		<Container>
			<div className="py-28 flex flex-col lg:flex-row items-center">
				<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
					By UMD students and faculty, for UMD students and faculty.
				</h2>
				<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
					<Link href="/">
						<a
							className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Stay Informed
						</a>
					</Link>
					<a
						href="https://github.com/k4m4/verifythesource.org"
						className="mx-3 font-bold hover:underline"
					>
						View on GitHub
					</a>
				</div>
			</div>
			<div className="text-center pb-8 text-sm">
				<p>&copy; 2020 <Link href="/"><a>VerifyTheSource</a></Link>. Some rights reserved.</p>
			</div>
		</Container>
	</footer>
)

export default Footer
