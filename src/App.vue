<template>
  <TheHeader :class="headerClass" />
  <main class="main-content" :style="mainContentStyle">
    <router-view />
  </main>
  <TheFooter />
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

const route = useRoute();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isHomePage = computed(() => route.name === 'Home');

const headerClass = computed(() => ({
  'transparent-header': isHomePage.value && !isScrolled.value,
}));

const mainContentStyle = computed(() => {
  if (isHomePage.value) {
    return {
      paddingTop: '0',
      minHeight: '100vh'
    };
  }
  return {
    paddingTop: '74px',
    minHeight: 'calc(100vh - 74px - 70px)'
  };
});

</script>

<style>
/* Global Styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #333;
}

.main-content {
  transition: padding-top 0.3s ease;
}
</style>
