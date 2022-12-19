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
      <a href="#" class="card-footer-item">Edit</a>
      <a
          href="#"
          @click.prevent = "handleDeleteCliked"
          class="card-footer-item"
      >Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
  import {computed} from "vue";


  const props = defineProps({
    note: {
      type:Object,
      required: true
    }
  })

  const emit = defineEmits(['deleteCliked'])

  const  characterLength = computed(()=> {
    let description = props.note.content.length > 1 ? " charakters" :
        " charakter"
    return `${props.note.content.length}  ${description}`
  })

  const handleDeleteCliked = () => {
     emit('deleteCliked', props.note.id)
  }

</script>

<style scoped>

</style>