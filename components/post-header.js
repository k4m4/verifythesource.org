import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../components/avatar'
import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import ReadingTime from '../components/reading-time'

const PostHeader = ({ title, coverImage, date, author, content }) => (
	<>
		<PostTitle>{title}</PostTitle>
		<div className="hidden md:block md:mb-12">
			<Avatar name={author.name} />
		</div>
		<div className="mb-8 md:mb-16 sm:mx-0">
			<CoverImage title={title} src={coverImage} />
		</div>
		<div className="max-w-2xl mx-auto">
			<div className="block md:hidden mb-6">
				<Avatar name={author.name} />
			</div>
			<div className="mb-6 text-lg flex">
				<div className="pr-2"><DateFormater dateString={date} /></div>
				<div className="border-l-2 border-white pl-2"><ReadingTime content={content} /></div>
			</div>
		</div>
	</>
)

PostHeader.propTypes = {
	title: PropTypes.string.isRequired,
	coverImage: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.shape({
		name: PropTypes.string,
	}),
	content: PropTypes.string.isRequired,
}

export default PostHeader
