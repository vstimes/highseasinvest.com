<template>
  <div class="contact-us">
    <div class="banner">
      <img src="@/assets/contactus-banner.avif" alt="Contact Us">
      <h1>{{ $t('page_titles.contact_us') }}</h1>
    </div>
    <div class="container">
      <div class="contact-info">
        <h2>{{ $t('contact_us.get_in_touch') }}</h2>
        <p>{{ $t('contact_us.address') }}: 123 High Seas Ave, Suite 100, Shanghai, China</p>
        <p>{{ $t('contact_us.email') }}: contact@highseasinv.com</p>
        <p>{{ $t('contact_us.phone') }}: +86 21 1234 5678</p>
      </div>
      <div class="contact-form">
        <h2>{{ $t('contact_us.send_message') }}</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" :placeholder="$t('contact_us.form.name')" required>
          </div>
          <div class="form-group">
            <input type="email" :placeholder="$t('contact_us.form.email')" required>
          </div>
          <div class="form-group">
            <textarea :placeholder="$t('contact_us.form.message')" rows="5" required></textarea>
          </div>
          <button type="submit">{{ $t('contact_us.form.submit') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const submitForm = () => {
  // Handle form submission logic
  alert('Form submitted!');
};
</script>

<style scoped>
.contact-us {
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h2, .contact-form h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 2rem;
}

.contact-info p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  background-color: #003366;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0055a5;
}

@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .banner h1 {
    font-size: 2rem;
  }
  .container {
    margin: 2rem auto;
  }
}
</style>