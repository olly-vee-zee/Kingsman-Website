<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Kingsman Blog
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our software development experts.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div class="md:flex">
            <div class="md:w-1/2">
              <div class="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>
            <div class="md:w-1/2 p-8">
              <div class="text-sm text-blue-600 font-semibold mb-2">FEATURED POST</div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                The Future of Software Development: AI and Beyond
              </h2>
              <p class="text-gray-600 mb-4">
                Exploring how artificial intelligence is reshaping the software development landscape and what it means for businesses and developers alike.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>By John Smith</span>
                <span class="mx-2">•</span>
                <span>March 15, 2024</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">DEVELOPMENT</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Best Practices for React Development in 2024
              </h3>
              <p class="text-gray-600 mb-4">
                Learn the latest React patterns and techniques that will make your applications more maintainable and performant.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>Sarah Johnson</span>
                <span class="mx-2">•</span>
                <span>March 10, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">DESIGN</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                UI/UX Trends That Will Dominate 2024
              </h3>
              <p class="text-gray-600 mb-4">
                Discover the design trends that are shaping user experiences and how to implement them in your projects.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>Mike Chen</span>
                <span class="mx-2">•</span>
                <span>March 8, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">BUSINESS</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                How to Choose the Right Tech Stack for Your Startup
              </h3>
              <p class="text-gray-600 mb-4">
                A comprehensive guide to selecting technologies that will scale with your business and support long-term growth.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>Emily Davis</span>
                <span class="mx-2">•</span>
                <span>March 5, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 4 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-red-400 to-pink-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">SECURITY</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Cybersecurity Best Practices for Modern Applications
              </h3>
              <p class="text-gray-600 mb-4">
                Essential security measures every developer should implement to protect applications and user data.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>Alex Wilson</span>
                <span class="mx-2">•</span>
                <span>March 3, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 5 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">CLOUD</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Migrating to Cloud: A Step-by-Step Guide
              </h3>
              <p class="text-gray-600 mb-4">
                Everything you need to know about moving your applications to the cloud safely and efficiently.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>David Brown</span>
                <span class="mx-2">•</span>
                <span>February 28, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 6 -->
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-teal-400 to-blue-500"></div>
            <div class="p-6">
              <div class="text-sm text-blue-600 font-semibold mb-2">MOBILE</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Cross-Platform Mobile Development: React Native vs Flutter
              </h3>
              <p class="text-gray-600 mb-4">
                An in-depth comparison of the two leading cross-platform mobile development frameworks.
              </p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>Lisa Garcia</span>
                <span class="mx-2">•</span>
                <span>February 25, 2024</span>
              </div>
              <button class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read More →
              </button>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
        <p class="text-xl mb-8">Subscribe to our newsletter for the latest insights and updates.</p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          >
          <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogView'
}
</script>