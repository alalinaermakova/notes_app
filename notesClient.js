
class NotesClient{
    loadNotes(callback, showError) {
        return fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                showError(err)
            })
    }
    createNote(data, callback, showError){
        return fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: data
            })
        })
        .then(res => res.json())
        .then((data) => {
            callback(data)
        })
        .catch((err) => {
            showError(err)
        })
    }

    reset(callback, errorCallback) {
        return fetch('http://localhost:3000/notes', {
            method: 'DELETE'
            })
            .then((res) => res.json())
            .then((data) => {
                callback(data)
            })
            .catch((error) => {
                errorCallback(error)
            })
        }
}

module.exports = NotesClient;