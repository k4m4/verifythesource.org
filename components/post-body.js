import React from 'react'
import PropTypes from 'prop-types'
import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => (
	<div className="max-w-2xl mx-auto break-words overflow-hidden">
		<div
			dangerouslySetInnerHTML={{ __html: content }}
			className={markdownStyles.markdown}
		/>
	</div>
)

PostBody.propTypes = {
	content: PropTypes.string.isRequired,
}

export default PostBody
