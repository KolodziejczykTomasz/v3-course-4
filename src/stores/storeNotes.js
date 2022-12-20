import { defineStore } from 'pinia'

export const useNotesStore = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                },
                {
                    id: 'id2',
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                },
                {
                    id: 'id3',
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
                }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString();

            let note = {
                id,
                content:newNoteContent
            }

            this.notes.unshift(note);
        },
        deleteNote(idToDelete){
            this.notes = this.notes.filter(note => { return note.id !== idToDelete})
        }
    },
})