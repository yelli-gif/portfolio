<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pt-20 pb-16">
      <div class="max-w-4xl">
        <div class="inline-block px-0 py-1 text-brand-green text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
          Biography
        </div>
        
        <h1 class="text-7xl lg:text-8xl font-serif text-brand-dark leading-tight mb-8">
          À propos
        </h1>

        <div class="max-w-3xl">
          <p class="text-xl lg:text-2xl text-gray-500 leading-relaxed font-light">
            Actuellement étudiant en parcours <span class="font-bold text-brand-green">MIAGE</span>, je cultive une approche analytique et technique des systèmes d'information. Passionné par l'intersection entre le code et l'expérience utilisateur, je me spécialise aujourd'hui dans le <span class="italic">développement web moderne</span> et les solutions innovantes d'e-commerce. Mon objectif est de bâtir des plateformes robustes où la performance rencontre une élégance visuelle discrète.
          </p>
        </div>
      </div>
    </section>

    <!-- IMAGE & QUOTE SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pb-32">
      <div class="relative">
        <div class="rounded-[40px] overflow-hidden aspect-[16/10] shadow-xl">
          <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" alt="Desk focus" class="w-full h-full object-cover" />
        </div>
        
        <!-- Overlapping Quote -->
        <div class="absolute -bottom-12 -left-4 lg:left-8 bg-[#E6E6E0] p-10 rounded-2xl shadow-lg max-w-sm border border-white/10">
          <p class="font-serif italic text-2xl text-brand-green leading-snug">
            "La technologie au service de l'excellence utilisateur."
          </p>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES SECTION -->
    <section class="bg-white py-32 rounded-[60px] relative z-10 shadow-sm">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="mb-20">
          <div class="text-brand-green text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
            Capabilities
          </div>
          <h2 class="text-6xl font-serif text-brand-dark">Compétences</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Skill Card 1 -->
          <div class="p-10 rounded-3xl bg-[#F9F9F7] border border-gray-100 transition-all hover:shadow-md">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">HTML / CSS / JS</h3>
            <p class="text-gray-500 leading-relaxed">Fondations solides pour des interfaces réactives et accessibles.</p>
          </div>

          <!-- Skill Card 2 -->
          <div class="p-10 rounded-3xl bg-[#F9F9F7] border border-gray-100 transition-all hover:shadow-md">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">Nuxt 3</h3>
            <p class="text-gray-500 leading-relaxed">Expertise en frameworks Vue.js pour des applications web performantes.</p>
          </div>

          <!-- Skill Card 3 -->
          <div class="p-10 rounded-3xl bg-[#F9F9F7] border border-gray-100 transition-all hover:shadow-md">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">GitHub</h3>
            <p class="text-gray-500 leading-relaxed">Versionnage rigoureux et collaboration fluide sur les projets complexes.</p>
          </div>

          <!-- Skill Card 4 -->
          <div class="p-10 rounded-3xl bg-[#F9F9F7] border border-gray-100 transition-all hover:shadow-md">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-3xl font-serif font-bold text-brand-dark mb-4">Data Analysis</h3>
            <p class="text-gray-500 leading-relaxed">Analyse stratégique de données pour optimiser les décisions e-commerce.</p>
          </div>
        </div>

        <!-- CTA FOOTER -->
        <div class="mt-40 text-center">
          <h3 class="text-5xl lg:text-7xl font-serif text-brand-dark mb-12 italic leading-tight">
            Prêt à collaborer sur votre <br /> prochain projet ?
          </h3>
          <NuxtLink to="/contact" class="btn-pill bg-brand-green text-white inline-flex items-center gap-2 hover:bg-opacity-90 transition-all">
            Me contacter
          </NuxtLink>
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
