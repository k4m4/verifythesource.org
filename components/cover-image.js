import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CoverImage = ({ title, src, slug }) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('shadow-small w-screen', {
				'hover:shadow-medium transition-shadow duration-200': slug,
			})}
		/>
	)

	return (
		<div className="-mx-5 sm:mx-0">
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]">
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	)
}

CoverImage.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	slug: PropTypes.string,
}

export default CoverImage
