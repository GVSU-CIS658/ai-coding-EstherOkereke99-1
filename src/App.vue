<template>
  <div>
    <nav style="padding: 16px; display: flex; gap: 16px;">
      <router-link to="/">Home</router-link>
      <router-link to="/watchlist">Watchlist</router-link>
      <router-link to="/dev-note">Dev Note</router-link>
    </nav>

    <router-view />
  </div>
</template>