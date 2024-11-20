const markdownIt = require('markdown-it')
const svgColorDefault = 'text-indigo-500'

module.exports = {
	/**
	 * I honestly don't remember why I added this markdown shortcode?
	 * I'm guessing at one point I wanted to use markdown in a .njk file (for some reason)
	 * and so added this markdown processor shortcode.
	 */
	markdown: function (value) {
		if (!value) {
			return ''
		}

		let markdown = markdownIt({
			html: true,
		})

		return markdown.render(value)
	},

	/**
	 * My YouTube embed with Title, Start (optional) and Ratio (optional)
	 * vid     = "youtubeID" : required : default = "oHg5SJYRHA0"
	 * vtitle  = "Your title for this video" : required : default = "YouTube Video"
	 * vratio  = "w:h" : optional : default = "16:9"
	 * vstart  = "4:20" : optional
	 *
	 * Usage in .md file
	 *  {% youtube "1234567", "Your Custom Title", "4:3", "1:23" %}
	 *
	 * If you'd like the default title = "YouTube Video", 16:9 ratio, and start at the beginning,
	 * you only need the following:
	 *  {% youtube "1234567" %}
	 */
	youtube: function (vid, vtitle, vratio, vstart) {
		const slug = vid ? vid : 'oHg5SJYRHA0'
		const title = vtitle ? vtitle : 'YouTube Video'
		const ratio = vratio ? vratio : '16:9'
		const start = vstart
			? vstart
				.split(':')
				.reduce((minute, seconds) => Number(minute) * 60 + Number(seconds))
			: ''
		const padding = ratio
			.split(':')
			.reduce((first, second) => (second / first) * 100)

		return `<div id="${slug}" style="position:relative; width:100%; padding-bottom:${padding}%"><iframe style="position:absolute; top:0; right:0; bottom:0; left:0; width:100%; height:100%" width="100%" height="100%" title="${title}" src="https://www.youtube.com/embed/${slug}${start ? `?start=${start}` : ''
			}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
	},
	jisho: function (word, displayWord) {
		return `<a href='https://jisho.org/word/${word}' target='_blank'>${displayWord || word}</a>`;
	},
	jishoSearch: function (searchTerm, displayTerm) {
		return `<a href='https://jisho.org/search/${searchTerm}' target='_blank'>${displayTerm || searchTerm}</a>`;
	},
	vocabItem: function (searchTerm, displayTerm, pronunciation, definition, classes = '') {
		return `<li class="px-4 py-1">
			<div class="flex justify-between">
				<span class="font-semibold text-lg">
					<a href='https://jisho.org/search/${searchTerm}' target='_blank'>${displayTerm || searchTerm}</a>
				</span>
				<span class="text-gray-500 text-xs">${pronunciation}</span>
			</div>
			<p class="text-gray-700">${definition}</p>
		</li>`;
	},
	link: function (displayText, url, shouldOpenInNewTab) {
		return `<a href=${url} ${shouldOpenInNewTab ? "target='_blank'" : ""}>${displayText}</a>`;
	},
	cardTile: function (cardTitle, cardDescription, cardImgUrl) {
		return `<div class="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img src="${cardImgUrl}"
        alt="${cardTitle}" class="w-64 object-cover rounded-t-xl"/>
      <div class="px-4 py-3 w-64">
        <p class="text-lg font-bold text-black block capitalize">${cardTitle}</p>
        <div class="flex items-center">
          <span>${cardDescription}</span>
        </div>
      </div>
  	</div>`;
	}
}
