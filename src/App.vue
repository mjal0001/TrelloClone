<template>
  <v-app>
    <TopNavBar />
    <Sidebar />
    <v-main>
      <v-container
        fluid
        :class="
          theme.global.current.value.dark ? 'bg-blue-grey-darken-4' : 'bg-blue-grey-lighten-5'
        "
        min-height="100vh"
      >
        <Board />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TopNavBar from '@/components/layout/TopNavBar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Board from '@/components/Board.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>
