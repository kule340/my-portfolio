<template>
  <div id="app">
    <!-- Navbar -->
    <NavbarComponent />

    <!-- Main Section -->
    <div class="main-section">
      <div class="profile">
        <img src="./assets/novaslikaprofila.jpg" alt="Profile" class="profile-photo" />
        <h1>Hi, I'm Marko Kučko</h1>
        <p>I'm a professional web developer & course instructor.</p>
        <p>Connect with me through my courses, LinkedIn, or Instagram.</p>
      </div>
      <div class="buttons">
        <button class="btn">
          <!-- SVG for Online Courses -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
          </svg>
          <span>Online Courses</span>
        </button>
          <!-- SVG for LinkedIn Profile -->
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25a3.75 3.75 0 0 1 3.75 3.75v7.5a3.75 3.75 0 0 1-3.75 3.75h-9a3.75 3.75 0 0 1-3.75-3.75v-7.5a3.75 3.75 0 0 1 3.75-3.75h9zM6 8.25v7.5M9 6h6M9 6a3 3 0 0 1-3 3M9 6a3 3 0 0 0-3 3"></path>
          </svg>
          <span>LinkedIn Profile</span>
        </button>
        <!-- SVG for Instagram Profile -->
        <button class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0 1 21 7.5v9a3.75 3.75 0 0 1-3.75 3.75h-9A3.75 3.75 0 0 1 3.75 16.5v-9A3.75 3.75 0 0 1 7.5 3.75zm9 0V3m-9 0v.75m3.75 12a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z"></path>
          </svg>
          <span>Instagram Profile</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* General App Styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Main Section Styling */
.main-section {
  background-color: rgba(0, 0, 0, 0.898);
  color: white;
  width: 100%; /* Full width without causing horizontal overflow */
  min-height: 100vh; /* Full height of the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px; /* Inner spacing */
  box-sizing: border-box; /* Includes padding in width/height calculations */
}

.profile {
  text-align: center;
}

.profile-photo {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  margin: 20px 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.btn {
  background-color: rgba(0, 0, 0, 0); /* Transparent button background */
  color: white; /* White text */
  border: 1px solid white; /* White border */
  padding: 30px;
  width: 150px;
  height: 150px;
  border-radius: 10px; /* Rounded edges */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Space between icon and text */
  cursor: pointer;
  transition: 0.3s;
}

.btn .icon {
  width: 30px;
  height: 30px;
  color: white; /* Set the icon color to white */
}

.btn span {
  font-size: 14px; /* Text size */
  color: white; /* White text */
}

.btn:hover {
  background-color: white; /* White background on hover */
  color: black; /* Black text on hover */
}

.btn:hover .icon {
  color: black; /* Black icon on hover */
}

.btn:hover span {
  color: black; /* Black text on hover */
}
</style>
