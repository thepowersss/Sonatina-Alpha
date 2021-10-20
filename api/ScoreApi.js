class ScoreApi {
    constructor(props) {
        this.context = props
        this.call = this.context.call
    }
    addNote(note) {
		return this.call('post', '/mobile', note)
	}
}

export default ScoreApi
