class NotesModel{
    constructor() {
        this.notes = []
    }
    getNotes() {
        return this.notes
    }
    setNotes(notes) {
        this.notes = notes
    }
    addNote(note) {
        this.notes.push(note)
    }
    reset() {
        this.notes.length = 0
    }
}

module.exports = NotesModel;