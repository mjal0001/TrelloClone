// stores/board.ts
import { defineStore } from 'pinia'

export interface Card {
  id: number
  title: string
}

export interface List {
  id: number
  title: string
  cards: Card[]
}

export const useBoardStore = defineStore('board', {
  state: () => ({
    lists: [
      {
        id: 1,
        title: 'To Do',
        cards: [
          { id: 1, title: 'Buy groceries' },
          { id: 2, title: 'Finish homework' },
        ],
      },
      {
        id: 2,
        title: 'Doing',
        cards: [{ id: 3, title: 'Build Trello app' }],
      },
    ] as List[],
  }),
})
