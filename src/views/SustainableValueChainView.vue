<template>
  <div class="sustainable-value-chain">
    <div class="banner">
      <img src="@/assets/sut-banner.avif" alt="Sustainable Value Chain">
      <h1>{{ $t('page_titles.sustainable_value_chain') }}</h1>
    </div>
    <div class="container">
      <p class="intro">{{ $t('sustainable_value_chain.intro') }}</p>
      <div class="chain-grid">
        <div class="chain-item" v-for="item in chainItems" :key="item.title">
          <div class="item-icon">
            <!-- Add icon here if available -->
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const chainItems = computed(() => [
  {
    title: t('sustainable_value_chain.items.item1.title'),
    description: t('sustainable_value_chain.items.item1.description')
  },
  {
    title: t('sustainable_value_chain.items.item2.title'),
    description: t('sustainable_value_chain.items.item2.description')
  },
  {
    title: t('sustainable_value_chain.items.item3.title'),
    description: t('sustainable_value_chain.items.item3.description')
  },
  {
    title: t('sustainable_value_chain.items.item4.title'),
    description: t('sustainable_value_chain.items.item4.description')
  },
  {
    title: t('sustainable_value_chain.items.item5.title'),
    description: t('sustainable_value_chain.items.item5.description')
  },
  {
    title: t('sustainable_value_chain.items.item6.title'),
    description: t('sustainable_value_chain.items.item6.description')
  }
]);
</script>

<style scoped>
.sustainable-value-chain {
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

.intro {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.chain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.chain-item {
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.chain-item h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1rem;
}

.chain-item p {
  line-height: 1.6;
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
  }
  .intro {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
}
</style>