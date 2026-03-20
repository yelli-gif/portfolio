<script setup lang="ts">
const route = useRoute()

const links = [
  { name: 'Accueil',      path: '/' },
  { name: 'À propos',     path: '/about' },
  { name: 'Projets',      path: '/projects' },
  { name: 'Compétences',  path: '/skills' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-16 py-5 flex justify-between items-center"
    style="background:rgba(250,248,245,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(230,226,238,.5)">

    <NuxtLink to="/" class="font-['Playfair_Display',serif] text-xl font-semibold text-[#1C1828]">
      dev<span class="text-[#7C5CBF] italic">.</span>
    </NuxtLink>

    <div class="flex items-center gap-2">
      <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
        class="text-xs text-[#9B96AA] uppercase tracking-widest px-3 py-2 rounded-lg transition-all duration-200 hover:text-[#1C1828] hover:bg-[#F0EBF8]"
        :class="{ 'text-[#1C1828] bg-[#F0EBF8]': route.path === link.path }">
        {{ link.name }}
      </NuxtLink>
      <NuxtLink to="/contact"
        class="ml-2 bg-[#1C1828] text-white text-xs font-medium px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all duration-200 hover:bg-[#7C5CBF] hover:-translate-y-px">
        Me contacter
      </NuxtLink>
    </div>

  </nav>
</template>