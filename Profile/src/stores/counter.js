import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'data',
  state: () => ({
    statuspage: false
  }),
  actions: {
    setstatuspage(text) {
      this.statuspage = text
    }
  }
})
