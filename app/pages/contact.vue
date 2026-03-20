<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Portfolio',
  description: 'Me contacter pour une opportunité ou une question.',
})

const submitForm = () => {
  // Prevent default and show alert optionally
  alert("Message envoyé ! (Simulation)")
}
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
    
    <div class="text-center space-y-4 mb-16">
      <h1 class="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
        Contactez-moi
      </h1>
      <p class="text-lg text-slate-500">Une question, un projet ou une opportunité d'alternance ? N'hésitez pas !</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
      
      <!-- Contact Info -->
      <div class="md:col-span-2 space-y-8">
        <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 space-y-6">
          <h3 class="text-xl font-bold text-slate-800">Coordonnées</h3>
          
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              📍
            </div>
            <div>
              <p class="text-sm font-medium text-slate-800">Localisation</p>
              <p class="text-slate-500 text-sm mt-1">Abidjan, Côte d'Ivoire</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
              ✉️
            </div>
            <div>
              <p class="text-sm font-medium text-slate-800">Email</p>
              <a href="mailto:yellicoulibaly58@gmail.com" class="text-slate-500 text-sm mt-1 hover:text-slate-700 transition">yellicoulibaly58@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="md:col-span-3">
        <form @submit.prevent="submitForm" class="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-soft border border-slate-100 space-y-6">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700 ml-1">Prénom & Nom</label>
              <input type="text" required
                class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-slate-700" 
                placeholder="John Doe">
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700 ml-1">Email</label>
              <input type="email" required
                class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-slate-700" 
                placeholder="john@example.com">
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 ml-1">Sujet</label>
            <input type="text" required
              class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-slate-700" 
              placeholder="Sujet de votre message">
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-700 ml-1">Message</label>
            <textarea rows="5" required
              class="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:bg-white transition-all text-slate-700 resize-none" 
              placeholder="Que puis-je faire pour vous ?"></textarea>
          </div>

          <button type="submit" 
            class="w-full bg-slate-800 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-700 shadow-md hover:shadow-lg hover:-translate-y-1">
            Envoyer le message
          </button>
        </form>
      </div>

    </div>
  </main>
</template>
