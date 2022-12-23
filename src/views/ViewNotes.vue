<template>
  <div class="note">
      <AddEditNote 
          v-model="newNote"
          ref="addEditNoteRef"
          placeholder="Add a new note"
      >
          <template #buttons>
              <button
                @click="addNote"
                :disabled="!newNote"
                class="button is-link has-background-success"
              >
                Add New Note
              </button>
          </template>
      </AddEditNote>
     
          <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note = "note"
          />
  </div>
</template>

<script setup>
   import {ref} from 'vue';
   import Note from '@/components/Note/Note.vue';
   import AddEditNote from '../components/Note/AddEditNote.vue';
   import {useNotesStore} from "@/stores/storeNotes";
   

   const newNote = ref(''); 
   const addEditNoteRef = ref(null);  
   const storeNotes = useNotesStore();



   const addNote = () => {
        storeNotes.addNote(newNote.value)
        newNote.value=''
        addEditNoteRef.value.focusTextArea()
    }

</script>