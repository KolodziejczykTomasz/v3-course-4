<template>
  <div class="note">
      <AddEditNote 
      v-model="newNote"
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

      <pre>{{ newNote }}</pre>
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
   

   const newNote = ref('asasasa');
   const newNoteRef = ref(null);
   const storeNotes = useNotesStore();



   const addNote = () => {
        storeNotes.addNote(newNote.value)
        newNote.value=''
        newNoteRef.value.focus()
   }

</script>