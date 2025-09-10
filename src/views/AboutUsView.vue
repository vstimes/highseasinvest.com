<template>
  <div class="about-us">
    <div class="banner">
      <p class="banner-text">{{ $t('about_us.banner_text') }}</p>
    </div>
    <div class="container">
      <section class="core-members-section">
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
  width: 900px;
  margin: 0 auto;
  line-height: 1.7;
  color: #000;
  white-space: pre-line;
  text-align: left;
}

.container {
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.core-members-section {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.image-container {
  flex-shrink: 0;
}

.image-container img {
  width: 363px;
  height: 387px;
  object-fit: cover;
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
  .core-members-section {
    flex-direction: column;
  }
  .image-container img {
    width: 100%;
    height: auto;
  }
}
</style>