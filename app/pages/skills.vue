<script setup lang="ts">
useSeoMeta({
  title: 'Compétences — Portfolio',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 px-6 md:px-16 max-w-5xl mx-auto">
      <div class="text-center space-y-4 mb-16">
        <h1 class="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
          Mes Compétences
        </h1>
        <p class="text-lg text-slate-500">Les technologies et langages avec lesquels je travaille au quotidien.</p>
      </div>

      <div class="bg-white rounded-[3rem] p-10 md:p-14 shadow-soft border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-10">
         
         <div class="space-y-6">
           <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl">🌐</div>
           <h3 class="text-xl font-bold text-slate-800">Front-End</h3>
           <ul class="space-y-3">
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Vue.js / Nuxt 3</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> React.js</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Tailwind CSS</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> HTML / CSS / JS</li>
           </ul>
         </div>

         <div class="space-y-6">
           <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl">⚙️</div>
           <h3 class="text-xl font-bold text-slate-800">Back-End</h3>
           <ul class="space-y-3">
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Node.js / Express</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Java / Spring Boot</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> PostgreSQL / MySQL</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> API REST</li>
           </ul>
         </div>

         <div class="space-y-6">
           <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl">🛠️</div>
           <h3 class="text-xl font-bold text-slate-800">Outils</h3>
           <ul class="space-y-3">
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Git & GitHub</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Docker / CI-CD</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Figma / UI Design</li>
             <li class="flex items-center gap-3 text-slate-600 font-medium"><span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Méthodes Agiles</li>
           </ul>
         </div>

      </div>
  </main>
</template>
