// stores/sidebar.ts
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    drawer: true,
    boards: [
      { id: 1, name: 'Project Alpha' },
      { id: 2, name: 'Design Tasks' },
      { id: 3, name: 'Bug Backlog' },
    ],
    selectedBoardId: 1,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    selectBoard(id: number) {
      this.selectedBoardId = id
    },
  },
})
