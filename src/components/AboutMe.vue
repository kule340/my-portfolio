<template>
  <div class="about-me">
    <!-- Title with Icon -->
    <div class="title-with-icon">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="about-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="M224 256a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm-90.9 32C59.7 288 0 347.7 0 419.1V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-44.9c0-71.4-59.7-131.1-133.1-131.1H133.1z"></path>
      </svg>
      <h2>About Me</h2>
    </div>

    <!-- Short Description -->
    <div class="description">
      <p>Welcome! Here’s a little bit about me and my journey.</p>
    </div>

    <!-- About Me Content -->
    <div class="about-container">
      <div class="image-container">
        <img src="@/assets/original.jpeg" alt="Profile Image" class="profile-image" />
      </div>
      <div class="about-info">
        <h2>Who Am I?</h2>
        <p>
          I am a passionate developer with experience in frontend and backend technologies.
          My expertise lies in building scalable applications and learning new technologies.
        </p>
        <p>
          I specialize in Vue.js, JavaScript, DevOps, and Cybersecurity. 
          My goal is to create user-friendly applications that solve real-world problems.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMePage",
};
</script>

<style scoped>
/* About Me Page */
.about-me {
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.898);
}

/* Title with Icon */
.title-with-icon {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 125px;
}

/* Icon Styling */
.about-icon {
  fill: #FFBF00;
  width: 50px;
  height: 50px;
}

/* Title Styling */
h2 {
  font-size: 32px;
  color: #ffffff;
  margin: 0;
}

/* Description */
.description {
  text-align: center;
  margin-top: 10px;
}

.description p {
  font-size: 18px;
  color: #dddddd;
  max-width: 600px;
}

/* About Me Container */
.about-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

/* Image Styling */
.image-container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* About Me Info */
.about-info {
  max-width: 600px;
  color: white;
}

.about-info h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.about-info p {
  font-size: 16px;
  color: gray;
  line-height: 1.5;
}
</style>
