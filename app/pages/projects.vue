<script setup lang="ts">
import { ref, computed } from 'vue'

useSeoMeta({
  title: 'Mes Projets — Portfolio',
  description: 'Une sélection de mes réalisations...',
})

const filters = ['Tous', 'Web Application', 'Mobile', 'Backend', 'Data Visualization', 'EdTech']
const activeFilter = ref('Tous')

const projects = [
  {
    id: 1,
    title: 'Gestionnaire de tâches MIAGE',
    description: 'Une application de gestion de tâches pour les étudiants de la MIAGE avec fonctionnalités temps réel.',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'API de Réservation E-commerce',
    description: 'Un backend robuste et scalable pour gérer des milliers de réservations simultanées.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Java', 'Spring Boot', 'Docker']
  },
  {
    id: 3,
    title: 'Dashboard Analytique RH',
    description: 'Tableau de bord interactif pour la visualisation des données de recrutement et rétention.',
    category: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'Python']
  },
  {
    id: 4,
    title: 'App d\'Apprentissage de Langues',
    description: 'Application mobile d\'EdTech gamifiée pour l\'apprentissage de langues locales.',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    tags: ['Flutter', 'Firebase']
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Tous') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
    
    <!-- Hero Section Projects -->
    <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
        Mes Projets
      </h1>
      <p class="text-lg text-slate-500 leading-relaxed">
        Une sélection de mes réalisations académiques et personnelles, démontrant ma passion pour l'innovation et l'excellence technique.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
        class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm"
        :class="activeFilter === filter 
          ? 'bg-slate-600 text-white border-transparent' 
          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'">
        {{ filter }}
      </button>
    </div>

    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in filteredProjects" :key="project.id" 
        class="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group flex flex-col border border-slate-100">
        
        <!-- Image Container -->
        <div class="relative h-56 overflow-hidden">
          <div class="absolute inset-0 bg-slate-200 animate-pulse"></div>
          <img :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          
          <!-- Category Badge overlay -->
          <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
            {{ project.category }}
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-1 flex flex-col">
          <h3 class="text-xl font-bold text-slate-800 mb-2">{{ project.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{{ project.description }}</p>
          
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
            <span v-for="tech in project.tags" :key="tech" class="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
