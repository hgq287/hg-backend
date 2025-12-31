<template>
  <div class="flex min-h-screen">
    <AppSidebar />
    <main class="flex-1 p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppSidebar from './components/AppSidebar.vue'
</script>