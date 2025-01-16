<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/logo.jpg" alt="Logo" class="navbar-logo" />
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
.navbar {
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the nav links and logo */
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
  position: absolute; /* Position logo to the left */
  left: 20px; /* Adjust the distance from the left edge */
}

.navbar-logo {
  width: 50px;
  height: auto;
}

.nav-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  justify-content: center; /* Centers the nav items in the middle */
}

.nav-links a {
  text-decoration: none;
  color: #555; /* Applied the desired color */
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #393939; /* Lighter color when hovering */
  }
</style>
