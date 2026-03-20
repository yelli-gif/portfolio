<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { name: 'Accueil',      path: '/' },
  { name: 'À propos',     path: '/about' },
  { name: 'Projets',      path: '/projects' },
  { name: 'Contact',      path: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md border-b border-gray-200">
    <NuxtLink to="/" class="flex items-center gap-3 group">
      <div class="w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-105">
        M
      </div>
      <span class="font-medium text-slate-700 text-lg tracking-wide hidden sm:block">MIAGE</span>
    </NuxtLink>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-2">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
        class="text-sm font-medium text-slate-500 px-4 py-2 rounded-full transition-all duration-300 hover:text-slate-800 hover:bg-slate-100"
        :class="{ 'text-slate-800 bg-slate-100': route.path === link.path }">
        {{ link.name }}
      </NuxtLink>
    </div>

    <!-- Mobile Button -->
    <button @click="toggleMenu" class="md:hidden p-2 text-slate-600 focus:outline-none">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-24 px-6 md:hidden">
    <div class="flex flex-col gap-4">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path" @click="isMenuOpen = false"
        class="text-lg font-medium text-slate-600 px-6 py-4 rounded-2xl transition-all duration-300 hover:text-slate-900 hover:bg-slate-100"
        :class="{ 'text-slate-900 bg-slate-100': route.path === link.path }">
        {{ link.name }}
      </NuxtLink>
    </div>
  </div>
</template>