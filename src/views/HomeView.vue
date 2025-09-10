<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <!-- Desktop Video -->
      <div v-if="!isMobile" class="video-container">
        <video 
          ref="videoPlayer" 
          :poster="videoCover" 
          autoplay 
          loop 
          muted 
          playsinline 
          class="hero-video" 
          @error="handleVideoError"
        >
          <source src="@/assets/home-banner.mp4" type="video/mp4">
        </video>
      </div>
      <!-- Mobile Image -->
      <div v-else class="hero-background-image"></div>

      <div class="hero-overlay">
        <div class="hero-content">
          <h1>{{ $t('hero.title') }}</h1>
          <h2>{{ $t('hero.subtitle') }}</h2>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="founder-section">
      <div class="container">
        <h2>{{ $t('founder.title') }}</h2>
        <p v-for="n in 8" :key="n">{{ $t(`founder.p${n}`) }}</p>
      </div>
    </section>

    <!-- Industry Focus Section -->
    <section class="focus-section">
      <router-link to="/happiness-industry-chain" class="focus-item">
        <div class="focus-content">
          <p>{{ $t('focus.title1') }}</p>
          <h3>{{ $t('focus.subtitle1') }}</h3>
        </div>
      </router-link>
      <router-link to="/sustainable-value-chain" class="focus-item">
        <div class="focus-content">
          <p>{{ $t('focus.title2') }}</p>
          <h3>{{ $t('focus.subtitle2') }}</h3>
        </div>
      </router-link>
    </section>

    <!-- Image Section -->
    <section class="image-section">
      <img src="@/assets/index-bottom.avif" alt="Eiffel Tower">
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import videoCover from '@/assets/index-video-cover.jpg';

const videoPlayer = ref(null);
const videoFailed = ref(false);
const isMobile = ref(false);

const handleVideoError = () => {
  videoFailed.value = true;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  if (videoPlayer.value) {
    const promise = videoPlayer.value.play();
    if (promise !== undefined) {
      promise.catch(error => {
        console.error("Video autoplay was prevented:", error);
        videoFailed.value = true;
      });
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: white;
  text-align: center;
  background-color: #000; /* Fallback background color */
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/index-video-cover.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.hero-content {
  max-width: 800px;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-content h2 {
  font-size: 1.5rem;
}

/* Founder Section */
.founder-section {
  padding: 4rem 2rem;
  background-color: #fff;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.founder-section h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.founder-section p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  text-align: justify;
}

/* Focus Section */
.focus-section {
  display: flex;
  color: white;
  text-decoration: none;
}

.focus-item {
  flex: 1;
  background-color: #002346;
  padding: 4rem 2rem;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s;
}

.focus-item:first-child {
  background-color: #003c78;
}

.focus-item:hover {
  background-color: #0055a5;
}

.focus-content p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.focus-content h3 {
  font-size: 2.5rem;
  font-weight: bold;
}

/* Image Section */
.image-section img {
  width: 100%;
  display: block;
}

/* Responsive */
@media (max-width: 767px) { /* Changed to 767px to match JS */
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content h2 {
    font-size: 1.2rem;
  }
  .focus-section {
    flex-direction: column;
  }
  .focus-content h3 {
    font-size: 2rem;
  }
}
</style>
