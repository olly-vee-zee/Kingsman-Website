<template>
  <div class="animated-background">
    <!-- Floating Code Snippets -->
    <div class="code-snippet" v-for="(snippet, index) in codeSnippets" :key="index" 
         :class="`code-${index + 1}`">
      {{ snippet }}
    </div>

    <!-- Geometric Shapes -->
    <div class="geometric-shape shape-1"></div>
    <div class="geometric-shape shape-2"></div>
    <div class="geometric-shape shape-3"></div>
    <div class="geometric-shape shape-4"></div>
    <div class="geometric-shape shape-5"></div>

    <!-- Binary Rain -->
    <div class="binary-rain" v-for="n in 12" :key="`binary-${n}`" 
         :class="`binary-${n}`">
      <div v-for="line in binaryLines" :key="line">{{ line }}</div>
    </div>

    <!-- Glowing Particles -->
    <div class="particle" v-for="n in 15" :key="`particle-${n}`"
         :style="getParticleStyle(n)"></div>

    <!-- Circuit Lines -->
    <div class="circuit-line circuit-1"></div>
    <div class="circuit-line circuit-2"></div>
    <div class="circuit-line circuit-3"></div>
    <div class="circuit-line circuit-4"></div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground',
  data() {
    return {
      codeSnippets: [
        "const vue = () => 'reactive';",
        "import { ref, computed } from 'vue';",
        "npm run dev",
        "git push origin main",
        "console.log('Vue.js rocks!');",
        "async/await excellence",
        "const { reactive } = Vue;",
        "while(coding) { innovate(); }",
        "export default { setup() }",
        "v-for=\"item in items\""
      ],
      binaryLines: [
        '10110101',
        '01001010', 
        '11010110',
        '00101101',
        '10011001'
      ]
    }
  },
  methods: {
    getParticleStyle(index) {
      const positions = [
        { top: '20%', left: '10%' },
        { top: '60%', left: '30%' },
        { top: '40%', left: '70%' },
        { top: '80%', left: '50%' },
        { top: '30%', left: '85%' },
        { top: '70%', left: '15%' },
        { top: '10%', left: '60%' },
        { top: '90%', left: '75%' },
        { top: '50%', left: '25%' },
        { top: '35%', left: '90%' },
        { top: '15%', left: '45%' },
        { top: '65%', left: '5%' },
        { top: '85%', left: '35%' },
        { top: '25%', left: '80%' },
        { top: '75%', left: '65%' }
      ];
      
      return {
        ...positions[index - 1],
        '--delay': `${-index * 0.5}s`
      };
    }
  }
}
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533a7b 100%);
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

/* Floating Code Snippets */
.code-snippet {
  position: absolute;
  color: #64ffda;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Courier New', 'Monaco', monospace;
  opacity: 0.8;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  animation: floatCode 20s infinite ease-in-out;
  white-space: nowrap;
  user-select: none;
}

.code-1 { top: 10%; left: 10%; animation-delay: 0s; color: #64ffda; }
.code-2 { top: 20%; left: 80%; animation-delay: -3s; color: #ff6b6b; }
.code-3 { top: 40%; left: 15%; animation-delay: -6s; color: #4ecdc4; }
.code-4 { top: 60%; left: 70%; animation-delay: -9s; color: #45b7d1; }
.code-5 { top: 80%; left: 25%; animation-delay: -12s; color: #96ceb4; }
.code-6 { top: 35%; left: 60%; animation-delay: -15s; color: #feca57; }
.code-7 { top: 75%; left: 85%; animation-delay: -18s; color: #ff9ff3; }
.code-8 { top: 5%; left: 50%; animation-delay: -2s; color: #54a0ff; }
.code-9 { top: 55%; left: 5%; animation-delay: -7s; color: #5f27cd; }
.code-10 { top: 25%; left: 75%; animation-delay: -11s; color: #00d2d3; }

@keyframes floatCode {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-30px) rotate(2deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) rotate(-1deg);
    opacity: 0.9;
  }
  75% {
    transform: translateY(-40px) rotate(1deg);
    opacity: 1;
  }
}

/* Geometric Shapes */
.geometric-shape {
  position: absolute;
  opacity: 0.15;
  animation: rotateFloat 15s infinite linear;
}

.shape-1 {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #64ffda, #4ecdc4);
  top: 15%;
  left: 20%;
  animation-delay: 0s;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shape-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #ff6b6b, #ff9ff3);
  top: 70%;
  left: 60%;
  animation-delay: -5s;
  border-radius: 50%;
}

.shape-3 {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #45b7d1, #54a0ff);
  top: 30%;
  left: 80%;
  animation-delay: -10s;
  transform: rotate(45deg);
}

.shape-4 {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #feca57, #ff9f43);
  top: 50%;
  left: 10%;
  animation-delay: -7s;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.shape-5 {
  width: 90px;
  height: 90px;
  background: linear-gradient(45deg, #5f27cd, #341f97);
  top: 85%;
  left: 75%;
  animation-delay: -12s;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

@keyframes rotateFloat {
  0% {
    transform: rotate(0deg) translateY(0);
  }
  100% {
    transform: rotate(360deg) translateY(-20px);
  }
}

/* Binary Rain */
.binary-rain {
  position: absolute;
  color: #00ff41;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  opacity: 0.3;
  animation: rain 12s infinite linear;
  line-height: 1.2;
}

.binary-1 { left: 5%; animation-delay: 0s; }
.binary-2 { left: 13%; animation-delay: -2s; }
.binary-3 { left: 21%; animation-delay: -4s; }
.binary-4 { left: 29%; animation-delay: -6s; }
.binary-5 { left: 37%; animation-delay: -8s; }
.binary-6 { left: 45%; animation-delay: -1s; }
.binary-7 { left: 53%; animation-delay: -3s; }
.binary-8 { left: 61%; animation-delay: -5s; }
.binary-9 { left: 69%; animation-delay: -7s; }
.binary-10 { left: 77%; animation-delay: -9s; }
.binary-11 { left: 85%; animation-delay: -11s; }
.binary-12 { left: 93%; animation-delay: -1.5s; }

@keyframes rain {
  0% {
    top: -100px;
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    top: 100vh;
    opacity: 0;
  }
}

/* Glowing Particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #64ffda;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.8);
  animation: particle 8s infinite ease-in-out;
  animation-delay: var(--delay);
}

@keyframes particle {
  0%, 100% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1) rotate(180deg);
    opacity: 1;
  }
}

/* Circuit Lines */
.circuit-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #64ffda, transparent);
  opacity: 0.4;
  animation: circuitFlow 12s infinite ease-in-out;
}

.circuit-1 {
  width: 200px;
  top: 25%;
  left: 30%;
  animation-delay: 0s;
}

.circuit-2 {
  width: 150px;
  top: 55%;
  left: 65%;
  animation-delay: -4s;
  transform: rotate(45deg);
}

.circuit-3 {
  width: 180px;
  top: 75%;
  left: 20%;
  animation-delay: -8s;
  transform: rotate(-30deg);
}

.circuit-4 {
  width: 120px;
  top: 10%;
  left: 70%;
  animation-delay: -6s;
  transform: rotate(60deg);
}

@keyframes circuitFlow {
  0%, 100% {
    opacity: 0.4;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.2);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .code-snippet {
    font-size: 12px;
  }
  
  .geometric-shape {
    opacity: 0.1;
  }
  
  .binary-rain {
    font-size: 10px;
  }
}
</style>