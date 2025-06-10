<template>
  <div id="app">
    <AnimatedBackground />
    <NavBar />
    <router-view class="container px-4 py-8 mx-auto page-content" />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100vh;
}

/* Ensure your content appears above the background */
.page-content {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  color: white; /* Since animated background is dark */
}

/* Make sure NavBar also appears above background */
nav, .navbar {
  position: relative;
  z-index: 15; /* Higher than page content to stay on top */
}

/* Optional: Add some styling for better readability on dark background */
.container {
  background: rgba(0, 0, 0, 0.1); /* Subtle dark overlay for better text readability */
  border-radius: 10px;
  backdrop-filter: blur(5px); /* Adds a nice glass effect */
}

/* Ensure any cards or content blocks are readable */
.card, .content-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
</style>