const NotesClient = require('./notesClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
    it('calls fetch and loads notes', (done) => {
        const client = new NotesClient();
        fetch.mockResponseOnce(JSON.stringify(
            ['This note is coming from the server']
        ));

        client.loadNotes((data) => {
        expect(data).toEqual(['This note is coming from the server']);

        done();
        });
    });
    // it('calls fetch POST and sending note to server', () => {
    //     const client = new NotesClient();
    //     fetch.mockResponseOnce(JSON.stringify({
    //         note: 'Remember to reflect on my progress this week!'
    //     }));
    //     client.createNote((data) => {
    //         expect()
    //     })
    // })
});