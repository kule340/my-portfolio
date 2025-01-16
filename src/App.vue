<template>
  <div id="app">
    <!-- Navbar -->
    <NavbarComponent />

    <!-- Main Section -->
    <div class="main-section">
      <div class="profile">
        <img src="./assets/slika.jpeg" alt="Profile" class="profile-photo" />
        <h1>Hi, I'm Marko Kučko</h1>
        <p>I'm a professional web developer & course instructor.</p>
        <p>Connect with me through my courses, LinkedIn, or Instagram.</p>
      </div>
      <div class="buttons">
        <button class="btn">Online Courses</button>
        <button class="btn">LinkedIn Profile</button>
        <button class="btn">Instagram Profile</button>
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
  background-color: black;
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
  width: 120px;
  height: 120px;
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
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #f0f0f0;
}
</style>
