import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import SocialButtons from '../../components/social-buttons'
import PostTitle from '../../components/post-title'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import NotFound from '../404'

const Post = ({ post }) => {
	const router = useRouter()
	if (!post.slug) {
		return <NotFound />
	}

	return (
		<Layout>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<article className="mb-32 pt-12">
						<Head>
							<title>
								{post.title} | Cyber-security Awareness Blog
							</title>
							<meta property="og:image" content={post.ogImage.url} />
						</Head>
						<PostHeader
							title={post.title}
							coverImage={post.coverImage}
							date={post.date}
							author={post.author}
							content={post.content}
						/>
						<PostBody content={post.content} />
						<SocialButtons
							title={post.title}
							url={`https://verifythesource.org/posts/${post.slug}`}
						/>
					</article>
				)}
			</Container>
		</Layout>
	)
}

Post.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string,
		coverImage: PropTypes.string,
		date: PropTypes.string,
		author: PropTypes.shape({
			name: PropTypes.string,
		}),
		content: PropTypes.string,
		slug: PropTypes.string,
		ogImage: PropTypes.shape({
			url: PropTypes.string,
		}),
	}).isRequired,
}

const getStaticProps = async ({ params }) => {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
}

const getStaticPaths = async () => {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}

export default Post
export {
	getStaticProps,
	getStaticPaths,
}
