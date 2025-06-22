<!-- src/components/layout/Sidebar.vue -->
<template>
  <v-navigation-drawer app v-model="sidebar.drawer" :temporary="display.mobile.value" width="260">
    <v-list>
      <v-list-subheader class="text-caption">Your Boards</v-list-subheader>

      <v-list-item
        v-for="board in sidebar.boards"
        :key="board.id"
        prepend-icon="mdi-view-dashboard"
        @click="sidebar.selectBoard(board.id)"
        :active="board.id === sidebar.selectedBoardId"
      >
        <v-list-item-title class="text-caption">
          {{ board.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { useDisplay } from 'vuetify'

const sidebar = useSidebarStore()
const display = useDisplay()
</script>
