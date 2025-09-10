<template>
  <div class="about-us">
    <div class="banner">
      <p class="banner-text">{{ $t('about_us.banner_text') }}</p>
    </div>
    <div class="container">
      <section class="feature-section">
        <div class="image-container">
          <img src="@/assets/core-members.avif" alt="Core Members">
        </div>
        <div class="text-container">
          <h2>{{ $t('about_us.core_members.title') }}</h2>
          <p>{{ $t('about_us.core_members.p1') }}</p>
          <p>{{ $t('about_us.core_members.p2') }}</p>
          <p>{{ $t('about_us.core_members.p3') }}</p>
        </div>
      </section>

      <section class="keywords-section">
        <blockquote>
          <p>{{ $t('about_us.keywords.text') }}</p>
        </blockquote>
      </section>

      <section class="feature-section">
        <div class="text-container">
          <h2>{{ $t('about_us.advisors.title') }}</h2>
          <p>{{ $t('about_us.advisors.p1') }}</p>
          <p>{{ $t('about_us.advisors.p2') }}</p>
        </div>
        <div class="image-container">
          <img src="@/assets/Advisors & Collaborators.avif" alt="Advisors & Collaborators">
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.about-us {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/aboutus-banner.avif');
  background-size: cover;
  background-position: center;
}

.banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.banner-text {
  font-size: 2rem;
  font-weight: bold;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.7;
  color: #000;
  white-space: pre-line;
}

.container {
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.feature-section {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.text-container {
  flex: 1;
}

.text-container h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1.5rem;
}

.text-container p {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.keywords-section {
  margin-top: 4rem;
}

.keywords-section blockquote {
  font-size: 1.1rem;
  font-style: italic;
  color: #555;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f9f9f9;
  border-radius: 8px;
}

.keywords-section blockquote::before {
  content: '“';
  font-family: 'Georgia', serif;
  font-size: 6rem;
  color: #003366;
  position: absolute;
  left: -1rem;
  top: -1rem;
  opacity: 0.1;
}
.keywords-section blockquote::after {
  content: '”';
  font-family: 'Georgia', serif;
  font-size: 6rem;
  color: #003366;
  position: absolute;
  right: -1rem;
  bottom: -2rem;
  opacity: 0.1;
}

.keywords-section blockquote p {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .banner-text {
    font-size: 1.5rem;
  }
  .container {
    margin: 2rem auto;
  }
  .feature-section {
    flex-direction: column;
  }
  .feature-section .text-container {
    order: 2;
  }
  .feature-section .image-container {
    order: 1;
  }
}
</style>