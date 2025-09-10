<template>
  <div class="about-us">
    <div class="banner">
      <img src="@/assets/aboutus-banner.avif" alt="About Us">
      <h1>{{ $t('page_titles.about_us') }}</h1>
    </div>
    <div class="container">
      <div class="mission-section">
        <h2>{{ $t('about_us.mission.title') }}</h2>
        <p>{{ $t('about_us.mission.description') }}</p>
      </div>
      <div class="team-section">
        <h2>{{ $t('about_us.team.title') }}</h2>
        <div class="team-grid">
          <div class="team-member" v-for="member in teamMembers" :key="member.name">
            <img :src="member.image" :alt="member.name">
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Placeholder data - replace with actual data
const teamMembers = computed(() => [
  {
    name: t('about_us.team.members.member1.name'),
    role: t('about_us.team.members.member1.role'),
    image: 'https://via.placeholder.com/150'
  },
  {
    name: t('about_us.team.members.member2.name'),
    role: t('about_us.team.members.member2.role'),
    image: 'https://via.placeholder.com/150'
  },
  {
    name: t('about_us.team.members.member3.name'),
    role: t('about_us.team.members.member3.role'),
    image: 'https://via.placeholder.com/150'
  }
]);
</script>

<style scoped>
.about-us {
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

.mission-section {
  text-align: center;
  margin-bottom: 4rem;
}

.mission-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1rem;
}

.mission-section p {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.team-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  text-align: center;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member h3 {
  font-size: 1.2rem;
  font-weight: bold;
}

.team-member .role {
  color: #666;
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
  }
  .mission-section p {
    font-size: 1rem;
  }
}
</style>