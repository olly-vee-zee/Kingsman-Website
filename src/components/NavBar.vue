<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-[#0a1f44] shadow-lg">
    <div class="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
           
        <span class="hidden sm:block">
        <img src="../assets/secondary_logo_light.svg"  alt="" class="h-16" w-auto > <!-- Adjust height (h-6, h-8, h-10, etc.) -->
        </span>
           
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="items-center hidden space-x-1 lg:flex">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="relative px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-md hover:text-blue-700 hover:bg-blue-800"
            :class="{ 'bg-blue-800 text-blue-100': $route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Tablet Navigation (Medium screens) -->
        <div class="items-center hidden space-x-1 md:flex lg:hidden">
          <router-link
            v-for="item in navigation.slice(0, 4)"
            :key="item.name"
            :to="item.href"
            class="relative px-4 py-2 text-sm font-medium text-white transition-all duration-200 rounded-md hover:text-blue-600 hover:bg-blue-900"
            :class="{ 'bg-blue-800 text-blue-100': $route.path === item.href }"
          >
            {{ item.name }}
          </router-link>
          
          <!-- More Menu for remaining items -->
          <div class="relative" ref="moreMenu">
            <button
              @click="moreMenuOpen = !moreMenuOpen"
              class="flex items-center px-3 py-2 space-x-1 text-sm font-medium text-white transition-all duration-200 rounded-md hover:text-blue-600 hover:bg-blue-900"
            >
              <span>More</span>
              <svg class="w-4 h-4 transition-transform duration-200 transform" :class="{ 'rotate-180': moreMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- More Dropdown -->
            <div 
              v-show="moreMenuOpen"
              class="absolute right-0 z-50 w-48 py-1 mt-2 bg-white rounded-md shadow-lg"
              @click.stop
            >
              <router-link
                v-for="item in navigation.slice(4)"
                :key="item.name"
                :to="item.href"
                @click="moreMenuOpen = false"
                class="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                :class="{ 'bg-blue-100 text-blue-900': $route.path === item.href }"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 text-white transition-all duration-200 rounded-md hover:text-blue-600 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <!-- Hamburger Icon -->
            <svg 
              class="w-6 h-6 transition-transform duration-300 transform" 
              :class="{ 'rotate-90 opacity-0': mobileMenuOpen, 'rotate-0 opacity-100': !mobileMenuOpen }" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon -->
            <svg 
              class="absolute w-6 h-6 transition-transform duration-300 transform" 
              :class="{ 'rotate-0 opacity-100': mobileMenuOpen, '-rotate-90 opacity-0': !mobileMenuOpen }" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-show="mobileMenuOpen" class="bg-blue-800 border-t border-blue-600 md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="block px-3 py-3 text-base font-medium text-white transition-all duration-200 rounded-md hover:text-blue-200 hover:bg-blue-700"
            :class="{ 'bg-blue-900 text-blue-100': $route.path === item.href }"
          >
            <span class="flex items-center space-x-3">
              <span class="w-2 h-2 bg-current rounded-full opacity-60"></span>
              <span>{{ item.name }}</span>
            </span>
          </router-link>
        </div>
      </div>
    </transition>

    <!-- Overlay for mobile menu -->
    <transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-show="mobileMenuOpen" 
        @click="closeMobileMenu"
        class="fixed inset-0 z-40 bg-black bg-opacity-25 md:hidden"
      ></div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'FlexibleNavbar',
  data() {
    return {
      mobileMenuOpen: false,
      moreMenuOpen: false,
      navigation: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' }
      ]
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
      this.moreMenuOpen = false
    }
  },
  mounted() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    handleClickOutside(event) {
      // Close more menu if clicking outside
      if (this.$refs.moreMenu && !this.$refs.moreMenu.contains(event.target)) {
        this.moreMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
/* Additional custom styles for enhanced flexibility */
@media (max-width: 768px) {
  .nav-item {
    font-size: 1.1rem;
    padding: 0.75rem 1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .nav-item {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (min-width: 1025px) {
  .nav-item {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>