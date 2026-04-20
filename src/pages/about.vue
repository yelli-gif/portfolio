<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div class="max-w-4xl">
        <div class="text-brand-green text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
          Chronologie d'excellence
        </div>
        <h1 class="text-8xl lg:text-9xl font-serif text-brand-dark leading-tight mb-12">
          Parcours
        </h1>
        <p class="text-xl lg:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
          L'équilibre entre la rigueur de l'ingénierie logicielle et la vision stratégique du management. 
          Un itinéraire académique et professionnel dédié à l'innovation au sein de l'écosystème MIAGE.
        </p>
      </div>
    </section>

    <!-- TIMELINE SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pb-40">
      <div class="relative space-y-24">
        <!-- Vertical Line -->
        <div class="absolute left-0 lg:left-[15%] top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block"></div>

        <!-- 2024: Licence 3 MIAGE -->
        <div class="relative flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div class="lg:w-[15%] pt-2 hidden lg:block">
            <span class="text-4xl font-serif text-gray-300 italic">2024</span>
          </div>
          <div class="flex-1 bg-white rounded-[40px] p-8 lg:p-16 border border-gray-100 shadow-sm relative transition-all hover:shadow-xl">
             <!-- Dot on line -->
             <div class="absolute left-[-15.3%] top-10 w-3 h-3 rounded-full bg-white border-2 border-brand-green hidden lg:block"></div>
             
             <div class="flex justify-between items-start mb-8">
               <span class="px-4 py-1 bg-brand-beige text-brand-green text-[10px] tracking-widest font-bold uppercase rounded-lg">En Cours</span>
               <div class="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 Université Félix H. Boigny
               </div>
             </div>

             <h2 class="text-5xl font-serif text-brand-dark mb-6">Licence 3 MIAGE</h2>
             <p class="text-lg text-gray-500 leading-relaxed font-light mb-12 max-w-3xl">
               Spécialisation dans les Systèmes d'Information. Maîtrise de la dualité gestion-informatique à travers l'étude approfondie du développement, de la modélisation UML et du contrôle de gestion.
             </p>

             <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <h4 class="text-[10px] uppercase tracking-widest font-bold text-brand-green mb-6">Tech Focus</h4>
                 <ul class="space-y-4 text-gray-500 text-sm">
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Architecture Logicielle</li>
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Base de Données Oracle</li>
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Algorithmique Avancée</li>
                 </ul>
               </div>
               <div>
                 <h4 class="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 mb-6 font-serif italic" style="color: #8B5E3C">Management Focus</h4>
                 <ul class="space-y-4 text-gray-500 text-sm">
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Marketing Stratégique</li>
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Comptabilité Analytique</li>
                   <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> Gestion de Projet Agile</li>
                 </ul>
               </div>
             </div>
          </div>
        </div>

        <!-- Stage: Assistant Développeur -->
        <div class="relative flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div class="lg:w-[15%] hidden lg:block"></div>
          <div class="flex-1 bg-gray-50/50 rounded-[40px] p-8 lg:p-12 border border-gray-100 relative group transition-all hover:bg-white hover:shadow-lg">
             <div class="absolute left-[-15.3%] top-10 w-3 h-3 rounded-full bg-gray-200 border-2 border-white group-hover:bg-brand-green transition-colors hidden lg:block"></div>
             
             <div class="mb-6">
               <span class="text-[10px] tracking-widest font-bold uppercase text-brand-green">Stage Professionnel</span>
             </div>
             <h3 class="text-3xl font-serif text-brand-dark mb-4">Assistant Développeur Full-Stack</h3>
             <p class="text-gray-500 leading-relaxed font-light mb-8 max-w-2xl">
               Immersion au sein d'une startup Fintech. Contribution au développement de modules de visualisation de données en React et intégration d'API REST.
             </p>
             <div class="flex gap-2">
               <span class="px-3 py-1 bg-white rounded-lg text-[8px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">React.js</span>
               <span class="px-3 py-1 bg-white rounded-lg text-[8px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">Node.js</span>
               <span class="px-3 py-1 bg-white rounded-lg text-[8px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">MongoDB</span>
             </div>
          </div>
        </div>

        <!-- Formation: L2 -->
        <div class="relative flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div class="lg:w-[15%] hidden lg:block"></div>
          <div class="flex-1 bg-gray-50/50 rounded-[40px] p-8 lg:p-12 border border-gray-100 relative group transition-all hover:bg-white hover:shadow-lg">
             <div class="absolute left-[-15.3%] top-10 w-3 h-3 rounded-full bg-gray-200 border-2 border-white group-hover:bg-brand-green transition-colors hidden lg:block"></div>
             
             <div class="mb-6">
               <span class="text-[10px] tracking-widest font-bold uppercase text-gray-400">Formation</span>
             </div>
             <h3 class="text-3xl font-serif text-brand-dark mb-4">L2 Informatique & Gestion</h3>
             <p class="text-gray-500 leading-relaxed font-light max-w-2xl">
               Consolidation des bases en algorithmique et introduction à la microéconomie. Distinction pour le projet de fin d'année : Application de gestion d'inventaire.
             </p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUOTE SECTION -->
    <section class="container mx-auto px-6 lg:px-12 py-40 border-t border-gray-100">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="lg:w-2/3">
          <blockquote class="text-5xl lg:text-7xl font-serif text-brand-dark leading-tight italic">
            "La MIAGE n'est pas seulement une formation, c'est une culture de la <span class="text-brand-green">double compétence</span>, indispensable à l'architecte du futur."
          </blockquote>
        </div>
        <div class="lg:w-1/3 relative">
          <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-brand-dark shadow-2xl flex flex-col items-center justify-center text-center p-12 transition-transform hover:scale-105">
            <div class="text-brand-green-soft mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
            </div>
            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">MIAGE Spirit</p>
            <h4 class="text-2xl font-serif text-white tracking-widest uppercase">Team Work</h4>
          </div>
          <!-- Decorative circle -->
          <div class="absolute -top-10 -right-10 w-24 h-24 bg-brand-green-soft rounded-full -z-10 blur-xl opacity-50"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
/* Outfit for sub-headers and tags */
.tracking-widest {
  font-family: 'Outfit', sans-serif;
}
</style>
