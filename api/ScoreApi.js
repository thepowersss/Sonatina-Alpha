class ScoreApi {
    addNote(note) {
		return this.call('post', '', note)
	}
}

export default ScoreApi
