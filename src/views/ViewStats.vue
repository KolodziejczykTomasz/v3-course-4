<template>
  <div class="stat">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount}}</td>
        </tr>
        <tr>
          <td>Number of character (of all notes)</td>
          <td>{{ storeNotes.totalCharakterCount }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { useNotesStore } from '@/stores/storeNotes';
const storeNotes = useNotesStore()

</script>

