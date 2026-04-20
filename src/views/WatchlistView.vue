<script setup lang="ts">
import { useWatchlistStore } from '../stores/watchlist'

const watchlistStore = useWatchlistStore()
</script>

<template>
  <div style="padding: 24px;">
    <h1>My Watchlist</h1>

    <ul v-if="watchlistStore.stocks.length">
      <li v-for="stock in watchlistStore.stocks" :key="stock">
        {{ stock }}
        <button @click="watchlistStore.removeStock(stock)" style="margin-left: 8px;">
          Remove
        </button>
      </li>
    </ul>

    <p v-else>No stocks in watchlist yet.</p>
  </div>
</template>