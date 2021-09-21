const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'dev'
const app = next({ dev })

const PORT = 3001

app.prepare().then(() => {
	const server = express()

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(PORT, err => {
		if (err) console.log(err);
		console.log(`${dev?'Dev':'Production'} Server Running on port: ${PORT}`)
	})
})
