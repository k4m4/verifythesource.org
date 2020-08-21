import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from './cover-image'
import Link from 'next/link'

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => (
	<div>
		<div className="mb-5">
			<CoverImage slug={slug} title={title} src={coverImage} />
		</div>
		<h3 className="text-3xl mb-3 leading-snug">
			<Link as={`/posts/${slug}`} href="/posts/[slug]">
				<a className="hover:underline">{title}</a>
			</Link>
		</h3>
		<div className="text-lg mb-4">
			<DateFormater dateString={date} />
		</div>
		<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
		<Avatar name={author.name} />
	</div>
)

PostPreview.propTypes = {
	title: PropTypes.string.isRequired,
	coverImage: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	author: PropTypes.shape({
		name: PropTypes.string,
	}),
	slug: PropTypes.string.isRequired,
}

export default PostPreview
