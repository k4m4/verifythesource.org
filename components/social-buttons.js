import React from 'react'
import PropTypes from 'prop-types'
import { Facebook, Twitter, Mail } from 'react-feather'

const SocialButtons = ({ title, url }) => (
	<div className="pt-10">
		<div className="flex justify-evenly bg-white px-10 w-4/5 md:w-3/4 lg:w-2/5 py-3" style={{ margin: '0 auto' }}>
			<a href={`https://facebook.com/sharer/sharer.php?u=${url}`} className="text-center bg-black hover:bg-white hover:text-black border border-black text-white px-4 py-2 m-2"><Facebook /></a>
			<a href={`https://twitter.com/intent/tweet?text=Check out "${title}" from VerifyTheSource! ${url}`} className="text-center bg-black hover:bg-white hover:text-black border border-black text-white px-4 py-2 m-2"><Twitter /></a>
			<a href={`mailto:?body=Check out "${title}" from VerifyTheSource: ${url}&subject=${title} | VerifyTheSource Blog`} className="text-center bg-black hover:bg-white hover:text-black border border-black text-white px-4 py-2 m-2"><Mail /></a>
		</div>
	</div>
)

SocialButtons.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}

export default SocialButtons
