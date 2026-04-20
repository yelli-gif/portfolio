<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pt-20 pb-16">
      <div class="max-w-4xl">
        <div class="text-brand-green text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
          Mes Réalisations
        </div>
        
        <h1 class="text-7xl lg:text-8xl font-serif text-brand-dark leading-tight mb-8">
          Portfolio.
        </h1>

        <div class="max-w-2xl">
          <p class="text-xl lg:text-2xl text-gray-500 leading-relaxed font-light">
            L'excellence technologique au service de solutions concrètes. 
            Découvrez comment je transforme des besoins complexes en expériences numériques raffinées.
          </p>
        </div>
      </div>
    </section>

    <!-- PROJECTS GRID -->
    <section class="container mx-auto px-6 lg:px-12 pb-32">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Project 1: Y'Boutique (Tall Card) -->
        <div class="lg:col-span-2 p-10 lg:p-16 rounded-[40px] bg-white border border-gray-100 shadow-sm flex flex-col justify-between min-h-[500px] group transition-all hover:shadow-xl">
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-green-soft flex items-center justify-center text-brand-green mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 class="text-5xl lg:text-6xl font-serif text-brand-dark mb-6">Y'Boutique</h2>
            <p class="text-xl text-gray-500 leading-relaxed max-w-xl mb-8">
              Conception d'une plateforme e-commerce haut de gamme intégrant des tunnels de conversion optimisés 
              et des solutions de paiement sécurisées pour une performance inégalée.
            </p>
          </div>
          <div class="flex items-center justify-between mt-auto">
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-opacity-90">
              Découvrir
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
            <span class="text-[10px] tracking-[0.2em] font-bold text-gray-300 uppercase">NUXT.JS / TAILWIND / WAVE</span>
          </div>
        </div>

        <!-- Project 2: Medilink (Image-style Card) -->
        <div class="relative rounded-[40px] overflow-hidden group shadow-sm hover:shadow-xl transition-all h-full min-h-[500px]">
          <img src="https://images.unsplash.com/photo-1576091160550-217359f49f4c?q=80&w=2070&auto=format&fit=crop" alt="Medical Interface" class="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div class="absolute inset-0 p-10 flex flex-col justify-end">
            <div class="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-4xl font-serif font-bold text-white mb-4">Medilink</h3>
            <p class="text-white/70 leading-relaxed mb-6">
              Interface intelligente de gestion de file d'attente médicale, 
              optimisant l'accueil et le suivi des patients en temps réel.
            </p>
          </div>
        </div>

        <!-- Project 3: En Cours (Small Card Left) -->
        <div class="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm flex flex-col transition-all hover:shadow-lg">
          <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-brand-green mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">Projet Innovant</h3>
          <p class="text-gray-500 leading-relaxed mb-8 italic">
            "Une nouvelle manière de concevoir l'interaction numérique."
          </p>
          <div class="mt-auto">
            <span class="inline-block px-4 py-1 bg-brand-green-soft text-brand-green text-[10px] tracking-widest font-bold uppercase rounded-full">En Cours</span>
          </div>
        </div>

        <!-- Design Card (Right Small Card) -->
        <div class="lg:col-span-2 p-10 lg:p-12 rounded-[40px] bg-[#F4F4F0] flex flex-col lg:flex-row gap-10 items-center justify-between border border-white/20 transition-all hover:shadow-lg">
          <div class="lg:w-2/3">
            <h3 class="text-4xl font-serif font-bold text-brand-dark mb-6">Design d'Expérience</h3>
            <p class="text-gray-500 leading-relaxed mb-8">
              L'art de créer des parcours utilisateurs fluides qui racontent l'histoire de votre marque à chaque interaction numérique.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">UX Design</span>
              <span class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Interface Artistique</span>
              <span class="px-4 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">Prototypage</span>
            </div>
          </div>
          <div class="lg:w-1/3 flex justify-center">
             <div class="w-48 h-48 bg-brand-dark rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-2xl rotate-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green-soft mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p class="text-[8px] text-gray-500 uppercase tracking-widest font-bold">Mobile First</p>
                <p class="text-white font-serif italic text-sm mt-2">Élégance sur tous les supports</p>
             </div>
          </div>
        </div>

      </div>

      <!-- CTA FOOTER -->
      <div class="mt-40 bg-[#F4F4F0] rounded-[60px] p-20 text-center border border-white shadow-sm">
        <h3 class="text-5xl lg:text-7xl font-serif text-brand-dark mb-12 italic leading-tight">
          Prêt à initier votre <br /> prochain projet ?
        </h3>
        <p class="max-w-2xl mx-auto text-gray-500 text-lg mb-12 font-light">
          Discutons ensemble de la manière dont mon expertise peut propulser votre vision vers l'excellence.
        </p>
        <NuxtLink to="/contact" class="btn-pill bg-brand-green text-white inline-flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-xl shadow-brand-green/20">
          Nous Contacter
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
