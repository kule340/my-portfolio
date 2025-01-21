<template>
  <nav class="navbar">
    <div class="logo-container">
      <router-link to="/" class="home-link">
        <img src="@/assets/novilogo.png" alt="Logo" class="navbar-logo" />
        <h1 class="navbar-name">MK Digital Solutions</h1>
      </router-link>
    </div>
    <ul class="nav-links">
      <li><a href="/about-me">About Me</a></li>
      <li><a href="/courses">Courses</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap'); /* Updated weights */

.navbar {
  background-color: #ffffffdd;
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the nav links */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 17%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo-container {
  position: absolute; /* Position logo independently */
  left: 500px; /* Moves the logo container closer to the center */
  display: flex; /* Use flexbox to align logo and name horizontally */
  align-items: center; /* Align logo and name vertically */
  gap: 15px; /* Add spacing between the logo and the name */
}

.home-link {
  display: flex; /* Ensures the logo and name are treated as a single clickable unit */
  align-items: center;
  gap: 15px;
  text-decoration: none; /* Removes underline on the text */
}

.navbar-logo {
  width: 80px; /* Adjust logo size */
  height: auto;
}

.navbar-name {
  font-family: 'Poppins', sans-serif; /* Modern sans-serif font */
  font-size: 28px; /* Adjusted font size */
  font-weight: 700; /* Bold weight for emphasis */
  color: black; /* Set the font color to black */
  margin: 0; /* Remove default margin */
  letter-spacing: 0.5px; /* Slightly increase spacing for readability */
}

.nav-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 40px; /* Adjust spacing between links */
  justify-content: flex-start; /* Align links horizontally */
  margin-left: 500px; /* Moves the links further to the right */
}

.nav-links a {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #424141;
  font-size: 18px;
  position: relative; /* Ensure the underline is positioned correctly */
  transition: color 0.3s;
}

.nav-links a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px; /* Thickness of the underline */
  background-color: #393939;
  transition: width 0.3s ease; /* Animation for the underline width */
}

/* Hover effect */
.nav-links a:hover {
  color: #393939; /* Slightly darker color on hover */
}

.nav-links a:hover::before {
  width: 100%; /* The underline will expand to 100% when hovered */
}
</style>
