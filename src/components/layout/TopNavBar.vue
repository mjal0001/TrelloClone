<template>
  <v-app-bar app density="compact" light class="border-b" elevation="0">
    <v-app-bar-nav-icon @click="sidebar.toggleDrawer()" />
    <GlobalMenu />
    <v-spacer />

    <!-- Theme toggle button -->
    <v-btn icon @click="toggleTheme">
      <v-icon class="text-body-1">{{
        isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'
      }}</v-icon>
    </v-btn>
    <v-btn icon @click="toggleTheme">
      <v-icon class="text-body-1" icon="mdi-account" />
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'
import { useTheme } from 'vuetify'
import GlobalMenu from '@/components/layout/GlobalMenu.vue'

const sidebar = useSidebarStore()
const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>
