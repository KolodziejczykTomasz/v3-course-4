<template>
  <div class="note">
       <div class="card has-background-success-dark p-4 mb-5">

         <div class="field">
           <div class="control">
             <textarea
                 v-model="newNote"
                 class="textarea"
                 placeholder="Add a new note"
                 ref="newNoteRef"
             />
           </div>
         </div>

         <div class="field is-grouped is-grouped-right">
           <div class="control">
             <button
                 class="button is-link has-background-success"
                 @click="addNote"
                 :disabled="!newNote"
             >
               Add New Note
             </button>
           </div>
         </div>

       </div>
          <Note
            v-for="note in notes"
            :key="note.id"
            :note = "note"
            @deleteCliked="deleteNote"
          />
  </div>
</template>

<script setup>
   import {ref} from 'vue'
   import Note from '@/components/Note/Note.vue'

   const newNote=ref('');
   const newNoteRef = ref(null);

   const notes =ref([
     {
       id: 'id1',
       content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
           '          Phasellus nec iaculis mauris.\n' +
           '          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
           '          Phasellus nec iaculis mauris.'
     } ,  {
       id: 'id2',
       content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
           '          Phasellus nec iaculis mauris.'

     },
     {
       id: 'id3',
       content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
           '          Phasellus nec iaculis mauris.\n' +
           '          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
           '          Phasellus nec iaculis mauris.'
     }

   ])

   const addNote = () => {
     let currentDate = new Date().getTime(),
          id = currentDate.toString();
     let note = {
       id,
       content:newNote.value
     }
     notes.value.unshift(note)
     newNote.value=''
     newNoteRef.value.focus()
   }

    const deleteNote = (idToDelete) => {
        notes.value = notes.value.filter(note =>{
         return note.id !== idToDelete
        })
    }
</script>