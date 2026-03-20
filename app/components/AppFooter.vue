<script setup lang="ts">
const links = [
  { name: 'Accueil',     path: '/' },
  { name: 'À propos',    path: '/about' },
  { name: 'Projets',     path: '/projects' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Contact',     path: '/contact' },
]
</script>

<template>
  <footer class="relative overflow-hidden"
    style="background:#1C1828">

    <!-- Lueur décorative -->
    <div class="absolute inset-0 pointer-events-none"
      style="background:radial-gradient(ellipse 60% 80% at 50% 120%,rgba(124,92,191,.15),transparent)"/>

    <div class="relative max-w-6xl mx-auto px-16 py-12 grid grid-cols-3 items-center gap-6">

      <!-- Logo + copyright -->
      <div>
        <div class="font-['Playfair_Display',serif] text-xl font-semibold text-white mb-1">
          dev<span class="text-[#A98AD4] italic">.</span>
        </div>
        <p class="text-xs text-white/25">© 2025 — Prénom Nom</p>
      </div>

      <!-- Liens -->
      <nav class="flex gap-6 justify-center">
        <NuxtLink v-for="link in links" :key="link.path" :to="link.path"
          class="text-xs text-white/35 uppercase tracking-widest transition-colors duration-200 hover:text-white">
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Localisation + réseaux -->
      <div class="text-right">
        <p class="text-xs text-white/25 mb-3">Abidjan, Côte d'Ivoire</p>
        <div class="flex gap-2 justify-end">
          <a href="https://github.com/" class="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-xs font-mono font-semibold text-white/35 transition-all duration-200 hover:border-[#A98AD4] hover:text-white hover:bg-[#7C5CBF]/15">
            gh
          </a>
          <a href="www.linkedin.com/in/yelli-myriem-milaman-coulibaly-810026359" class="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-xs font-mono font-semibold text-white/35 transition-all duration-200 hover:border-[#A98AD4] hover:text-white hover:bg-[#7C5CBF]/15">
            in
          </a>
          <a href="mailto:yellicoulibaly58@gmail.com" class="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-xs font-mono font-semibold text-white/35 transition-all duration-200 hover:border-[#A98AD4] hover:text-white hover:bg-[#7C5CBF]/15">
            @
          </a>
        </div>
      </div>

    </div>

    <!-- Ligne de séparation -->
    <div class="border-t border-white/5"/>

  </footer>
</template>