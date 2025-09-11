<template>
  <div class="service-scenarios">
    <div class="container">
      <section
        v-for="section in sections"
        :key="section.id"
        class="scenario-section"
      >
        <div
          style="
            display: flex;
            gap: 3rem;
            align-items: center;
          "
          :class="{ reverse: section.reverseLayout }"
        >
          <div class="content-image">
            <img :src="section.image" :alt="$t(section.titleKey)" />
          </div>
          <div class="content-details">
            <div class="section-header">
              <div class="section-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="40"
                  height="40"
                >
                  <path
                    d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.13,5.12L18.88,8.87M3,17.25V21H6.75L17.81,9.94L14.06,6.19L3,17.25Z"
                  />
                </svg>
              </div>
              <h2 class="section-title">{{ $t(section.titleKey) }}</h2>
            </div>
          </div>
        </div>
        <div class="service-grid">
          <div
            class="service-card"
            v-for="(service, index) in $tm(section.servicesKey)"
            :key="index"
          >
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

// Image assets
import pic1 from "@/assets/service-scenarios-pic1.avif";
import pic2 from "@/assets/service-scenarios-pic2.avif";

const { locale } = useI18n();

const sectionsData = {
  chinese: {
    id: "chinese",
    titleKey: "service_scenarios.chinese_companies.title",
    servicesKey: "service_scenarios.chinese_companies.services",
    image: pic1,
    reverseLayout: false, // Image on the left
  },
  overseas: {
    id: "overseas",
    titleKey: "service_scenarios.overseas_companies.title",
    servicesKey: "service_scenarios.overseas_companies.services",
    image: pic2,
    reverseLayout: true, // Image on the right
  },
};

const sections = computed(() => {
  if (locale.value === "zh") {
    // Chinese layout: Chinese companies first, then Overseas
    return [sectionsData.chinese, sectionsData.overseas];
  }
  // English (and default) layout: Overseas first, then Chinese
  return [sectionsData.overseas, sectionsData.chinese];
});
</script>

<style scoped>
.service-scenarios {
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.scenario-section {
    margin-bottom: 5rem;
}

.scenario-section .reverse {
  flex-direction: row-reverse;
}

.content-image {
  flex: 1;
}

.content-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.content-details {
  flex: 1;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
}

.section-icon {
  color: #003366;
  border: 2px solid #003366;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #003366;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem 2rem;
  margin-top: 3rem;
}

.service-card {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
  .scenario-section > div[style] {
    flex-direction: column;
    align-items: stretch !important; /* Override inline style */
  }
  .content-image {
      margin-bottom: 3rem;
  }
}

@media (max-width: 768px) {
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