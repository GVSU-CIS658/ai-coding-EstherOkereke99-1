import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWatchlistStore = defineStore('watchlist', () => {
  const stocks = ref<string[]>([])

  function addStock(symbol: string) {
    const clean = symbol.trim().toUpperCase()
    if (clean && !stocks.value.includes(clean)) {
      stocks.value.push(clean)
    }
  }

  function removeStock(symbol: string) {
    stocks.value = stocks.value.filter(stock => stock !== symbol)
  }

  return { stocks, addStock, removeStock }
})