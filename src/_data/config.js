module.exports = {
	environment: process.env.ELEVENTY_ENV, // development | production

	locales: ['es'],
	siteURL: 'https://www.',
	
	title: 'Default webpage title',
	description: 'Default webpage descriptión',
	keywords: 'Default keywords list',

	baseURL: '',

	meta: [
		{ name: 'author', content: 'www.existo.es' },
		{ name: 'format-detection', content: 'telephone=no' }

		// { name: 'theme-color', content: '#E64545' },
		// { name: 'google-play-app', content: 'app-id=package-name' },
		// { name: 'mobile-web-app-capable', content: 'yes' },
		// { name: 'apple-itunes-app', content: 'app-id=myAppStoreID' },
		// { name: 'apple-mobile-web-app-title', content: 'App title' },
		// { name: 'apple-mobile-web-app-capable', content: 'yes' },
		// { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
	],

	link: [
		{ rel: 'icon', sizes: '192x192', href: '/images/icons/icon.png' },
		{ rel: 'icon', sizes: '32x32', href: '/images/icons/icon32x32.png' },
		{ rel: 'icon', sizes: '16x16', href: '/images/icons/icon16x16.png' },
		{ rel: 'apple-touch-icon', href: '/images/icons/apple-touch-icon.png' },
		{ rel: 'mask-icon', href: '/images/icons/icon.svg', color:'#EE0048' },
		{ rel: 'stylesheet', href: '/assets/main.css'}

		// { rel: 'dns-prefetch', href: '//example.com/' },
		// { rel: 'prefetch', href: '/' },
		// { rel: 'preload', href: 'https://', as: 'image' },
		// { rel: 'preconnect', href: 'https://www.example.com/' },
		// { rel: 'prerender', href: 'https://example.com/' },
		// { rel: 'apple-touch-startup-image', href: '/' },
	],

	script: [
		{ src: '/assets/main.js', attribute: 'sdsd' }

		// { src: 'https://', attribute: 'async | defer'},
	],

	openGraph: {
		title: '',
		description: '',
		url: '',
		image: '',
		type: '', // website, article, book, profile
		site_name: '',
		locale: ''
	},

	twitter: {
		card: '', // summary, summary_large_image, app, player
		site: '', // @tuwitter_account
		creator: '', // @individual_account
		url: '',
		title: '',
		description: '',
		image: ''
	},

	google: { gtm_id: '' }, // GTM-XXXX (Google Tag Manager ID)
}

