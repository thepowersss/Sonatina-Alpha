import axios from 'axios'
import ScoreApi from './ScoreApi'


class Api {
	constructor(ctx) {
		this.Score = new ScoreApi(this)
	}

	call = (method, url, data) => {
		return axios({
			method,
			url: url,
			data,
			headers: this.requestHeaders || {}
		}).then(resp => resp.data).catch(err => {
			if (err && err.response && err.response.data) {
				throw err.response.data.message
			} else {
				throw 'custom error'
			}
		})
	}
}

function MusicApi(ctx, options={}) {
	return new Api(ctx, options)
}

export default MusicApi
