<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent" 
            bgColor="link"
            ref="addEditNoteRef"
            placeholder="Edit note" 
            label="Edit note"
        >
            <template #buttons>
                <button 
                    @click="$router.back()"
                    class="button is-link is-light mr-2"                   
                >
                    Cancel
                </button>
                <button 
                    class="button is-link has-background-link" 
                    @click="handleSaveCliked"
                >
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from "@/components/Note/AddEditNote.vue";

import { useNotesStore } from '@/stores/storeNotes';

const route = useRoute();
const router = useRouter();

const storeNotes = useNotesStore()
    const noteContent = ref('')
       noteContent.value = storeNotes.getNoteContent(route.params.id);


const handleSaveCliked = () =>{
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}
</script>