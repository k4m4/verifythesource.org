import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

const Index = ({ allPosts }) => {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)

	return (
		<Layout>
			<Head>
				<title>VerifyTheSource.</title>
			</Head>
			<Container>
				<Intro />
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.coverImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Container>
		</Layout>
	)
}

Index.propTypes = {
	allPosts: PropTypes.array.isRequired,
}

const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	])

	return {
		props: { allPosts },
	}
}

export default Index
export {
	getStaticProps,
}
