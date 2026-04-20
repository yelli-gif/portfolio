<template>
  <main class="bg-brand-beige min-h-screen">
    <!-- HERO & SECTIONS -->
    <section class="container mx-auto px-6 lg:px-12 pt-20 pb-16">
      <div class="flex flex-col lg:flex-row gap-20">
        <!-- Text Content -->
        <div class="lg:w-1/2">
          <h1 class="text-7xl lg:text-8xl font-serif text-brand-dark leading-tight mb-10">
            Commençons quelque <br />
            <span class="italic text-brand-green">chose de nouveau.</span>
          </h1>
          
          <p class="text-gray-500 text-lg lg:text-xl leading-relaxed font-light mb-16 max-w-lg">
            Que vous ayez un projet spécifique en tête ou que vous souhaitiez simplement échanger, 
            je suis toujours ouverte à de nouvelles opportunités de discussions et collaborations créatives.
          </p>

          <div class="space-y-12">
            <div>
              <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Adresse Email</p>
              <a href="mailto:hello@miage-portfolio.com" class="text-3xl lg:text-4xl font-serif text-brand-dark hover:text-brand-green transition-colors">
                hello@miage-portfolio.com
              </a>
            </div>

            <div>
              <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6">Message Direct</p>
              <a href="#" class="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-brand-green/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Contactez-moi sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Info Cards -->
        <div class="lg:w-1/2 flex flex-col gap-8">
          <div class="p-10 rounded-3xl bg-[#F4F4F0] border border-white/20 transition-all hover:shadow-md flex items-start gap-6">
            <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-serif font-bold text-brand-dark mb-1">Temps de réponse</h3>
              <p class="text-gray-500">Moins de 24 heures</p>
            </div>
          </div>

          <div class="p-10 rounded-3xl bg-[#F4F4F0] border border-white/20 transition-all hover:shadow-md flex items-start gap-6">
            <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-serif font-bold text-brand-dark mb-1">Localisation</h3>
              <p class="text-gray-500">Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FORM SECTION -->
    <section class="container mx-auto px-6 lg:px-12 pb-32">
      <div class="bg-white rounded-[40px] p-8 lg:p-20 shadow-sm border border-gray-50">
        <form @submit.prevent class="space-y-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Full Name -->
            <div class="space-y-4">
              <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Nom Complet</label>
              <input type="text" placeholder="Jane Doe" class="w-full bg-[#EBEBE6] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-green transition-all outline-none md:text-lg" />
            </div>
            <!-- Email -->
            <div class="space-y-4">
              <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Email</label>
              <input type="email" placeholder="jane@example.com" class="w-full bg-[#EBEBE6] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-green transition-all outline-none md:text-lg" />
            </div>
          </div>

          <!-- Subject -->
          <div class="space-y-4">
            <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Objet</label>
            <input type="text" placeholder="Demande de projet" class="w-full bg-[#EBEBE6] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-green transition-all outline-none md:text-lg" />
          </div>

          <!-- Message -->
          <div class="space-y-4">
            <label class="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Votre Message</label>
            <textarea rows="6" placeholder="Parlez-moi de votre projet..." class="w-full bg-[#EBEBE6] border-none rounded-2xl p-6 text-brand-dark focus:ring-2 focus:ring-brand-green transition-all outline-none md:text-lg resize-none"></textarea>
          </div>

          <!-- Submit -->
          <div class="pt-8">
            <button type="submit" class="w-full bg-brand-green text-white py-6 rounded-3xl font-serif text-2xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-brand-green/20">
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- FOOTER IMAGE -->
    <section class="container mx-auto px-6 lg:px-12 pb-20">
      <div class="rounded-[40px] overflow-hidden aspect-[16/7] md:aspect-[21/9] shadow-2xl">
        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop" alt="Paris Streetscape" class="w-full h-full object-cover grayscale brightness-75" />
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
