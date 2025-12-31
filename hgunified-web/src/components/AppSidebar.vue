<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const sidebarLinks = [
  { name: 'Home', path: '/', icon: '' },
  { name: 'Dashboard', path: '/dashboard', icon: '', requiresAuth: true },
];
</script>

<template>
  <div class="w-64 flex flex-col bg-gray-800 text-white min-h-screen">
    <div class="p-4 text-2xl font-bold text-indigo-400 border-b border-gray-700">
      HG Unified
    </div>

    <nav class="flex-grow p-4 space-y-2">
      <RouterLink
        v-for="link in sidebarLinks"
        :key="link.name"
        :to="link.path"
        v-if="!link.requiresAuth || isAuthenticated"
        class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
        active-class="bg-indigo-600 text-white hover:bg-indigo-700"
      >
        <span class="mr-3">{{ link.icon }}</span>
        <span>{{ link.name }}</span>
      </RouterLink>

      <RouterLink
        v-if="isAuthenticated"
        to="/posts/create"
        class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
        active-class="bg-indigo-600 text-white hover:bg-indigo-700"
      >
        <span class="mr-3"></span>
        <span>Create Post</span>
      </RouterLink>
    </nav>
  </div>
</template>