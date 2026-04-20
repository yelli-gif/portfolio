<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO SECTION -->
    <section class="container mx-auto px-12 pt-20 pb-16">
      <div class="max-w-4xl">
        <div class="inline-block px-4 py-1 bg-brand-green-soft text-brand-green text-[10px] tracking-[0.2em] font-bold uppercase rounded-sm mb-12">
          Portfolio Personnel
        </div>
        
        <h1 class="text-7xl lg:text-8xl font-serif text-brand-dark leading-tight mb-4">
          Yelli Myriem <br />
          <span class="italic text-brand-green opacity-90">Milaman Coulibaly</span>
        </h1>

        <p class="text-xl lg:text-2xl text-gray-500 font-sans italic mb-8 font-light">
          Développeuse web | Étudiante MIAGE
        </p>

        <p class="max-w-2xl text-gray-600 text-lg leading-relaxed mb-12">
          Passionnée par l'intersection entre l'ingénierie logicielle et le design fonctionnel. 
          Je conçois des expériences numériques durables et centrées sur l'utilisateur 
          au sein de mon parcours d'excellence en MIAGE.
        </p>

        <div class="flex items-center gap-8">
          <NuxtLink to="/projects" class="btn-pill btn-primary flex items-center gap-2">
            Voir mes projets
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="text-brand-green font-bold hover:underline">
            Me contacter
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- BIG IMAGE SECTION -->
    <section class="container mx-auto px-12 pb-32">
      <div class="relative rounded-[40px] overflow-hidden aspect-[4/3] lg:aspect-[16/9] shadow-2xl">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Workspace" class="w-full h-full object-cover" />
        <div class="absolute bottom-12 left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg max-w-sm">
          <div class="flex items-center gap-4">
            <div class="p-3 bg-brand-green-soft rounded-lg text-brand-green">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Compétence Clé</p>
              <p class="font-serif text-xl font-bold text-brand-dark">Fullstack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APPROACH SECTION -->
    <section class="bg-white py-32 rounded-[60px] -mt-16 relative z-10 shadow-sm border-t border-gray-50">
      <div class="container mx-auto px-12">
        <div class="flex flex-col lg:flex-row gap-20 items-start">
          <div class="lg:w-1/3">
            <h2 class="text-5xl font-serif text-brand-dark mb-6">Mon Approche</h2>
          </div>
          <div class="lg:w-2/3">
            <p class="text-xl text-gray-500 leading-relaxed font-light">
              L'informatique ne se limite pas au code. C'est l'art de résoudre des problèmes complexes avec élégance. 
              Mon cursus MIAGE m'a permis d'allier la rigueur de la gestion d'entreprise à la créativité du développement technique.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div class="card-feature">
            <div class="text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-serif text-2xl font-bold mb-4">Développement Web</h3>
            <p class="text-gray-400 text-sm mb-6">React, Node.js, TypeScript</p>
          </div>

          <div class="card-feature bg-brand-green text-white">
            <div class="text-brand-green-soft mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="font-serif text-2xl font-bold mb-4 text-white">Gestion de Projet</h3>
            <p class="text-brand-green-soft text-sm mb-6">Méthodes Agiles, SI</p>
          </div>

          <div class="card-feature">
            <div class="text-brand-green mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-8.486 8.486L11 7.343z" />
              </svg>
            </div>
            <h3 class="font-serif text-2xl font-bold mb-4">UI/UX Design</h3>
            <p class="text-gray-400 text-sm mb-6">Figma, Prototypage</p>
          </div>
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
