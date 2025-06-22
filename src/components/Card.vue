<template>
  <v-card class="mb-2 d-flex align-center justify-space-between" elevation="1">
    <div class="w-100">
      <v-card-text
        v-if="!editing"
        class="text-caption"
        :class="theme.global.current.value.dark ? 'bg-grey-darken-3' : ''"
        @dblclick="startEditing"
      >
        {{ card.title }}
      </v-card-text>

      <v-text-field
        v-else
        v-model="editedTitle"
        variant="solo"
        density="compact"
        class="text-caption"
        hide-details
        autofocus
        @keydown.enter="saveEdit"
        @keydown.esc="cancelEdit"
        @blur="saveEdit"
      />
    </div>

    <v-btn icon size="small" variant="text" @click="$emit('delete', card.id)">
      <v-icon icon="mdi-close" />
    </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import type { Card as CardType } from '@/stores/board'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const props = defineProps<{
  card: CardType
}>()

const emit = defineEmits<{
  (e: 'update', payload: { id: number; title: string }): void
  (e: 'delete', id: number): void
}>()

const theme = useTheme()
const editing = ref(false)
const editedTitle = ref('')

function startEditing() {
  editing.value = true
  editedTitle.value = props.card.title
}

function saveEdit() {
  const title = editedTitle.value.trim()
  if (title && title !== props.card.title) {
    emit('update', { id: props.card.id, title })
  }
  editing.value = false
}

function cancelEdit() {
  editing.value = false
}
</script>
