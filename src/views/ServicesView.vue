<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Comprehensive software solutions tailored to meet your unique business needs and drive growth.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Web Development -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Web Development</h3>
            <p class="text-gray-600 mb-4">Custom web applications built with modern technologies like React, Vue.js, and Node.js.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Responsive Design</li>
              <li>• E-commerce Solutions</li>
              <li>• Progressive Web Apps</li>
              <li>• API Integration</li>
            </ul>
          </div>

          <!-- Mobile Development -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Mobile Development</h3>
            <p class="text-gray-600 mb-4">Native and cross-platform mobile apps for iOS and Android devices.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• iOS & Android Apps</li>
              <li>• React Native</li>
              <li>• Flutter Development</li>
              <li>• App Store Optimization</li>
            </ul>
          </div>

          <!-- Cloud Solutions -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Cloud Solutions</h3>
            <p class="text-gray-600 mb-4">Scalable cloud infrastructure and migration services for modern businesses.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• AWS & Azure</li>
              <li>• Cloud Migration</li>
              <li>• DevOps & CI/CD</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>

          <!-- AI & Machine Learning -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">AI & Machine Learning</h3>
            <p class="text-gray-600 mb-4">Intelligent solutions powered by artificial intelligence and machine learning.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Chatbots & AI Assistants</li>
            </ul>
          </div>

          <!-- Database Solutions -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Database Solutions</h3>
            <p class="text-gray-600 mb-4">Robust database design, optimization, and management services.</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Database Design</li>
              <li>• Performance Optimization</li>
              <li>• Data Migration</li>
              <li>• Backup & Recovery</li>
            </ul>
          </div>

          <!-- Consulting -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Technology Consulting</h3>
            <p class="text-gray-600 mb-4">Strategic technology advice to help you make informed decisions.</p>
            <ul class="text-sm text-gray-500 space-y-1">
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
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p class="text-lg text-gray-600">A proven methodology that ensures project success</p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="font-semibold mb-2">Discovery</h3>
            <p class="text-gray-600 text-sm">Understanding your requirements and goals</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="font-semibold mb-2">Planning</h3>
            <p class="text-gray-600 text-sm">Creating detailed project roadmap and timeline</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="font-semibold mb-2">Development</h3>
            <p class="text-gray-600 text-sm">Building your solution with regular updates</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="font-semibold mb-2">Delivery</h3>
            <p class="text-gray-600 text-sm">Testing, deployment, and ongoing support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-xl mb-8">Let's discuss your project requirements and find the perfect solution.</p>
        <router-link to="/contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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