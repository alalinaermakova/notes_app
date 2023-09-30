const NotesModel = require('./notesModel');

describe('test NotesModel class', () => {
    it('initialize class and get notes', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([])
    });
    it('add two notes and return array of notes', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual([ 'Buy milk', 'Go to the gym' ])
    });
    it('add one note, then call reset() and return empty array', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.reset();
        expect(model.getNotes()).toEqual([])
    });
})