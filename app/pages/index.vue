<script setup lang="ts">
useSeoMeta({
  title: 'YELLI MYRIEM MILAMAN COULIBALY — Portfolio',
  description: 'Portfolio de YELLI MYRIEM MILAMAN COULIBALY, étudiante MIAGE et développeuse.',
})

const stats = [
  { num: '12',   label: 'Projets validés' },
  { num: '8+',   label: 'Technologies' },
  { num: 'MIAGE', label: 'Formation' },
]
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
    
    <!-- LEFT: Text & CTAs -->
    <div class="w-full md:w-1/2 space-y-8 relative z-10">
      
      <!-- Availability Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-xs font-medium text-slate-600">Disponible pour une alternance ou emploi</span>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-slate-800 leading-[1.1]">
        Bonjour, je suis <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-400">Yelli Myriem</span>.
      </h1>

      <!-- Description -->
      <p class="text-lg text-slate-500 max-w-lg leading-relaxed">
        Étudiante en Master MIAGE, je conçois des applications web et mobiles avec une approche moderne. Je recherche actuellement une opportunité pour mettre mes compétences en pratique.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 pt-2">
        <NuxtLink to="/contact"
          class="inline-flex justify-center items-center gap-2 bg-slate-700 text-white font-medium px-8 py-4 rounded-full shadow-soft transition-all duration-300 hover:bg-slate-800 hover:shadow-hover hover:-translate-y-1">
          Me recruter
        </NuxtLink>
        <NuxtLink to="/projects"
          class="inline-flex justify-center items-center gap-2 bg-white text-slate-700 font-medium px-8 py-4 rounded-full border border-slate-200 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1">
          Voir mes projets
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
          <span class="text-3xl font-bold text-slate-700 mb-1">{{ stat.num }}</span>
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ stat.label }}</span>
        </div>
      </div>

    </div>

    <!-- RIGHT: Hero Image & Blob -->
    <div class="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
      <!-- Decorative Blob -->
      <div class="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
      
      <!-- Image Container -->
      <div class="relative w-72 h-[400px] md:w-80 md:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
        <!-- Optional: Replace with real user photo /photo.jpg -->
        <div class="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 flex items-center justify-center">
            <span class="text-6xl font-bold text-slate-300">Y</span>
        </div>
      </div>
    </div>

  </main>
</template>