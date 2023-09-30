class NotesView{
    constructor(model, client) {
        this.model = model;
        this.client = client;
        this.mainContainerEl = document.querySelector('#notes-container');
        this.buttonEl = document.querySelector('#button__add_note');
        this.resetButtonEl = document.querySelector('#button__reset');
        this.inputEl = document.querySelector('#input__note');
        this.errorDiv = document.querySelector('#error');

        this.buttonEl.addEventListener('click', () => {
            let newNote = this.inputEl.value;
            this.client.createNote((newNote), () => {
                this.addNewNote(newNote);
                this.inputEl.value = ''
            }, (error) => {
                this.displayError(error)
            })
        })
        this.resetButtonEl.addEventListener("click", () => {
            this.client.reset(
                () => {
                    document.querySelectorAll(".note").forEach((element) => {
                        element.remove();
                    this.model.reset();
                    // document.getElementById('notes-container').style.visibility = 'hidden'
                    });
                },
                (error) => {
                    this.displayError(error);
                }
                );
            });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

    displayNotesFromApi() {
        this.client.loadNotes((data) => {
            this.model.setNotes(data);
            this.displayNotes();
    
        }, (error) => {
            this.displayError(error)
        })
    }

    displayError(error){
        document.querySelectorAll('.error__img, .error__text').forEach(element => {
            element.remove();
        });
        const errEl = document.createElement('p')
        errEl.className = 'error__text'
        const imgEl = document.createElement('img')
        imgEl.className = 'error__img'
        imgEl.src = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="white"><path fill="#fff" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>')
        errEl.textContent = error.message;
        this.errorDiv.appendChild(errEl);
        this.errorDiv.appendChild(imgEl);
        document.getElementById('error').style.visibility = 'visible';
    }
    
    displayNotes() {
        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        });

        const notes = this.model.getNotes()
        notes.forEach(note => {
            let noteEl = document.createElement("li");
            noteEl.setAttribute('id', 'note');
            noteEl.className = 'note';
            noteEl.textContent = note;

            this.mainContainerEl.append(noteEl);
        })
    }
}

module.exports = NotesView;