<template>
  <div class="service-scenarios">
    <div class="banner">
      <img src="@/assets/seervice-senarios-banner.avif" alt="Service Scenarios Banner">
      <h1>{{ $t('page_titles.service_scenarios') }}</h1>
    </div>

    <div class="container">
      <!-- English Layout -->
      <template v-if="$i18n.locale === 'en'">
        <section class="scenario-section">
          <div class="section-header">
            <div class="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z" />
              </svg>
            </div>
            <h2 class="section-title">{{ $t('service_scenarios.overseas_companies.title') }}</h2>
          </div>
          <div class="section-content reverse">
            <div class="content-image">
              <img src="@/assets/service-scenarios-pic2.avif" alt="For Overseas Companies">
            </div>
            <div class="content-text">
              <div class="service-grid">
                <div class="service-card" v-for="(service, index) in $tm('service_scenarios.overseas_companies.services')" :key="index">
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="scenario-section">
          <div class="section-header">
            <div class="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z" />
              </svg>
            </div>
            <h2 class="section-title">{{ $t('service_scenarios.chinese_companies.title') }}</h2>
          </div>
          <div class="section-content">
            <div class="content-image">
              <img src="@/assets/service-scenarios-pic1.avif" alt="For Chinese Companies">
            </div>
            <div class="content-text">
              <div class="service-grid">
                <div class="service-card" v-for="(service, index) in $tm('service_scenarios.chinese_companies.services')" :key="index">
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>

      <!-- Chinese Layout -->
      <template v-else>
        <section class="scenario-section">
          <div class="section-header">
            <div class="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z" />
              </svg>
            </div>
            <h2 class="section-title">{{ $t('service_scenarios.chinese_companies.title') }}</h2>
          </div>
          <div class="section-content">
            <div class="content-image">
              <img src="@/assets/service-scenarios-pic1.avif" alt="针对中国企业的服务">
            </div>
            <div class="content-text">
              <div class="service-grid">
                <div class="service-card" v-for="(service, index) in $tm('service_scenarios.chinese_companies.services')" :key="index">
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="scenario-section">
          <div class="section-header">
            <div class="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z" />
              </svg>
            </div>
            <h2 class="section-title">{{ $t('service_scenarios.overseas_companies.title') }}</h2>
          </div>
          <div class="section-content reverse">
            <div class="content-image">
              <img src="@/assets/service-scenarios-pic2.avif" alt="针对海外企业的服务">
            </div>
            <div class="content-text">
              <div class="service-grid">
                <div class="service-card" v-for="(service, index) in $tm('service_scenarios.overseas_companies.services')" :key="index">
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script setup>
// No script needed for this structure as we are using $tm directly in the template
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

.scenario-section {
  margin-bottom: 5rem;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
}

.section-icon {
  color: #003366;
  margin-bottom: 1rem;
  border: 2px solid #003366;
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #003366;
}

.section-content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.section-content.reverse {
  flex-direction: row-reverse;
}

.content-image {
  flex: 1;
}

.content-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.content-text {
  flex: 1;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.service-card {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.service-card h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1rem;
}

.service-card p {
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 992px) {
  .section-content, .section-content.reverse {
    flex-direction: column;
  }
  .content-image {
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
    padding: 0 1rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
