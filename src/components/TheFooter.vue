<template>
  <footer class="main-footer">
    <p>© {{ currentYear }} {{ $t("footer.copyright") }}</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.main-footer {
  background-color: #002346;
  color: #ccc;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
}
</style>
