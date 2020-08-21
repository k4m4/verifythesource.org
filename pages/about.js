import React from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'

const About = () => {
	return (
		<Layout>
			<Head>
				<title>
					About | VerifyTheSource.
				</title>
				{/* <meta property="og:image" content={post.ogImage.url} /> */}
			</Head>
			<Container>
				<h1 className="text-6xl text-center pt-12">
					About <em className="font-light">VerifyTheSource.</em>
				</h1>
				<div className="max-w-2xl mx-auto leading-loose pt-10 pb-20">
					<p className="mb-3">It is an old adage, and it goes something like this: &quot;Good things can come from bad things.&quot; To prove how old this idea is, you can find it in the Jewish Talmud, and that goes back over two-thousand years. And so it happened in the Spring of 2020, at the University of Maryland.</p>
					<p className="mb-3">In a general education class regarding the world of fraud and scams the professor became overwhelmed with the onslaught of the COVID-19 pandemic and lost control of the class when the course was forced to go fully online. Whatever good lesson plans and projects the professor had in mind were missing in action as the professor attended first to his family and business career, all of which were in dire straits under the challenges of the ravaging virus.</p>
					<p className="mb-3">One project survived, although just barely, and that was for the students to form groups to create written presentations warning others on how to protect themselves from becoming victims of cybercrime. Each group was assigned a unique and relevant topic.</p>
					<p className="mb-3">The overarching goal was for these presentations to be used on the professor&apos;s dream of a website for a nonprofit organization called Verify the Source. The mission of the nonprofit was to educate and alert the university student body and staff about how not to become the victim of cybercrime.</p>
					<p className="mb-3">One student in the class saw the merits of the idea and volunteered to help the professor, and the class, from letting this assignment fall into the trash heap during the disastrous semester. Amazingly enough, most of the student group presentations were remarkably good. So soon after the semester&apos;s end, the rudiments of the website&apos;s beginnings were in place.</p>
					<p className="mb-3">Thanks to <a href="https://www.rhsmith.umd.edu/directory/samuel-handwerger" className="hover:underline">Professor Sam Handwerger</a>, <a href="https://nikolaskama.me" className="hover:underline">Nikolaos Kamarinakis</a> (for developing the website), and the entire class of BMGT 289D, Spring 2020, the website is here.</p>
					<p className="mb-3">Most cybersecurity experts will tell you that &quot;verifying the source&quot; of internet communication is a key to protecting yourself from becoming a victim. Hence the name &quot;VerifyTheSource.&quot; Pick and choose topics of interest found herein and let us know how we are doing here in the early stages of getting the word out. And above all, don&apos;t let yourself become a victim of cybercrime... Verify the Source!</p>
				</div>
			</Container>
		</Layout>
	)
}

export default About
