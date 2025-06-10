<template>

  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="flex justify-center px-4 sm:px-6 lg:px-8">
          <div class="w-full max-w-3xl"> 
    <!-- Or any width like max-w-4xl to limit -->
    <!-- your content here -->
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            About Kingsman
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and innovators dedicated to creating exceptional software solutions that drive business success.
          </p>
        </div>
      </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16">
      <div class="flex justify-center px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center space-y-8">
          <div class="w-full max-w-3xl text-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded in 2015, Kingsman Software Services began with a simple mission: to bridge the gap between cutting-edge technology and practical business solutions. What started as a small team of three developers has grown into a full-service software development company serving clients worldwide.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              We believe that great software isn't just about clean code—it's about understanding our clients' needs, challenges, and goals. Every project we undertake is approached with fresh eyes and innovative thinking, ensuring that we deliver solutions that not only meet today's requirements but are also built to scale for tomorrow's opportunities.
            </p>
            <p class="text-lg text-gray-600">
              Today, we're proud to have delivered over 200 successful projects, ranging from startup MVPs to enterprise-level applications, always maintaining our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-96 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="text-6xl font-bold mb-2">200+</div>
              <div class="text-xl">Projects Delivered</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving innovation through technology while building lasting partnerships with our clients.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-blue-50 rounded-lg p-8">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To empower businesses of all sizes with innovative software solutions that streamline operations, enhance user experiences, and drive measurable growth. We're committed to delivering excellence in every line of code and every client interaction.
            </p>
          </div>
          
          <div class="bg-purple-50 rounded-lg p-8">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              To be the leading software development partner that businesses trust to turn their digital aspirations into reality. We envision a future where technology seamlessly integrates with human needs, creating solutions that are both powerful and intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in software development, design, and project management.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member 1 -->
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">JS</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
            <p class="text-blue-600 font-medium mb-2">CEO & Founder</p>
            <p class="text-sm text-gray-600">
              Full-stack developer with 12+ years of experience in building scalable web applications.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">SJ</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
            <p class="text-blue-600 font-medium mb-2">CTO</p>
            <p class="text-sm text-gray-600">
              Technology strategist specializing in cloud architecture and DevOps implementation.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">MC</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3>
            <p class="text-blue-600 font-medium mb-2">Lead Designer</p>
            <p class="text-sm text-gray-600">
              UX/UI expert passionate about creating intuitive and beautiful user experiences.
            </p>
          </div>

          <!-- Team Member 4 -->
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">ED</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Emily Davis</h3>
            <p class="text-blue-600 font-medium mb-2">Project Manager</p>
            <p class="text-sm text-gray-600">
              Agile project management specialist ensuring smooth delivery and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our company culture.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
            <p class="text-gray-600">
              We never compromise on quality. Every line of code is written with precision and tested thoroughly.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
            <p class="text-gray-600">
              We work closely with our clients as true partners, ensuring transparency and open communication.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600">
              We stay ahead of technology trends and continuously explore new ways to solve complex problems.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
            <p class="text-gray-600">
              We deliver on time, every time. Our clients can count on us to meet deadlines and exceed expectations.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
            <p class="text-gray-600">
              We love what we do, and it shows in every project we deliver and every relationship we build.
            </p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Growth</h3>
            <p class="text-gray-600">
              We're committed to continuous learning and helping our clients grow through technology.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Our Impact</h2>
          <p class="text-xl max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">200+</div>
            <div class="text-lg">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">150+</div>
            <div class="text-lg">Happy Clients</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">9</div>
            <div class="text-lg">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2">24/7</div>
            <div class="text-lg">Support Available</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our team can help bring your next project to life.
        </p>
        <div class="space-x-4">
          <router-link to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get In Touch
          </router-link>
          <router-link to="/services" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            View Our Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>