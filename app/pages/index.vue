<script setup lang="ts">
useSeoMeta({
  title: 'YELLI MYRIEM MILAMAN COULIBALY — Développeuse Web',
  description: 'Portfolio de YELLI MYRIEM MILAMAN COULIBALY, étudiante MIAGE et développeuse web basée à Abidjan.',
})

const stats = [
  { num: '3+',   label: 'Projets' },
  { num: '5+',   label: 'Technologies' },
  { num: 'MIAGE', label: 'Formation' },
]
</script>

<template>
  <section class="min-h-screen grid grid-cols-2 items-center gap-16 px-16 pt-28 pb-16 relative overflow-hidden">

    <!-- Grille de points -->
    <div class="absolute inset-0 pointer-events-none opacity-50"
      style="background-image:radial-gradient(circle,rgba(124,92,191,.14) 1px,transparent 1px);background-size:38px 38px"/>

    <!-- Lueur -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style="background:radial-gradient(circle,rgba(124,92,191,.08) 0%,transparent 70%)"/>

    <!-- GAUCHE -->
    <div class="relative z-10 space-y-6">

      <!-- Badge disponible -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs"
        style="background:#F0EBF8;border-color:rgba(124,92,191,.2);color:#7C5CBF">
        <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
        Disponible — Stage · Emploi · Études à l'étranger
      </div>

      <!-- Titre -->
      <h1 class="font-['Playfair_Display',serif] font-semibold leading-tight"
        style="font-size:clamp(44px,5vw,68px);letter-spacing:-.02em">
        Bonjour,<br>
        <span style="color:#7C5CBF;font-style:italic">Prénom Nom</span><br>
        développeuse web.
      </h1>

      <!-- Description -->
      <p class="text-sm leading-relaxed font-light max-w-md" style="color:#524E61">
        Étudiante en Master MIAGE, je conçois des expériences digitales modernes — du code propre, des interfaces élégantes, des solutions qui fonctionnent vraiment.
      </p>

      <!-- Boutons -->
      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/projects"
          class="inline-flex items-center gap-3 bg-[#1C1828] text-white text-sm font-medium px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-[#7C5CBF] hover:-translate-y-0.5"
          style="box-shadow:0 0 0 0 rgba(124,92,191,0)">
          Voir mes projets →
        </NuxtLink>
        <button
          class="inline-flex items-center gap-2 text-sm px-7 py-3.5 rounded-xl border-2 transition-all duration-200 hover:border-[#7C5CBF] hover:text-[#7C5CBF] hover:-translate-y-0.5"
          style="border-color:#E6E2EE;color:#1C1828">
          Télécharger CV
        </button>
      </div>

      <!-- Séparateur -->
      <div class="h-px w-full" style="background:#E6E2EE"/>

      <!-- Stats -->
      <div class="flex gap-10">
        <template v-for="(stat, i) in stats" :key="stat.label">
          <div>
            <div class="font-['Playfair_Display',serif] text-3xl font-semibold" style="color:#1C1828">
              {{ stat.num }}
            </div>
            <div class="text-xs uppercase tracking-widest mt-1" style="color:#9B96AA">
              {{ stat.label }}
            </div>
          </div>
          <div v-if="i < stats.length - 1" class="w-px" style="background:#E6E2EE"/>
        </template>
      </div>

    </div>

    <!-- DROITE — Photo -->
    <div class="flex justify-center items-center relative z-10">
      <div class="relative" style="width:min(320px,100%);aspect-ratio:3/4">

        <!-- Fond décoratif 1 -->
        <div class="absolute inset-0 rounded-[28px_6px_28px_6px]"
          style="background:#F0EBF8;transform:rotate(4deg) translate(8px,8px)"/>

        <!-- Fond décoratif 2 -->
        <div class="absolute inset-0 rounded-[6px_28px_6px_28px]"
          style="background:rgba(124,92,191,.07);transform:rotate(-2deg) translate(-4px,4px)"/>

        <!-- Cadre photo principal -->
        <div class="absolute inset-0 rounded-[6px_28px_6px_28px] overflow-hidden border flex items-center justify-center"
          style="background:linear-gradient(145deg,#EDE7F6,#C8B6E2);border-color:rgba(124,92,191,.2)">
          
            
            <img src="/photo.jpg" alt="Prénom Nom" class="w-full h-full object-cover">
          
          <span class="font-['Playfair_Display',serif] italic text-8xl"
            style="color:rgba(124,92,191,.2)">PN</span>
        </div>

        <!-- Anneau rotatif -->
        <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full"
          style="border:1.5px dashed rgba(124,92,191,.25);animation:spin 20s linear infinite"/>

        <!-- Tag disponible -->
        <div class="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 min-w-[170px]"
          style="border:1px solid #E6E2EE;box-shadow:0 8px 40px rgba(28,24,40,.08)">
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            <span class="text-xs font-medium" style="color:#1C1828">Disponible</span>
          </div>
          <p class="text-xs leading-relaxed" style="color:#9B96AA">
            Stage · Emploi<br>Études à l'étranger
          </p>
        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>