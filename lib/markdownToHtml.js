import marked from 'marked'

export default async function markdownToHtml(markdown) {
	return marked(markdown)
}
