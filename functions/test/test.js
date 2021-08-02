const { builder } = require('@netlify/functions');

async function renderContent(event, context) {

	let now = new Date();
	console.log(`\n\n>> RenderContent function called... ${event.path}`)

	return {

		statusCode: 200,
		body: `
		<html>
			<body>
				<h1>RenderContent function called... ${event.path}</h1>
				<p>Time: ${now}</p>
			</body>
		</html>`
	}
}

exports.handler = builder(renderContent);