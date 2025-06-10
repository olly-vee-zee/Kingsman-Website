<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <section class="bg-[#0a1f44] text-white py-16">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h1 class="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
        <p class="max-w-3xl mx-auto text-xl">
          Comprehensive software solutions tailored to meet your unique business needs and drive growth.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Web Development -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Web Development</h3>
            <p class="mb-4 text-gray-600">Custom web applications built with modern technologies like React, Vue.js, and Node.js.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• Responsive Design</li>
              <li>• E-commerce Solutions</li>
              <li>• Progressive Web Apps</li>
              <li>• API Integration</li>
            </ul>
          </div>

          <!-- Mobile Development -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Mobile Development</h3>
            <p class="mb-4 text-gray-600">Native and cross-platform mobile apps for iOS and Android devices.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• iOS & Android Apps</li>
              <li>• React Native</li>
              <li>• Flutter Development</li>
              <li>• App Store Optimization</li>
            </ul>
          </div>

          <!-- Cloud Solutions -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Cloud Solutions</h3>
            <p class="mb-4 text-gray-600">Scalable cloud infrastructure and migration services for modern businesses.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• AWS & Azure</li>
              <li>• Cloud Migration</li>
              <li>• DevOps & CI/CD</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>

          <!-- AI & Machine Learning -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">AI & Machine Learning</h3>
            <p class="mb-4 text-gray-600">Intelligent solutions powered by artificial intelligence and machine learning.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Chatbots & AI Assistants</li>
            </ul>
          </div>

          <!-- Database Solutions -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Database Solutions</h3>
            <p class="mb-4 text-gray-600">Robust database design, optimization, and management services.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• Database Design</li>
              <li>• Performance Optimization</li>
              <li>• Data Migration</li>
              <li>• Backup & Recovery</li>
            </ul>
          </div>

          <!-- Consulting -->
          <div class="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div class="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold">Technology Consulting</h3>
            <p class="mb-4 text-gray-600">Strategic technology advice to help you make informed decisions.</p>
            <ul class="space-y-1 text-sm text-gray-500">
              <li>• Technology Strategy</li>
              <li>• Architecture Review</li>
              <li>• Digital Transformation</li>
              <li>• Technical Audits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900">Our Process</h2>
          <p class="text-lg text-gray-600">A proven methodology that ensures project success</p>
        </div>
        
        <div class="grid gap-8 md:grid-cols-4">
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-blue-600 rounded-full">1</div>
            <h3 class="mb-2 font-semibold">Discovery</h3>
            <p class="text-sm text-gray-600">Understanding your requirements and goals</p>
          </div>
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-blue-900 rounded-full">2</div>
            <h3 class="mb-2 font-semibold">Planning</h3>
            <p class="text-sm text-gray-600">Creating detailed project roadmap and timeline</p>
          </div>
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-blue-900 rounded-full">3</div>
            <h3 class="mb-2 font-semibold">Development</h3>
            <p class="text-sm text-gray-600">Building your solution with regular updates</p>
          </div>
          <div class="text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-blue-900 rounded-full">4</div>
            <h3 class="mb-2 font-semibold">Delivery</h3>
            <p class="text-sm text-gray-600">Testing, deployment, and ongoing support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 text-white bg-[#0a1f44]">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p class="mb-8 text-xl">Let's discuss your project requirements and find the perfect solution.</p>
        <router-link to="/contact" class="px-8 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
          Request a Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>