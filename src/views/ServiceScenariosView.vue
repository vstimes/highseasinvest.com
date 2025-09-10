<template>
  <div class="service-scenarios">
    <div class="banner">
      <img src="@/assets/seervice-senarios-banner.avif" alt="Service Scenarios">
      <h1>{{ $t('page_titles.service_scenarios') }}</h1>
    </div>
    <div class="container">
      <div class="scenario-item" v-for="(scenario, index) in scenarios" :key="index">
        <div class="scenario-content">
          <h2>{{ scenario.title }}</h2>
          <p>{{ scenario.description }}</p>
        </div>
        <div class="scenario-image">
          <img :src="scenario.image" :alt="scenario.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const scenarios = computed(() => [
  {
    title: t('service_scenarios.scenarios.scenario1.title'),
    description: t('service_scenarios.scenarios.scenario1.description'),
    image: '@/assets/seervice-senarios-banner2.avif' // Placeholder, replace with actual image
  },
  {
    title: t('service_scenarios.scenarios.scenario2.title'),
    description: t('service_scenarios.scenarios.scenario2.description'),
    image: '@/assets/advs.avif' // Placeholder, replace with actual image
  },
  {
    title: t('service_scenarios.scenarios.scenario3.title'),
    description: t('service_scenarios.scenarios.scenario3.description'),
    image: '@/assets/ecosystems-changcheng.avif' // Placeholder, replace with actual image
  }
]);

</script>

<style scoped>
.service-scenarios {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  color: white;
}

.banner img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.scenario-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  align-items: center;
}

/* Alternate layout for even items */
.scenario-item:nth-child(even) {
  flex-direction: row-reverse;
}

.scenario-content {
  flex: 1;
}

.scenario-content h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1rem;
}

.scenario-content p {
  line-height: 1.8;
}

.scenario-image {
  flex: 1;
}

.scenario-image img {
  width: 100%;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
  }
  .scenario-item, .scenario-item:nth-child(even) {
    flex-direction: column;
  }
}
</style>