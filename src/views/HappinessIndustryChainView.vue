<template>
  <div class="happiness-chain">
    <div class="banner">
      <h1>{{ $t('page_titles.happiness_industry_chain') }}</h1>
    </div>
    <div class="container">
      <p>{{ $t('happiness_industry_chain.intro') }}</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.happiness-chain {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  color: white;
  background-color: #003c78; /* Placeholder color */
  padding: 6rem 0;
}

.banner h1 {
  font-size: 3rem;
  font-weight: bold;
}

.container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  text-align: center;
}

.container p {
  font-size: 1.2rem;
  line-height: 1.8;
}
</style>
