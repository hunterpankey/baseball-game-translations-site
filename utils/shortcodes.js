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
	},
	daisyCard: function (title, description, imageUrl, badgeText = "", bottomBadges = []) {
		let bottomBadgeContent = "";

		if (bottomBadges && bottomBadges.length > 0) {
			bottomBadgeContent = `<div class="card-actions justify-end">` +
				bottomBadges.reduce((previous, current, index) => {
					return previous + `<div class="badge badge-outline">${current}</div>`
				}, "") + `</div>`;
		}

		return `<div class="card card-side bg-base-100 shadow-xl"><figure><img src="${imageUrl}" alt="${title}" /></figure><div class="card-body w-48"><h2 class="card-title">${title}${badgeText ? '<div class="badge badge-secondary uppercase">' + badgeText + '</div>' : ''}</h2><p>${description}</p>${bottomBadgeContent}</div></div>`;
	},
	daisyAlert: function (text, alertType) {
		let svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>`;
		let cssClass = alertType ? `alert alert-${alertType}` : "alert";

		switch (alertType) {
			case 'info':
				// already set above
				break;
			case 'success':
				svg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
					<path	stroke-linecap="round" stroke-linejoin="round"	stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>`;
				break;
			case 'warning':
				svg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
					<path	stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				</svg>`;
				break;
			case 'error':
				svg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>`;
				break;
		}

		return `<div role="alert" class="${cssClass}">
			${svg}
			<span>${text}</span>
		</div>`;
	},
}