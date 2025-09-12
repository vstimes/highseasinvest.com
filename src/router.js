import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutUsView from './views/AboutUsView.vue';
import ContactUsView from './views/ContactUsView.vue';
import CoreServicesView from './views/CoreServicesView.vue';
import ServiceScenariosView from './views/ServiceScenariosView.vue';
import SustainableValueChainView from './views/SustainableValueChainView.vue';
import HappinessIndustryChainView from './views/HappinessIndustryChainView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUsView,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUsView,
  },
  {
    path: '/core-services',
    name: 'CoreServices',
    component: CoreServicesView,
  },
  {
    path: '/service-scenarios',
    name: 'ServiceScenarios',
    component: ServiceScenariosView,
  },
  {
    path: '/sustainable-value-chain',
    name: 'SustainableValueChain',
    component: SustainableValueChainView,
  },
  {
    path: '/happiness-industry-chain',
    name: 'HappinessIndustryChain',
    component: HappinessIndustryChainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
