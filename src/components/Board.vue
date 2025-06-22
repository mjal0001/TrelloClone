<template>
  <v-row>
    <v-col v-for="list in lists" :key="list.id" cols="12" sm="6" md="4">
      <List
        :list="list"
        @add-card="handleAddCard"
        @update-card="handleUpdateCard"
        @delete-card="handleDeleteCard"
      />
    </v-col>

    <!-- New List Form -->
    <v-col cols="12" sm="6" md="4">
      <NewListForm @add-list="handleAddList" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useBoardStore } from '@/stores/board'
import List from './List.vue'
import NewListForm from '@/components/Forms/NewListForm.vue'

const boardStore = useBoardStore()
const lists = boardStore.lists

function handleAddCard({ listId, title }: { listId: number; title: string }) {
  const list = lists.find((l) => l.id === listId)
  if (!list) return

  list.cards.push({ id: Date.now(), title })
}

function handleUpdateCard({
  listId,
  cardId,
  title,
}: {
  listId: number
  cardId: number
  title: string
}) {
  const list = lists.find((l) => l.id === listId)
  const card = list?.cards.find((c) => c.id === cardId)
  if (card) card.title = title
}

function handleDeleteCard({ listId, cardId }: { listId: number; cardId: number }) {
  const list = lists.find((l) => l.id === listId)
  if (list) {
    list.cards = list.cards.filter((c) => c.id !== cardId)
  }
}

function handleAddList(title: string) {
  boardStore.lists.push({
    id: Date.now(),
    title,
    cards: [],
  })
}
</script>
