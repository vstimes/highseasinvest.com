<template>
  <div class="core-services">
    <div class="banner">
      <p class="banner-text">{{ $t('core_services.banner_text') }}</p>
    </div>
    <div class="container">
      <div class="service-grid">
        <div class="service-item">
          <h3>{{ $t('core_services.investment_incubation.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.investment_incubation.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="service-item">
          <h3>{{ $t('core_services.strategy_consulting.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.strategy_consulting.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="service-item">
          <h3>{{ $t('core_services.merger_acquisition.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.merger_acquisition.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="service-item">
          <h3>{{ $t('core_services.company_globalization.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.company_globalization.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="service-item">
          <h3>{{ $t('core_services.fund_raising.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.fund_raising.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="service-item">
          <h3>{{ $t('core_services.destination_strategy.title') }}</h3>
          <ul>
            <li v-for="item in tm('core_services.destination_strategy.items')" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();
</script>

<style scoped>
.core-services {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/core-service-banner.avif');
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

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem 2rem;
}

.service-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1.5rem;
}

.service-item ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.service-item li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .banner-text {
    font-size: 1.5rem;
  }
  .container {
    margin: 2rem auto;
  }
  .service-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
