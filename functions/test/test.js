const cmd = require('node-cmd');


exports.handler = async (event, context) => {
	
	// event.path - The request path
	// event.httpMethod - The request HTTP method
	// event.headers - The request headers
	// event.queryStringParameters - The request query parameters
	// event.body - The request body in JSON format
	// event.isBase64Encoded - A boolean flag to indicate if the applicable request payload is Base64-encode

	console.log('Test function called...')

	cmd.run(`cd functions
	ls`, (err, data, stderr) => console.log("\n\n" + data))

	return {

		// isBase64Encoded: true|false,
		// statusCode: httpStatusCode,
		// headers: { "headerName": "headerValue", ... },
		// body: "..."

		statusCode: 200,
		body: 'Hello from test lambda function !!!'
	}
}