<script setup lang="ts">
useSeoMeta({
  title: 'À propos — Portfolio',
  description: 'Découvrez mon parcours et ma passion pour le développement web.',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
    
    <div class="text-center space-y-4 mb-16">
      <h1 class="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
        À propos de moi
      </h1>
      <p class="text-lg text-slate-500">Découvrez mon parcours et ma vision du développement.</p>
    </div>

    <!-- Main Card -->
    <div class="bg-white rounded-[3rem] p-8 md:p-14 shadow-soft border border-slate-100 flex flex-col lg:flex-row gap-12 items-center">
      
      <!-- Text content -->
      <div class="flex-1 space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 font-medium text-slate-600 text-sm border border-slate-100">
          🎓 Étudiante MIAGE
        </div>
        
        <h2 class="text-3xl font-bold text-slate-800">Développeuse Web & Mobile Passionnée</h2>
        
        <p class="text-slate-600 leading-relaxed text-lg">
          Actuellement en <strong>Master MIAGE</strong> (Méthodes Informatiques Appliquées à la Gestion des Entreprises), 
          j'évolue à la croisée des chemins entre les enjeux métiers et les solutions techniques. 
          J'ai développé une solide expertise en création d'applications modernes, avec un oeil attentif sur l'expérience utilisateur et les performances.
        </p>

        <p class="text-slate-600 leading-relaxed text-lg">
          Mon objectif ? Transformer des problèmes complexes en interfaces simples, élégantes et intuitives. 
          Je suis toujours avide d'apprendre de nouvelles technologies et d'aller au-delà de ma zone de confort.
        </p>

        <!-- Small stats/badges inside about -->
        <div class="flex flex-wrap gap-4 pt-4">
          <div class="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex-1 min-w-[140px]">
            <span class="block text-2xl font-bold text-slate-700 mb-1">3+</span>
            <span class="text-xs text-slate-500 uppercase tracking-wide font-medium">Anciens Projets</span>
          </div>
          <div class="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 flex-1 min-w-[140px]">
            <span class="block text-2xl font-bold text-slate-700 mb-1">Master</span>
            <span class="text-xs text-slate-500 uppercase tracking-wide font-medium">Niveau d'études</span>
          </div>
        </div>
      </div>

      <!-- Image / Illustration right -->
      <div class="w-full lg:w-[400px] h-[400px] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-inner flex items-center justify-center">
        <!-- Decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-200 to-white/50"></div>
        <div class="w-48 h-48 bg-white/40 rounded-full blur-3xl absolute top-0 left-0"></div>
        
        <span class="relative z-10 text-slate-400 font-medium text-xl">Illustration</span>
      </div>

    </div>
  </main>
</template>
