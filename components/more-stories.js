import React from 'react'
import PropTypes from 'prop-types'
import PostPreview from '../components/post-preview'

const MoreStories = ({ posts }) => (
	<section>
		<h2 className="mb-8 text-6xl md:text-7xl font-medium tracking-tighter leading-tight">
			More Posts
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
			{posts.map(post => (
				<PostPreview
					key={post.slug}
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					slug={post.slug}
					excerpt={post.excerpt}
				/>
			))}
		</div>
	</section>
)

MoreStories.propTypes = {
	posts: PropTypes.array.isRequired,
}

export default MoreStories
