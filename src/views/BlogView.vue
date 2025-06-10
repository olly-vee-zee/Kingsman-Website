<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-[#0a1f44] text-white py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 text-4xl font-bold md:text-6xl">
            Kingsman Blog
          </h1>
          <p class="max-w-3xl mx-auto mb-8 text-xl md:text-2xl">
            Insights, tutorials, and industry trends from our software development experts.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post Section -->
    <section class="py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-12 overflow-hidden bg-white rounded-lg shadow-lg">
          <div class="md:flex">
            <div class="md:w-1/2">
              <div class="h-64 md:h-full bg-gradient-to-r from-blue-600 to-purple-900"></div>
            </div>
            <div class="p-8 md:w-1/2">
              <div class="mb-2 text-sm font-semibold text-blue-900">FEATURED POST</div>
              <h2 class="mb-4 text-2xl font-bold text-gray-900">
                The Future of Software Development: AI and Beyond
              </h2>
              <p class="mb-4 text-gray-600">
                Exploring how artificial intelligence is reshaping the software development landscape and what it means for businesses and developers alike.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>By John Smith</span>
                <span class="mx-2">•</span>
                <span>March 15, 2024</span>
                <span class="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="pb-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Blog Post 1 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-green-600 to-blue-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-900">DEVELOPMENT</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                Best Practices for React Development in 2024
              </h3>
              <p class="mb-4 text-gray-600">
                Learn the latest React patterns and techniques that will make your applications more maintainable and performant.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>Sarah Johnson</span>
                <span class="mx-2">•</span>
                <span>March 10, 2024</span>
              </div>
              <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-purple-600 to-pink-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-600">DESIGN</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                UI/UX Trends That Will Dominate 2024
              </h3>
              <p class="mb-4 text-gray-600">
                Discover the design trends that are shaping user experiences and how to implement them in your projects.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>Mike Chen</span>
                <span class="mx-2">•</span>
                <span>March 8, 2024</span>
              </div>
              <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-yellow-600 to-orange-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-900">BUSINESS</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                How to Choose the Right Tech Stack for Your Startup
              </h3>
              <p class="mb-4 text-gray-600">
                A comprehensive guide to selecting technologies that will scale with your business and support long-term growth.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>Emily Davis</span>
                <span class="mx-2">•</span>
                <span>March 5, 2024</span>
              </div>
                <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 4 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-red-600 to-pink-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-900">SECURITY</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                Cybersecurity Best Practices for Modern Applications
              </h3>
              <p class="mb-4 text-gray-600">
                Essential security measures every developer should implement to protect applications and user data.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>Alex Wilson</span>
                <span class="mx-2">•</span>
                <span>March 3, 2024</span>
              </div>
              <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 5 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-indigo-600 to-purple-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-900">CLOUD</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                Migrating to Cloud: A Step-by-Step Guide
              </h3>
              <p class="mb-4 text-gray-600">
                Everything you need to know about moving your applications to the cloud safely and efficiently.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>David Brown</span>
                <span class="mx-2">•</span>
                <span>February 28, 2024</span>
              </div>
               <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>

          <!-- Blog Post 6 -->
          <article class="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div class="h-48 bg-gradient-to-r from-teal-600 to-blue-900"></div>
            <div class="p-6">
              <div class="mb-2 text-sm font-semibold text-blue-900">MOBILE</div>
              <h3 class="mb-3 text-xl font-bold text-gray-900">
                Cross-Platform Mobile Development: React Native vs Flutter
              </h3>
              <p class="mb-4 text-gray-600">
                An in-depth comparison of the two leading cross-platform mobile development frameworks.
              </p>
              <div class="flex items-center mb-4 text-sm text-gray-500">
                <span>Lisa Garcia</span>
                <span class="mx-2">•</span>
                <span>February 25, 2024</span>
              </div>
               <button class="font-semibold text-blue-700 transition-colors hover:text-blue-900">
                Read More →
              </button>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="mt-12 text-center">
          <button class="px-8 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
            Load More Posts
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 text-white bg-[#0a1f44]">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 class="mb-4 text-3xl font-bold">Stay Updated</h2>
        <p class="mb-8 text-xl">Subscribe to our newsletter for the latest insights and updates.</p>
        <div class="flex max-w-md gap-4 mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
          <button class="px-6 py-3 font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white">
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