<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-[#0a1f44] text-white py-20">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 text-4xl font-bold md:text-6xl">
            Get In Touch
          </h1>
          <p class="max-w-3xl mx-auto mb-8 text-xl md:text-2xl">
            Ready to start your next project? We'd love to hear from you and discuss how we can help bring your ideas to life.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-16">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Contact Form -->
          <div class="p-8 bg-white rounded-lg shadow-lg">
            <h2 class="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>
            <form @submit.prevent="submitForm">
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="firstName" class="block mb-2 text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName"
                    v-model="form.firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  >
                </div>
                <div>
                  <label for="lastName" class="block mb-2 text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  >
                </div>
              </div>
              
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                >
              </div>

              <div class="mb-6">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                >
              </div>

              <div class="mb-6">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-700">
                  Company
                </label>
                <input 
                  type="text" 
                  id="company"
                  v-model="form.company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Your Company Name"
                >
              </div>

              <div class="mb-6">
                <label for="service" class="block mb-2 text-sm font-medium text-gray-700">
                  Service Interested In
                </label>
                <select 
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="consulting">Consulting</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="budget" class="block mb-2 text-sm font-medium text-gray-700">
                  Project Budget
                </label>
                <select 
                  id="budget"
                  v-model="form.budget"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>

              <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-700">
                  Project Description *
                </label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full px-6 py-3  font-semibold bg-[#a38112] transition-colors text-[#001a57]  rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="p-8 bg-white rounded-lg shadow-lg">
              <h3 class="mb-6 text-xl font-bold text-gray-900">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.54a2 2 0 011.94 1.54l1.15 5.75a2 2 0 01-.9 2.15L8.5 14.5a15.002 15.002 0 007 7l2.06-2.24a2 2 0 012.15-.9l5.75 1.15a2 2 0 011.54 1.94V21a2 2 0 01-2 2h-1C11.37 23 2 13.63 2 2V1a2 2 0 012-2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Phone</h4>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                    <p class="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Email</h4>
                    <p class="text-gray-600">hello@kingsmansoft.com</p>
                    <p class="text-gray-600">support@kingsmansoft.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Office</h4>
                    <p class="text-gray-600">123 Tech Street<br>Innovation District<br>San Francisco, CA 94105</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-blue-100 rounded-lg">
                    <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Business Hours</h4>
                    <p class="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p class="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p class="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ Section -->
            <div class="p-8 bg-white rounded-lg shadow-lg">
              <h3 class="mb-6 text-xl font-bold text-gray-900">Quick Questions?</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="mb-2 font-semibold text-gray-900">How quickly do you respond?</h4>
                  <p class="text-sm text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 class="mb-2 font-semibold text-gray-900">Do you offer free consultations?</h4>
                  <p class="text-sm text-gray-600">Yes! We offer a free 30-minute consultation to discuss your project needs.</p>
                </div>
                <div>
                  <h4 class="mb-2 font-semibold text-gray-900">What's your typical project timeline?</h4>
                  <p class="text-sm text-gray-600">Project timelines vary, but most projects range from 4-16 weeks depending on complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="h-64 bg-gray-200">
      <div class="flex items-center justify-center h-full">
        <div class="text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-full">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <p class="text-gray-600">Interactive Map Coming Soon</p>
          <p class="text-sm text-gray-500">San Francisco, CA</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Form submitted:', this.form);
      // You can add form validation and API call here
      alert('Thank you for your message! We\'ll get back to you soon.');
      this.resetForm();
    },
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      };
    }
  }
}
</script>