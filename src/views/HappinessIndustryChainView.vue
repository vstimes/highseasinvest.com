<template>
  <div class="happiness-chain">
    <div class="section-container">
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
        <div class="image-container">
          <img src="@/assets/ecosystems-huaxueavif.avif" alt="Skiing">
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
    </div>

    <!-- Strategic Partners & Select Clients -->
    <section class="partners-section">
      <div class="container">
        <h3>{{ $t('happiness_industry_chain.partners.title') }}</h3>
        <div class="logos-grid">
          <div v-for="logo in partnerLogos" :key="logo.alt" class="logo-item">
            <img :src="logo.src" :alt="logo.alt">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// Import partner logos
import logo1 from '@/assets/logo1.avif';
import logo2 from '@/assets/logo2.avif';
import logo3 from '@/assets/logo3.avif';
import logo4 from '@/assets/logo4.avif';
import logo5 from '@/assets/logo5.avif';
import logo6 from '@/assets/logo6.avif';
import logo7 from '@/assets/logo7.avif';
import logo8 from '@/assets/logo8.avif';
import logo9 from '@/assets/logo9.avif';
import logo10 from '@/assets/logo10.avif';
import logo11 from '@/assets/logo11.avif';

const { t, tm } = useI18n();

const partnerLogos = [
  { src: logo1, alt: 'Accor Hotels' },
  { src: logo2, alt: 'SNCF' },
  { src: logo3, alt: 'JD.com' },
  { src: logo4, alt: 'Flight Centre' },
  { src: logo5, alt: 'Wanda Group' },
  { src: logo6, alt: 'Yintai' },
  { src: logo7, alt: 'Madagascar' },
  { src: logo8, alt: 'lastminute.com' },
  { src: logo9, alt: 'PKFARE' },
  { src: logo10, alt: 'didatravel' },
  { src: logo11, alt: 'Zhongchuang Wenlv' },
  // NOTE: The provided image shows more logos than available in the assets folder.
  // Add more logos here if they become available.
];

</script>

<style scoped>
.happiness-chain {
  width: 100%;
  overflow: hidden; /* Prevents horizontal scroll */
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-section {
  display: flex;
  align-items: stretch; /* Makes columns equal height */
  min-height: 400px;
  background-color: #fff;
}

.content-section.reverse {
  flex-direction: row-reverse;
}

.image-container {
  flex: 1;
  min-width: 50%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  flex: 1;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background-color: #f9f9f9;
}

.container {
  max-width: 900px;
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

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
}

.logo-item img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo-item img:hover {
  filter: grayscale(0%);
  opacity: 1;
}

@media (max-width: 992px) {
  .content-section,
  .content-section.reverse {
    flex-direction: column;
  }
  .text-container {
    padding: 3rem 2rem;
  }
}

@media (max-width: 768px) {
  .lists-wrapper {
    flex-direction: column;
    gap: 0;
  }
  .text-container h3 {
    font-size: 1.5rem;
  }
  .partners-section h3 {
    font-size: 1.5rem;
  }
}
</style>