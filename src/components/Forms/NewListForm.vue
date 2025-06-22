<template>
  <v-card
    class="pa-2 d-flex flex-column justify-space-between"
    style="min-height: 100%"
    elevation="1"
  >
    <div v-if="showForm">
      <v-text-field
        v-model="newListTitle"
        class="text-caption"
        placeholder="Enter list title"
        density="compact"
        variant="solo"
        hide-details
        autofocus
        @keydown.enter.prevent="submit"
      />

      <div class="d-flex gap-2 mt-1">
        <v-btn size="small" class="text-caption" @click="submit">Add</v-btn>
        <v-btn size="small" variant="text" class="text-caption" @click="cancel">Cancel</v-btn>
      </div>
    </div>

    <v-btn
      v-else
      variant="text"
      class="text-caption text-grey-darken-1"
      size="small"
      @click="showForm = true"
    >
      + Add another list
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'add-list', title: string): void
}>()

const newListTitle = ref('')
const showForm = ref(false)

function submit() {
  const title = newListTitle.value.trim()
  if (!title) return

  emit('add-list', title)
  newListTitle.value = ''
  showForm.value = false
}

function cancel() {
  newListTitle.value = ''
  showForm.value = false
}
</script>
