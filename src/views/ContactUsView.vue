<template>
  <div class="contact-us">
    <div class="banner">
      <p class="banner-text">{{ $t('contact_us.banner_text') }}</p>
    </div>

    <div class="container">
      <div v-if="submitted" class="success-message">
        <h2>{{ $t('contact_us.success.title') }}</h2>
        <p>{{ $t('contact_us.success.message') }}</p>
      </div>

      <form v-else @submit.prevent="handleSubmit">
        <div class="form-grid">
          <div class="form-group">
            <label for="fullName">{{ $t('contact_us.form.fullName') }} *</label>
            <input type="text" id="fullName" v-model="form.fullName" required>
          </div>
          <div class="form-group">
            <label for="email">{{ $t('contact_us.form.email') }} *</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="organization">{{ $t('contact_us.form.organization') }} *</label>
            <input type="text" id="organization" v-model="form.organization" required>
          </div>
          <div class="form-group">
            <label for="position">{{ $t('contact_us.form.position') }} *</label>
            <input type="text" id="position" v-model="form.position" required>
          </div>
        </div>

        <div class="checkbox-section">
          <div class="checkbox-group">
            <label>{{ $t('contact_us.form.areYou.label') }} *</label>
            <div v-for="option in tm('contact_us.form.areYou.options')" :key="option.key" class="checkbox-item">
              <input type="checkbox" :id="option.key" :value="option.label" v-model="form.areYou">
              <label :for="option.key">{{ option.label }}</label>
            </div>
          </div>
          <div class="checkbox-group">
            <label>{{ $t('contact_us.form.interestedIn.label') }} *</label>
            <div v-for="option in tm('contact_us.form.interestedIn.options')" :key="option.key" class="checkbox-item">
              <input type="checkbox" :id="option.key" :value="option.label" v-model="form.interestedIn">
              <label :for="option.key">{{ option.label }}</label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="message">{{ $t('contact_us.form.message') }}</label>
          <textarea id="message" v-model="form.message" rows="5"></textarea>
        </div>

        <div class="form-actions">
          <button type="submit">{{ $t('contact_us.form.send') }}</button>
        </div>
      </form>

      <div class="address-section">
        <div class="address-item">
          <span class="icon"></span>
          <h4>{{ $t('contact_us.addresses.france.title') }}</h4>
          <p v-html="$t('contact_us.addresses.france.address')"></p>
        </div>
        <div class="address-item">
          <span class="icon"></span>
          <h4>{{ $t('contact_us.addresses.china.title') }}</h4>
          <p v-html="$t('contact_us.addresses.china.address')"></p>
        </div>
        <div class="address-item">
          <span class="icon"></span>
          <h4>{{ $t('contact_us.addresses.hongkong.title') }}</h4>
          <p v-html="$t('contact_us.addresses.hongkong.address')"></p>
        </div>
      </div>
       <div class="contact-email">
          <p>contact@highseasinvest.com</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const submitted = ref(false);
const form = ref({
  fullName: '',
  email: '',
  organization: '',
  position: '',
  areYou: [],
  interestedIn: [],
  message: ''
});

const handleSubmit = () => {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form.value);
  submitted.value = true;
};
</script>

<style scoped>
.contact-us {
  color: #333;
}

.banner {
  position: relative;
  text-align: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/contactus-banner.avif');
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
  background-color: rgba(0, 0, 0, 0.3);
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
  max-width: 900px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.success-message {
  text-align: center;
  padding: 4rem 0;
  background-color: #f0f9f4;
  border-radius: 8px;
  border: 1px solid #cce8d4;
}

.success-message h2 {
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1rem;
}

.success-message p {
  font-size: 1.2rem;
}

form {
  background: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.checkbox-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.checkbox-group > label {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

.checkbox-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 0.75rem;
  width: 18px;
  height: 18px;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

button[type="submit"] {
  background-color: #003366;
  color: white;
  padding: 0.75rem 2.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #0055a5;
}

.address-section {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #eee;
}

.address-item {
  max-width: 250px;
}

.address-item h4 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 1rem;
}

.address-item p {
  line-height: 1.6;
}

.contact-email {
    text-align: center;
    margin-top: 2rem;
    font-size: 1rem;
    color: #555;
}

@media (max-width: 768px) {
  .form-grid, .checkbox-section {
    grid-template-columns: 1fr;
  }
  .address-section {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  form {
    padding: 2rem;
  }
}
</style>
