import React from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

const NotFound = () => {
	return (
		<Layout>
			<Head>
				<title>
					Not Found | VerifyTheSource.
				</title>
				{/* <meta property="og:image" content={post.ogImage.url} /> */}
			</Head>
			<Container>
				<div className="flex h-screen text-center -mt-12">
					<div className="m-auto">
						<h1 className="text-5xl md:text-6xl lg:text-7xl pb-5">
							Page Not Found
						</h1>
						<h2 className="lg:text-xl italic font-light">
							The page that you are looking for does not exist.
						</h2>
					</div>
				</div>
			</Container>
		</Layout>
	)
}

export default NotFound
