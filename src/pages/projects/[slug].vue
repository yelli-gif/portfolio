<template>
  <main class="bg-brand-beige min-h-screen" v-if="project">
    <!-- HEADER -->
    <nav class="container mx-auto px-6 lg:px-12 pt-12 flex justify-between items-center">
      <NuxtLink to="/projects" class="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-green transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour aux Projets
      </NuxtLink>
    </nav>

    <section class="container mx-auto px-6 lg:px-12 py-16">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-7xl lg:text-9xl font-serif text-brand-dark mb-4 leading-tight">
          {{ project.title }}
        </h1>
        <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">
          {{ project.subtitle }}
        </p>

        <!-- HERO IMAGE -->
        <div class="rounded-[40px] overflow-hidden aspect-[16/8] shadow-2xl mb-24 grayscale hover:grayscale-0 transition-all duration-700">
          <img :src="project.heroImage" :alt="project.title" class="w-full h-full object-cover" />
        </div>

        <!-- MAIN LAYOUT -->
        <div class="flex flex-col lg:flex-row gap-20">
          <!-- Left Column: Content -->
          <div class="lg:w-2/3">
            <h2 class="text-4xl italic font-serif text-brand-dark mb-8 leading-tight">
              {{ project.introTitle }}
            </h2>
            <div class="space-y-8 text-xl text-gray-500 leading-relaxed font-light">
              <p v-for="(p, i) in project.description" :key="i">{{ p }}</p>
            </div>

            <!-- KEY FEATURES -->
            <div class="mt-24 p-8 lg:p-16 bg-white rounded-[40px] border border-gray-50 shadow-sm">
              <h3 class="text-3xl font-serif text-brand-dark mb-12">Fonctionnalités Clés</h3>
              <div class="space-y-12">
                <div v-for="(feature, i) in project.features" :key="i" class="flex gap-8">
                  <div class="w-12 h-12 rounded-xl bg-brand-green-soft flex items-center justify-center text-brand-green flex-shrink-0">
                    <component :is="feature.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <h4 class="text-xl font-serif font-bold text-brand-dark mb-2">{{ feature.title }}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed max-w-md">{{ feature.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="lg:w-1/3">
            <div class="sticky top-12 space-y-16">
              <div>
                <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Tech Stack</p>
                <div class="flex flex-wrap gap-3">
                  <span v-for="tech in project.techStack" :key="tech" class="px-5 py-2 bg-white rounded-xl text-xs font-bold text-gray-400 border border-gray-50 uppercase tracking-widest">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div>
                <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Livrables</p>
                <ul class="space-y-4 text-gray-500">
                  <li v-for="item in project.deliverables" :key="item" class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="pt-8">
                <a :href="project.liveUrl" target="_blank" class="w-full bg-brand-green text-white py-5 rounded-2xl font-serif text-xl font-bold transition-all hover:bg-opacity-90 flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20">
                  Lancer le site Live
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- PROCESS & VISUALS -->
        <div class="mt-40">
          <h3 class="text-5xl font-serif text-brand-dark mb-4">Process & Visuels</h3>
          <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">Immersion dans l'architecture et l'interface</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="md:col-span-2 rounded-[30px] bg-gray-100 aspect-video overflow-hidden">
               <img :src="project.visuals[0]" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-[30px] bg-gray-100 aspect-auto overflow-hidden">
               <img :src="project.visuals[1]" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-[30px] bg-gray-100 aspect-square overflow-hidden">
               <img :src="project.visuals[2]" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-[30px] bg-gray-100 aspect-square overflow-hidden">
               <img :src="project.visuals[3]" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { markRaw } from 'vue'

const route = useRoute()
const slug = route.params.slug

// Icons for features
const IconStock = markRaw({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
})
const IconPayment = markRaw({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`
})
const IconDashboard = markRaw({
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>`
})

const projects = {
  'y-boutique': {
    title: 'Y\'Boutique',
    subtitle: 'INTELLIGENCE E-COMMERCE & DÉVELOPPEMENT AVANCÉ',
    introTitle: 'L\'Intelligence derrière la Boutique',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    description: [
      'Ce projet constitue une pierre angulaire de la philosophie MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises). Il comble le fossé entre une architecture technique sophistiquée et une intelligence d\'affaires stratégique.',
      'Conçue pour les entreprises à forte croissance, la plateforme intègre une gestion d\'inventaire en temps réel couplée à des analyses prédictives pour optimiser l\'efficacité de la chaîne d\'approvisionnement tout en offrant une expérience de consommation "Luxe Discret" et sans couture.'
    ],
    features: [
      { title: 'Gestion Prédictive des Stocks', desc: 'Exploitation des données historiques pour prévoir les besoins d\'inventaire et éviter le surstockage.', icon: IconStock },
      { title: 'Écosystème de Paiement Global', desc: 'Gestion fluide multi-devises avec une infrastructure de paiement sécurisée et intégrée.', icon: IconPayment },
      { title: 'Dashboard BI', desc: 'Interface administrative sur mesure fournissant des informations exploitables via le rendu serveur Nuxt 3.', icon: IconDashboard }
    ],
    techStack: ['Nuxt 3', 'Stripe API', 'Tailwind CSS', 'PostgreSQL', 'TypeScript'],
    deliverables: ['Architecture de Base', 'Guide d\'Identité de Marque', 'Documentation Technique'],
    liveUrl: '#',
    visuals: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512428559083-a400a52d790f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  'medilink': {
    title: 'Medilink',
    subtitle: 'ARCHITECTURE DE GESTION DE FLUX PATIENT',
    introTitle: 'L\'Optimisation au service de la Santé',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop',
    description: [
      'Medilink redéfinit l\'accueil en milieu médical grâce à une architecture robuste de traitement des flux. Le projet allie rigueur de gestion et empathie utilisateur pour transformer l\'attente en un parcours fluide et structuré.',
      'Grâce à un système de notification en temps réel et une interface administrative optimisée, Medilink permet aux cliniques d\'améliorer leur efficacité opérationnelle tout en réduisant le stress des patients durant leur prise en charge.'
    ],
    features: [
      { title: 'Optimisation de File d\'Attente', desc: 'Algorithme intelligent de répartition des tickets et notifications SMS automatisées.', icon: IconStock },
      { title: 'Interface de Réception Intuitive', desc: 'Tableau de bord haute performance pour une gestion rapide des arrivées et des dossiers patients.', icon: IconDashboard },
      { title: 'Analyse de Performance Clinique', desc: 'Suivi des temps de consultation et des pics d\'affluence pour un meilleur dimensionnement des équipes.', icon: IconPayment }
    ],
    techStack: ['Vue.js', 'Node.js', 'UX Design', 'Supabase', 'Tailwind CSS'],
    deliverables: ['Architecture Flux Patient', 'Système de Notifications', 'Dashboard Dashboard'],
    liveUrl: '#',
    visuals: [
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-217359f49f4c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
    ]
  }
}

const project = projects[slug]

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.grayscale:hover {
  filter: grayscale(0);
}
</style>
