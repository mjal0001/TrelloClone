<template>
  <v-card
    elevation="2"
    class="pa-2 d-flex flex-column justify-space-between"
    style="min-height: 100%"
  >
    <v-card-title class="text-caption font-weight-bold">
      {{ list.title }}
    </v-card-title>

    <v-card-text class="flex-grow-1">
      <Card
        v-for="card in list.cards"
        :key="card.id"
        :card="card"
        @update="handleUpdateCard"
        @delete="handleDeleteCard"
      />
    </v-card-text>

    <div class="pa-2 ma-2">
      <div v-if="addingCard">
        <v-text-field
          v-model="newCardTitle"
          class="text-caption"
          placeholder="Enter a title for this card"
          density="compact"
          variant="solo"
          hide-details
          autofocus
          @keydown.enter.prevent="addCard"
        />
        <div class="d-flex gap-2 mt-1 text-caption">
          <v-btn class="text-caption" size="small" @click="addCard">Add</v-btn>
          <v-btn class="text-caption" size="small" variant="text" @click="cancelAddCard"
            >Cancel</v-btn
          >
        </div>
      </div>

      <v-btn
        v-else
        variant="text"
        size="small"
        class="text-grey-darken-1 text-caption"
        @click="addingCard = true"
      >
        + Add a card
      </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { List } from '@/stores/board'
import Card from './Card.vue'
import { ref } from 'vue'

const props = defineProps<{
  list: List
}>()

const emit = defineEmits<{
  (e: 'add-card', payload: { listId: number; title: string }): void
  (e: 'update-card', payload: { listId: number; cardId: number; title: string }): void
  (e: 'delete-card', payload: { listId: number; cardId: number }): void
}>()

const addingCard = ref(false)
const newCardTitle = ref('')

function addCard() {
  const title = newCardTitle.value.trim()
  if (!title) return

  emit('add-card', { listId: props.list.id, title })

  newCardTitle.value = ''
  addingCard.value = false
}

function cancelAddCard() {
  newCardTitle.value = ''
  addingCard.value = false
}

function handleUpdateCard({ id, title }: { id: number; title: string }) {
  emit('update-card', { listId: props.list.id, cardId: id, title })
}

function handleDeleteCard(id: number) {
  emit('delete-card', { listId: props.list.id, cardId: id })
}
</script>
