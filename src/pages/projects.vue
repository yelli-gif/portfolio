<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pt-20 pb-32">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div class="max-w-2xl">
          <div class="text-brand-green text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
            Mes Réalisations
          </div>
          <h1 class="text-7xl lg:text-8xl font-serif text-brand-dark leading-tight">
            Projets <br />
            <span class="italic text-brand-green">Réels</span>
          </h1>
        </div>
        <div class="lg:max-w-xs lg:pt-16">
          <p class="text-gray-500 leading-relaxed text-right lg:text-left font-light">
            Une sélection de solutions concrètes développées avec passion et rigueur technique.
          </p>
        </div>
      </div>

      <!-- STAGGERED PROJECTS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-20">
        
        <!-- Project 1: Y'Boutique -->
        <div class="group">
          <NuxtLink to="/projects/y-boutique">
            <div class="rounded-[40px] overflow-hidden aspect-[4/3] mb-8 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Y'Boutique" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
          </NuxtLink>
          <div class="flex justify-between items-end p-2">
            <div>
              <h2 class="text-4xl font-serif text-brand-dark mb-4">Y'Boutique</h2>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nuxt 3</span>
                <span class="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">Supabase</span>
                <span class="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">Wave</span>
              </div>
            </div>
            <NuxtLink to="/projects/y-boutique" class="bg-brand-green text-white p-4 rounded-full transition-all hover:scale-110 shadow-lg shadow-brand-green/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Project 2: Medilink (Staggered Down) -->
        <div class="group md:mt-32">
          <NuxtLink to="/projects/medilink">
            <div class="rounded-[40px] overflow-hidden aspect-[3/4] mb-8 shadow-sm transition-all duration-500 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop" alt="Medilink" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
          </NuxtLink>
          <div class="flex justify-between items-end p-2">
            <div>
              <h2 class="text-4xl font-serif text-brand-dark mb-4">Medilink</h2>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">React</span>
                <span class="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trello</span>
              </div>
            </div>
            <NuxtLink to="/projects/medilink" class="text-brand-green p-4 border border-brand-green/20 rounded-full hover:bg-brand-green hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Project 3: En Cours -->
        <div class="group">
          <div class="rounded-[40px] bg-white border border-dashed border-gray-200 aspect-[4/3] mb-8 flex items-center justify-center p-12 text-center transition-all hover:border-brand-green/50">
            <div>
               <div class="w-16 h-16 rounded-full bg-brand-green-soft flex items-center justify-center text-brand-green mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
               </div>
               <h3 class="text-2xl font-serif text-brand-dark mb-2">Projet en cours...</h3>
               <p class="text-gray-400 text-sm">Prévu pour bientôt</p>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA FOOTER -->
      <div class="mt-48 text-center">
        <h3 class="text-5xl lg:text-7xl font-serif text-brand-dark mb-12 leading-tight">
          Envie de <span class="italic text-brand-green">collaborer</span> ?
        </h3>
        <p class="max-w-xl mx-auto text-gray-500 text-lg mb-12 font-light leading-relaxed">
          Je suis toujours à la recherche de nouveaux défis. Discutons de votre vision.
        </p>
        <NuxtLink to="/contact" class="btn-pill bg-brand-green text-white inline-flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-xl shadow-brand-green/20">
          Me contacter
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
