<template>
  <div class="happiness-chain">
    <!-- Full Tourism Industry Chain -->
    <section class="content-section">
      <div class="image-container">
        <img src="@/assets/ecosystems-changcheng.avif" alt="Great Wall">
      </div>
      <div class="text-container">
        <h3>{{ $t('happiness_industry_chain.tourism.title') }}</h3>
        <div class="lists-wrapper">
          <ul>
            <li v-for="item in tm('happiness_industry_chain.tourism.list1')" :key="item">{{ item }}</li>
          </ul>
          <ul>
            <li v-for="item in tm('happiness_industry_chain.tourism.list2')" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Hospitality & Leisure -->
    <section class="content-section reverse">
      <div class="image-container">
        <img src="@/assets/ecosystems-huaxueavif.avif" alt="Skiing">
      </div>
      <div class="text-container">
        <h3>{{ $t('happiness_industry_chain.hospitality.title') }}</h3>
        <div class="lists-wrapper">
          <ul>
            <li v-for="item in tm('happiness_industry_chain.hospitality.list1')" :key="item">{{ item }}</li>
          </ul>
          <ul>
            <li v-for="item in tm('happiness_industry_chain.hospitality.list2')" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
      
    </section>

    <!-- Wellness & Eldercare -->
    <section class="content-section">
      <div class="image-container">
        <img src="@/assets/ecosystems-shangu.avif" alt="Valley">
      </div>
      <div class="text-container">
        <h3>{{ $t('happiness_industry_chain.wellness.title') }}</h3>
        <div class="lists-wrapper">
          <ul>
            <li v-for="item in tm('happiness_industry_chain.wellness.list1')" :key="item">{{ item }}</li>
          </ul>
          <ul>
            <li v-for="item in tm('happiness_industry_chain.wellness.list2')" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Strategic Partners & Select Clients -->
    <section class="partners-section">
      <div class="container">
        <h3>{{ $t('happiness_industry_chain.partners.title') }}</h3>
        <div class="partner-image-container">
          <img :src="partnersImage" alt="Strategic Partners">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import partnersImage from '@/assets/parnters.png';

const { t, tm } = useI18n();
</script>

<style scoped>
.happiness-chain {
  width: 100%;
  overflow-x: hidden;
}

.content-section {
  display: flex;
  width: 100%;
  min-height: 450px; /* Adjust height as needed */
  background-color: #fff;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}

.content-section + .content-section {
    border-top: none;
}

.content-section.reverse {
  flex-direction: row-reverse;
}

.image-container, .text-container {
  flex: 1 1 50%;
  box-sizing: border-box;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

.content-section .image-container + .text-container {
    border-left: none;
}

.content-section.reverse .text-container + .image-container {
    border-left: none;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text-container {
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.text-container.with-border-right {
  border-right: 1px solid #333;
}

.text-container.with-border-left {
  border-left: 1px solid #333;
}

.text-container h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 2rem;
  text-align: center;
}

.lists-wrapper {
  display: flex;
  gap: 2rem;
}

.lists-wrapper ul {
  flex: 1;
  list-style: none;
  padding: 0;
  margin: 0;
}

.lists-wrapper li {
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 0.9rem;
}

.partners-section {
  padding: 5rem 0;
  background-color: #fff; /* Changed background to white */
}

.container {
  max-width: 1200px; /* Constraining the container for partners section */
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.partners-section h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 3rem;
}

.partner-image-container img {
  max-width: 100%;
  height: auto;
}

/* Responsive Design */
@media (max-width: 992px) {
  .content-section,
  .content-section.reverse {
    flex-direction: column;
  }

  .content-section .image-container,
  .content-section.reverse .image-container {
    order: 0;
  }
  .content-section .text-container,
  .content-section.reverse .text-container {
    order: 1;
    border-top: 1px solid #000;
    border-right: none;
    border-left: none;
  }
}

@media (max-width: 768px) {
  .lists-wrapper {
    flex-direction: column;
    gap: 0;
  }
  .text-container {
    padding: 3rem 2rem;
  }
  .text-container h3, .partners-section h3 {
    font-size: 1.5rem;
  }
}
</style>
