<template>
  <header class="main-header">
    <router-link to="/" class="logo">
      <img src="@/assets/logo H&G.avif" alt="High Seas Investment" />
    </router-link>

    <nav class="main-nav">
      <router-link to="/">{{ $t("nav.home") }}</router-link>
      <router-link to="/about">{{ $t("nav.about") }}</router-link>
      <router-link to="/service-scenarios">{{ $t("nav.services") }}</router-link>
      <router-link to="/core-services">{{ $t("nav.core") }}</router-link>
      <router-link to="/">{{ $t("nav.ecosystems") }}</router-link>
      <router-link to="/contact">{{ $t("nav.contact") }}</router-link>
    </nav>

    <div class="controls">
      <div class="lang-switcher">
        <button @click="switchLanguage('zh')" :class="{ active: $i18n.locale === 'zh' }">ZH</button>
        <span class="separator"></span>
        <button @click="switchLanguage('en')" :class="{ active: $i18n.locale === 'en' }">EN</button>
      </div>
      <button class="mobile-nav-toggle" @click="mobileNavOpen = !mobileNavOpen" aria-label="Toggle navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </header>

  <nav class="mobile-nav" :class="{ open: mobileNavOpen }">
    <router-link to="/" @click="mobileNavOpen = false">{{ $t("nav.home") }}</router-link>
    <router-link to="/about" @click="mobileNavOpen = false">{{ $t("nav.about") }}</router-link>
    <router-link to="/service-scenarios" @click="mobileNavOpen = false">{{ $t("nav.services") }}</router-link>
    <router-link to="/core-services" @click="mobileNavOpen = false">{{ $t("nav.core") }}</router-link>
    <router-link to="/" @click="mobileNavOpen = false">{{ $t("nav.ecosystems") }}</router-link>
    <router-link to="/contact" @click="mobileNavOpen = false">{{ $t("nav.contact") }}</router-link>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const mobileNavOpen = ref(false);

const switchLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px; /* New fixed height */
  padding: 0 2rem;
  background-color: #ffffff; /* Solid white background */
  color: #333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); /* Subtle shadow */
  transition: background-color 0.3s;
}

/* Transparent header for scrolled-to-top homepage */
.main-header.transparent-header {
  background-color: transparent;
  box-shadow: none;
}

.logo img {
  height: 50px; /* Appropriate logo size for mobile */
  width: auto;
  object-fit: contain;
}

.main-nav {
  display: none; /* Hidden on mobile */
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  position: relative;
  padding-bottom: 5px;
}

.main-nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #003366;
  transition: width 0.3s;
}

.main-nav a:hover::after,
.main-nav a.router-link-active::after {
  width: 100%;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.lang-switcher {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 0.2rem 0.6rem;
  background-color: #fff;
}

.lang-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #ccc;
  padding: 0;
  outline: none !important;
  box-shadow: none !important;
}

.lang-switcher button.active {
  color: #003366;
}

.lang-switcher .separator {
  width: 1px;
  height: 12px;
  background-color: #ccc;
  margin: 0 0.5rem;
}

.mobile-nav-toggle {
  display: block; /* Visible on mobile */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
    outline: none !important;
  box-shadow: none !important;
}

.mobile-nav-toggle .bar {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #333;
  margin: 5px 0;
  transition: transform 0.3s;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 105px; /* Match new header height */
  left: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  z-index: 999;
}

.mobile-nav.open {
  transform: translateX(0);
}

.mobile-nav a {
  padding: 1rem 2rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  text-align: center;
}

/* Desktop styles */
@media (min-width: 992px) {
  .main-header {
    padding: 0 100px; /* Adjust side padding */
  }

  .logo img {
    width: 326px;
    height: 88px;
  }

  .main-nav {
    display: flex;
    margin: 0 auto;
  }

  .mobile-nav-toggle {
    display: none;
  }

  .mobile-nav {
    display: none;
  }
}
</style>
