<template>
  <div class="sustainable-chain">
    <div class="banner">
      <p class="banner-text">{{ $t('sustainable_value_chain.banner_text') }}</p>
    </div>

    <div class="container">
      <nav class="sub-nav">
        <ul>
          <li v-for="item in tm('sustainable_value_chain.sub_nav')" :key="item">{{ item }}</li>
        </ul>
      </nav>

      <section class="partners-section">
        <h2>{{ $t('sustainable_value_chain.partners.title') }}</h2>
        <div class="partners-grid">
          <div class="card" v-for="(partner, index) in tm('sustainable_value_chain.partners.list')" :key="partner.title">
            <img :src="partnerLogos[index]" :alt="partner.title" class="card-logo">
            <h3>{{ partner.title }}</h3>
            <p>{{ partner.description }}</p>
          </div>
        </div>
      </section>

      <section class="support-section">
        <h3>{{ $t('sustainable_value_chain.support_unit.title') }}</h3>
        <ul>
          <li v-for="item in tm('sustainable_value_chain.support_unit.list')" :key="item">{{ item }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// As per instruction, using logo1-11 for the partners.
import logo1 from '@/assets/logo1.png';
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
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11
];

</script>

<style scoped>
.sustainable-chain {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/sut-banner.avif');
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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.banner-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  z-index: 2;
  line-height: 1.7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.sub-nav {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}

.sub-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.sub-nav li {
  font-size: 1.1rem;
  font-weight: bold;
  color: #003366;
}

.partners-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 3rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.card {
  background: #fff;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden; /* Contains the floated element */
}

.card-logo {
  float: right;
  max-width: 100px;
  max-height: 60px;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.card p {
  font-size: 0.95rem;
  line-height: 1.8;
  text-align: justify;
}

.support-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #ccc;
  text-align: center;
}

.support-section h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 2rem;
}

.support-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 3rem;
}

.support-section li {
  font-size: 1rem;
}

@media (max-width: 992px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .banner-text {
    font-size: 2rem;
  }
  .sub-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
