<template>
  <nav class="py-6 px-12 flex justify-between items-center bg-transparent relative z-50">
    <div class="flex items-center gap-2">
      <button class="lg:hidden text-brand-dark">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <NuxtLink to="/" class="text-3xl font-serif italic text-brand-green font-medium">Portfolio</NuxtLink>
    </div>

    <div class="hidden lg:flex items-center gap-12 font-sans text-xs tracking-[0.2em] uppercase text-gray-400 font-bold">
      <NuxtLink to="/" class="hover:text-brand-green transition-colors pb-1" active-class="border-b-2 border-brand-green text-brand-green">Home</NuxtLink>
      <NuxtLink to="/about" class="hover:text-brand-green transition-colors pb-1" active-class="border-b-2 border-brand-green text-brand-green">About</NuxtLink>
      <NuxtLink to="/projects" class="hover:text-brand-green transition-colors pb-1" active-class="border-b-2 border-brand-green text-brand-green">Projects</NuxtLink>
      <NuxtLink to="/contact" class="hover:text-brand-green transition-colors pb-1" active-class="border-b-2 border-brand-green text-brand-green">Contact</NuxtLink>
    </div>

    <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm ring-1 ring-black/5">
      <img src="https://ui-avatars.com/api/?name=Yelli+Myriem&background=4A6759&color=fff" alt="Avatar" class="w-full h-full object-cover">
    </div>
  </nav>
</template>

<script setup>
</script>
