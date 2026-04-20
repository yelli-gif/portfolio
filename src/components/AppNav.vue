<template>
  <nav class="py-8 px-12 flex justify-between items-center bg-transparent relative z-50">
    <div class="flex items-center gap-2">
      <button class="lg:hidden text-brand-dark">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <NuxtLink to="/" class="text-2xl font-serif font-bold text-brand-dark tracking-tight">
        <span class="italic">MIAGE</span> ATELIER
      </NuxtLink>
    </div>

    <div class="hidden lg:flex items-center gap-10 font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">
      <NuxtLink to="/expertise" class="hover:text-brand-green transition-colors pb-1" active-class="text-brand-green">Exhibits</NuxtLink>
      <NuxtLink to="/projects" class="hover:text-brand-green transition-colors pb-1" active-class="text-brand-green">Portfolio</NuxtLink>
      <NuxtLink to="/about" class="hover:text-brand-green transition-colors pb-1 border-b-2 border-transparent" active-class="border-brand-green text-brand-green">Timeline</NuxtLink>
      <NuxtLink to="/expertise" class="hover:text-brand-green transition-colors pb-1" active-class="text-brand-green">Services</NuxtLink>
    </div>

    <div class="flex items-center gap-4">
      <NuxtLink to="/contact" class="hidden md:block text-[10px] tracking-widest font-bold text-brand-dark hover:text-brand-green transition-colors border-b border-brand-dark/20 pb-1 mr-4">Contact</NuxtLink>
      <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm ring-1 ring-black/5">
        <img src="https://ui-avatars.com/api/?name=Yelli+Coulibaly&background=4A6759&color=fff" alt="Avatar" class="w-full h-full object-cover">
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
