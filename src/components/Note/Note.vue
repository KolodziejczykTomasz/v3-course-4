<template>
  <div
      class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{note.content}}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a
          href="#"
          class="card-footer-item"
      >Edit
      </a>
      <a
          href="#"
          @click.prevent = "storeNotes.deleteNote(note.id)"
          class="card-footer-item"
      >Delete
      </a>
    </footer>
  </div>
</template>

<script setup>

  import {computed} from "vue";
  import {useNotesStore} from "@/stores/storeNotes";


  const props = defineProps({
    note: {
      type:Object,
      required: true
    }
  })

  const storeNotes = useNotesStore();

  const  characterLength = computed(()=> {
    let length = props.note.content.length;
    let description = length > 1 ? " charakters" : " charakter"
    return `${length}  ${description}`
  })


</script>

<style scoped>

</style>