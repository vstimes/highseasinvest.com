<template>
  <div class="core-services">
    <div class="banner">
      <img src="@/assets/core-service-banner.avif" alt="Core Services">
      <h1>{{ $t('page_titles.core_services') }}</h1>
    </div>
    <div class="container">
      <div class="service-item">
        <h3>{{ $t('core_services.corporate_finance.title') }}</h3>
        <ul>
          <li v-for="item in $t('core_services.corporate_finance.items')" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="service-item">
        <h3>{{ $t('core_services.strategic_advisory.title') }}</h3>
        <ul>
          <li v-for="item in $t('core_services.strategic_advisory.items')" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="service-item">
        <h3>{{ $t('core_services.venture_building.title') }}</h3>
        <ul>
          <li v-for="item in $t('core_services.venture_building.items')" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.core-services {
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.service-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1.5rem;
}

.service-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-item li {
  margin-bottom: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
  }
}
</style>