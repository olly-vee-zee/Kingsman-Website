<template>
  <div class="min-h-screen bg-gray-75">
    <!-- Hero Section -->
    <section class="w-full py-20 text-white bg-gradient-to-r from-blue-900 to-[#0a1f44]">
      <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 text-4xl font-bold md:text-6xl">
            Welcome to Kingsman Software Services
          </h1>
          <p class="max-w-3xl mx-auto mb-8 text-xl md:text-2xl">
            We deliver cutting-edge software solutions that transform your business and drive success in the digital age.
          </p>
          <div class="space-x-4">
            <router-link to="/services" class="px-8 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
              Our Services
            </router-link>
            <router-link to="/contact" class="px-8 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900">Why Choose Kingsman?</h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-600">
            We combine technical expertise with business acumen to deliver solutions that matter.
          </p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-3">
          <div class="p-6 text-center bg-white rounded-lg shadow-md">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
              <svg class="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Fast & Reliable</h3>
            <p class="text-gray-600">Lightning-fast development with robust, scalable solutions.</p>
          </div>
          
          <div class="p-6 text-center bg-white rounded-lg shadow-md">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
              <svg class="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Quality Assured</h3>
            <p class="text-gray-600">Rigorous testing and quality control for every project.</p>
          </div>
          
          <div class="p-6 text-center bg-white rounded-lg shadow-md">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
              <svg class="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Expert Team</h3>
            <p class="text-gray-600">Experienced professionals dedicated to your success.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 text-white bg-[#0a1f44]">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p class="mb-8 text-xl">Let's discuss how we can help you achieve your goals.</p>
        <router-link to="/contact" class="px-8 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
          Contact Us Today
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>