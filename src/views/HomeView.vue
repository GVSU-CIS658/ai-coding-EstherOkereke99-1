<script setup lang="ts">
import { ref } from 'vue'
import { useWatchlistStore } from '../stores/watchlist'

const watchlistStore = useWatchlistStore()

const ticker = ref('')
const stock = ref<any>(null)
const loading = ref(false)
const error = ref('')

async function searchStock() {
  loading.value = true
  error.value = ''
  stock.value = null

  try {
    const symbol = ticker.value.trim().toUpperCase()

    const res = await fetch(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=demo`)
    const data = await res.json()

    if (!data.price) {
      error.value = 'Stock not found.'
    } else {
      stock.value = {
        symbol: symbol,
        price: data.price,
        change: 'N/A',
        changesPercentage: 'N/A'
      }
    }
  } catch {
    error.value = 'Failed to fetch stock data.'
  } finally {
    loading.value = false
  }
}

function addToWatchlist() {
  if (ticker.value.trim()) {
    watchlistStore.addStock(ticker.value)
  }
}
</script>

<template>
  <div style="padding: 24px;">
    <h1>Stock Watchlist App</h1>

    <input v-model="ticker" placeholder="Enter ticker, e.g. AAPL" />
    <button @click="searchStock" style="margin-left: 8px;">Search</button>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <div v-if="stock" style="margin-top: 20px;">
      <h2>{{ stock.symbol }}</h2>
      <p><strong>Price:</strong> {{ stock.price }}</p>
      <p><strong>Last Updated:</strong> Just now</p>
      <p><strong>Change:</strong> {{ stock.change }}</p>
      <p><strong>Percent Change:</strong> {{ stock.changesPercentage }}</p>
      <button @click="addToWatchlist">Add to Watchlist</button>
    </div>
  </div>
</template>