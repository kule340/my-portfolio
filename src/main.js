import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AboutMePage from '@/components/AboutMe.vue';
import CoursesPage from '@/components/Courses.vue';

const routes = [
  { path: '/about-me', component: AboutMePage },
  { path: '/courses', component: CoursesPage },
];


// Create the router
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

// Create the Vue app
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
