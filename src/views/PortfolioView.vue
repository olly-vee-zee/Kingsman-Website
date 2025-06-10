<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Filter Projects</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="setActiveFilter(category.id)"
              :class="[
                'px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            @click="openProjectModal(project)"
          >
            <!-- Project Image -->
            <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path v-if="project.category === 'web'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      <path v-else-if="project.category === 'mobile'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      <path v-else-if="project.category === 'cloud'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <p class="text-sm opacity-75">{{ project.type }}</p>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {{ getCategoryName(project.category) }}
                </span>
                <span class="text-sm text-gray-500">{{ project.year }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  {{ project.duration }}
                </div>
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreProjects">
          <button
            @click="loadMoreProjects"
            class="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional results for our clients.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">150+</h3>
            <p class="text-gray-600">Projects Completed</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">80+</h3>
            <p class="text-gray-600">Happy Clients</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">5+</h3>
            <p class="text-gray-600">Years Experience</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">98%</h3>
            <p class="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closeProjectModal"
    >
      <div
        class="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto"
        @click.stop
      >
        <div class="p-8">
          <div class="flex items-start justify-between mb-6">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ selectedProject.title }}</h2>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                {{ getCategoryName(selectedProject.category) }}
              </span>
            </div>
            <button
              @click="closeProjectModal"
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <!-- Project Image -->
          <div class="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
            <div class="text-white text-center">
              <div class="w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="selectedProject.category === 'web'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  <path v-else-if="selectedProject.category === 'mobile'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  <path v-else-if="selectedProject.category === 'cloud'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <p class="text-lg">{{ selectedProject.type }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
              <p class="text-gray-600 mb-6">{{ selectedProject.fullDescription || selectedProject.description }}</p>
              
              <h4 class="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
              
              <div class="space-y-4 mb-6">
                <div>
                  <h4 class="font-semibold text-gray-900">Client:</h4>
                  <p class="text-gray-600">{{ selectedProject.client }}</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900">Duration:</h4>
                  <p class="text-gray-600">{{ selectedProject.duration }}</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900">Year:</h4>
                  <p class="text-gray-600">{{ selectedProject.year }}</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-900">Technologies:</h4>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span
                      v-for="tech in selectedProject.technologies"
                      :key="tech"
                      class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex space-x-4">
                <button
                  v-if="selectedProject.liveUrl"
                  class="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Live Site
                </button>
                <button
                  v-if="selectedProject.caseStudyUrl"
                  class="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Read Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      activeFilter: 'all',
      selectedProject: null,
      visibleProjects: 9,
      categories: [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'cloud', name: 'Cloud Solutions' },
        { id: 'ecommerce', name: 'E-Commerce' }
      ],
      projects: [
        {
          id: 1,
          title: 'TechCorp E-Commerce Platform',
          description: 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
          fullDescription: 'Built a scalable e-commerce platform for TechCorp that handles thousands of daily transactions. The platform features real-time inventory management, multiple payment gateways, advanced analytics, and a responsive design that works seamlessly across all devices.',
          category: 'ecommerce',
          type: 'E-Commerce Platform',
          year: '2024',
          duration: '12 weeks',
          client: 'TechCorp Industries',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
          features: [
            'Real-time inventory management',
            'Multi-payment gateway integration',
            'Advanced analytics dashboard',
            'Mobile-responsive design',
            'Admin panel with role-based access'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 2,
          title: 'FinanceApp Mobile Solution',
          description: 'A secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
          fullDescription: 'Developed a comprehensive mobile banking solution that prioritizes security and user experience. The app includes biometric authentication, real-time transaction monitoring, investment portfolio tracking, and seamless integration with existing banking systems.',
          category: 'mobile',
          type: 'Mobile Banking App',
          year: '2024',
          duration: '16 weeks',
          client: 'FinanceApp Ltd',
          technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'JWT'],
          features: [
            'Biometric authentication',
            'Real-time transaction alerts',
            'Investment portfolio tracking',
            'Bill payment integration',
            'Secure document upload'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 3,
          title: 'CloudSync Enterprise Portal',
          description: 'Enterprise cloud management portal with automated workflows, team collaboration tools, and comprehensive reporting.',
          fullDescription: 'Created an enterprise-grade cloud management portal that streamlines business operations through automated workflows, team collaboration features, and detailed reporting capabilities. The solution integrates with multiple cloud providers and offers centralized management.',
          category: 'cloud',
          type: 'Enterprise Portal',
          year: '2023',
          duration: '20 weeks',
          client: 'CloudSync Corporation',
          technologies: ['Angular', 'Python', 'Docker', 'Kubernetes', 'Azure'],
          features: [
            'Multi-cloud integration',
            'Automated workflow engine',
            'Team collaboration tools',
            'Advanced reporting dashboard',
            'Role-based access control'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 4,
          title: 'RestaurantPro Website',
          description: 'Modern restaurant website with online ordering, table reservations, and customer loyalty program integration.',
          fullDescription: 'Designed and developed a modern restaurant website that enhances customer experience through online ordering, table reservation system, and integrated loyalty program. The site features beautiful food photography and seamless mobile experience.',
          category: 'web',
          type: 'Restaurant Website',
          year: '2024',
          duration: '8 weeks',
          client: 'RestaurantPro Chain',
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'PWA'],
          features: [
            'Online ordering system',
            'Table reservation booking',
            'Customer loyalty program',
            'Menu management system',
            'Social media integration'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 5,
          title: 'HealthTracker Mobile App',
          description: 'Comprehensive health tracking mobile application with wearable device integration and AI-powered insights.',
          fullDescription: 'Built a comprehensive health tracking application that connects with various wearable devices to monitor fitness metrics, sleep patterns, and nutrition. The app uses AI to provide personalized health insights and recommendations.',
          category: 'mobile',
          type: 'Health & Fitness App',
          year: '2023',
          duration: '14 weeks',
          client: 'HealthTracker Inc',
          technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'HealthKit'],
          features: [
            'Wearable device integration',
            'AI-powered health insights',
            'Nutrition tracking',
            'Workout planning',
            'Sleep pattern analysis'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 6,
          title: 'EduPlatform Learning Management',
          description: 'Comprehensive learning management system with video streaming, interactive quizzes, and progress tracking.',
          fullDescription: 'Developed a full-featured learning management system for educational institutions. The platform includes video streaming capabilities, interactive assessments, student progress tracking, and collaborative learning tools.',
          category: 'web',
          type: 'Learning Management System',
          year: '2023',
          duration: '18 weeks',
          client: 'EduPlatform Solutions',
          technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'AWS S3'],
          features: [
            'HD video streaming',
            'Interactive quiz builder',
            'Student progress analytics',
            'Discussion forums',
            'Assignment submission system'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 7,
          title: 'RetailChain Inventory System',
          description: 'Cloud-based inventory management system for retail chains with real-time synchronization and predictive analytics.',
          fullDescription: 'Created a sophisticated inventory management system for retail chains that provides real-time stock synchronization across multiple locations, predictive analytics for demand forecasting, and automated reordering capabilities.',
          category: 'cloud',
          type: 'Inventory Management System',
          year: '2024',
          duration: '22 weeks',
          client: 'RetailChain Group',
          technologies: ['Microservices', 'Spring Boot', 'Redis', 'Apache Kafka', 'GCP'],
          features: [
            'Real-time stock synchronization',
            'Predictive demand analytics',
            'Automated reordering',
            'Multi-location management',
            'Supplier integration'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 8,
          title: 'FashionBrand E-Store',
          description: 'Luxury fashion e-commerce platform with AR try-on features, personalized recommendations, and social integration.',
          fullDescription: 'Built a premium e-commerce platform for a luxury fashion brand featuring augmented reality try-on capabilities, AI-powered personalized recommendations, and seamless social media integration for enhanced customer engagement.',
          category: 'ecommerce',
          type: 'Fashion E-Commerce',
          year: '2024',
          duration: '16 weeks',
          client: 'FashionBrand Luxury',
          technologies: ['Next.js', 'Shopify Plus', 'AR.js', 'Machine Learning', 'CDN'],
          features: [
            'AR virtual try-on',
            'Personalized recommendations',
            'Social media integration',
            'Size recommendation engine',
            'Wishlist and favorites'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 9,
          title: 'PropertyManager Pro',
          description: 'Real estate management platform with tenant portals, maintenance tracking, and financial reporting.',
          fullDescription: 'Developed a comprehensive property management solution that streamlines operations for real estate managers. Features include tenant portals, maintenance request tracking, rent collection, and detailed financial reporting.',
          category: 'web',
          type: 'Property Management Platform',
          year: '2023',
          duration: '14 weeks',
          client: 'PropertyManager Solutions',
          technologies: ['Django', 'PostgreSQL', 'Celery', 'Stripe', 'Chart.js'],
          features: [
            'Tenant portal access',
            'Maintenance request system',
            'Automated rent collection',
            'Financial reporting',
            'Document management'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 10,
          title: 'LogisticsPro Fleet Tracker',
          description: 'Fleet management mobile app with GPS tracking, route optimization, and driver performance analytics.',
          fullDescription: 'Created a comprehensive fleet management solution that provides real-time GPS tracking, intelligent route optimization, driver performance monitoring, and fuel efficiency analytics for logistics companies.',
          category: 'mobile',
          type: 'Fleet Management App',
          year: '2024',
          duration: '12 weeks',
          client: 'LogisticsPro Corp',
          technologies: ['React Native', 'Google Maps API', 'Firebase', 'Python', 'IoT'],
          features: [
            'Real-time GPS tracking',
            'Route optimization',
            'Driver performance metrics',
            'Fuel efficiency monitoring',
            'Maintenance scheduling'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 11,
          title: 'DataViz Analytics Dashboard',
          description: 'Advanced data visualization platform with real-time analytics, custom reporting, and machine learning insights.',
          fullDescription: 'Built an enterprise-grade analytics platform that transforms complex data into actionable insights through interactive visualizations, real-time monitoring, and machine learning-powered predictions.',
          category: 'cloud',
          type: 'Analytics Platform',
          year: '2023',
          duration: '20 weeks',
          client: 'DataViz Analytics',
          technologies: ['D3.js', 'Python', 'Apache Spark', 'Elasticsearch', 'Docker'],
          features: [
            'Interactive data visualizations',
            'Real-time monitoring',
            'Custom report builder',
            'ML-powered insights',
            'API integration hub'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        },
        {
          id: 12,
          title: 'SocialHub Community Platform',
          description: 'Social networking platform with community features, content sharing, and event management capabilities.',
          fullDescription: 'Developed a community-focused social platform that enables users to create and join interest-based communities, share content, organize events, and build meaningful connections through advanced matching algorithms.',
          category: 'web',
          type: 'Social Community Platform',
          year: '2024',
          duration: '18 weeks',
          client: 'SocialHub Networks',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
          features: [
            'Community creation and management',
            'Real-time messaging',
            'Event planning and RSVP',
            'Content sharing and curation',
            'Advanced user matching'
          ],
          liveUrl: '#',
          caseStudyUrl: '#'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      const filtered = this.activeFilter === 'all' 
        ? this.projects 
        : this.projects.filter(project => project.category === this.activeFilter);
      
      return filtered.slice(0, this.visibleProjects);
    },
    hasMoreProjects() {
      const totalFiltered = this.activeFilter === 'all' 
        ? this.projects.length 
        : this.projects.filter(project => project.category === this.activeFilter).length;
      
      return this.visibleProjects < totalFiltered;
    }
  },
  methods: {
    setActiveFilter(categoryId) {
      this.activeFilter = categoryId;
      this.visibleProjects = 9; // Reset visible projects when filter changes
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(cat => cat.id === categoryId);
      return category ? category.name : categoryId;
    },
    openProjectModal(project) {
      this.selectedProject = project;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    },
    closeProjectModal() {
      this.selectedProject = null;
      document.body.style.overflow = 'auto'; // Restore scrolling
    },
    loadMoreProjects() {
      this.visibleProjects += 6;
    }
  },
  beforeUnmount() {
    // Ensure scrolling is restored if component is destroyed while modal is open
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
/* REPLACE the existing .line-clamp-3 styles with this: */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: 4.5em; /* 3 lines × 1.5 line-height */
  
  /* Standard property (limited support) */
  display: -webkit-box;
  line-clamp: 3;
  box-orient: vertical;
}

/* Fallback for browsers that don't support -webkit-line-clamp */
@supports not (-webkit-line-clamp: 3) {
  .line-clamp-3 {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-height: 4.5em;
    line-height: 1.5;
  }
}
</style>