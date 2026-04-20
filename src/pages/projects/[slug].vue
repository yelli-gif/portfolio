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
              L'Architecture derrière la Solution
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
                    <!-- Dynamic SVG Placeholder -->
                    <svg v-if="feature.icon === 'stock' || feature.icon === 'cube'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <svg v-else-if="feature.icon === 'payment' || feature.icon === 'bourse'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
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

              <div class="pt-8" v-if="project.liveUrl">
                <a :href="project.liveUrl" target="_blank" class="w-full bg-brand-green text-white py-5 rounded-2xl font-serif text-xl font-bold transition-all hover:bg-opacity-90 flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20">
                  Voir le projet live
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- VISUALS SECTION -->
        <div class="mt-40">
          <h3 class="text-5xl font-serif text-brand-dark mb-4">Aperçus du Projet</h3>
          <p class="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">Immersion dans l'interface</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(visual, i) in project.visuals" :key="i" class="rounded-[30px] bg-gray-100 aspect-video overflow-hidden shadow-sm">
               <img :src="visual" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

const projects = {
  'y-boutique': {
    title: 'Y\'Boutique',
    subtitle: 'NUXT 3 & SUPABASE - E-COMMERCE PREMIUM',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    description: [
      'Y\'Boutique est une solution e-commerce moderne conçue pour offrir une expérience d\'achat fluide et sécurisée. Le projet repose sur une architecture robuste utilisant Nuxt 3 pour le rendu haute performance et Supabase pour la gestion des données en temps réel et l\'authentification.',
      'Nous avons particulièrement soigné le tunnel de commande, en intégrant un système de paiement Wave simplifié et un calculateur de frais de livraison dynamique qui s\'adapte selon la localisation du client (Abidjan, Intérieur ou International).'
    ],
    features: [
      { title: 'Gestion de Stock & Supabase', desc: 'Synchronisation instantanée de l\'inventaire et gestion des profils clients sécurisée via Supabase.', icon: 'cube' },
      { title: 'Calculateur de Livraison', desc: 'Logique métier avancée pour l\'application automatique des frais de port selon la destination.', icon: 'bourse' },
      { title: 'Checkout Optimisé', desc: 'Interface de paiement verrouillée jusqu\'à validation des infos pour garantir une transaction sans erreur.', icon: 'bourse' }
    ],
    techStack: ['Nuxt 3', 'Supabase', 'Tailwind CSS', 'Paiement Wave', 'Vercel'],
    deliverables: ['Interface Client', 'Système de Commande', 'Base de données Supabase', 'Logique de Livraison'],
    liveUrl: '',
    visuals: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  'medilink': {
    title: 'Medilink',
    subtitle: 'REACT & REACT NATIVE - GESTION MÉDICALE',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop',
    description: [
      'Medilink est une plateforme de gestion de file d\'attente médicale unifiée. Elle permet aux établissements de santé de gérer l\'accueil des patients de manière fluide, de la prise de ticket à la consultation.',
      'Le projet a été piloté via Trello pour une gestion agile des fonctionnalités. L\'interface de réception, développée en React/TypeScript, offre une réactivité exemplaire pour le suivi des patients en temps réel et la validation des tickets via scan.'
    ],
    features: [
      { title: 'Gestion de Tickets Temps Réel', desc: 'Affichage dynamique de la file d\'attente et notifications de passage.', icon: 'users' },
      { title: 'Interface Réceptionniste', desc: 'Tableau de bord optimisé pour l\'accueil patient et la vérification rapide des rendez-vous.', icon: 'dashboard' },
      { title: 'Organisation Agile (Trello)', desc: 'Structure de projet organisée pour une itération rapide sur les besoins cliniques.', icon: 'cube' }
    ],
    techStack: ['React', 'TypeScript', 'Trello', 'Tailwind CSS', 'React Native'],
    deliverables: ['Interface Réception', 'Application Patient', 'Système de Tickets', 'Dashboard Admin'],
    liveUrl: '',
    visuals: [
      'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-217359f49f4c?q=80&w=2070&auto=format&fit=crop'
    ]
  }
}

const project = computed(() => projects[route.params.slug])

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.grayscale:hover {
  filter: grayscale(0);
}
</style>
