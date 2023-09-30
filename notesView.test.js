/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');

describe('NotesView class', () => {
    // it('adds a new note', () => {
    //     document.body.innerHTML = fs.readFileSync('./index.html');

    //     const model = new NotesModel();
    //     const client = new NotesClient();
    //     const view = new NotesView(model, client);

    //     // 1. Fill the input
    //     const input = document.querySelector('#input__note');
    //     input.value = 'My new amazing test note';

    //     // 2. Click the button
    //     const button = document.querySelector('#button__add_note');
    //     button.click();

    //     // 3. The note should be on the page
    //     expect(document.querySelectorAll('ul.notes-container').length).toEqual(1);
    //     expect(document.querySelectorAll('li.note')[0].textContent).toBe('My new amazing test note');
    // });
    it('clear the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('one');

        view.displayNotes();

        expect(document.querySelectorAll('ul.notes-container').length).toEqual(1);
    });

})