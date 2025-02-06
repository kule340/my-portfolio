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

    <!-- Timeline -->
    <div class="timeline">
      <div class="line"></div>
      <div v-for="(job, index) in jobs" :key="index" class="timeline-item">
        <div class="dot"></div>
        <div class="job-info">
          <h3>{{ job.title }}</h3>
          <h4>{{ job.company }} ({{ job.date }})</h4>
          <p>{{ job.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMePage",
  data() {
    return {
      jobs: [
        {
          title: "IT Analyst",
          company: "M2PAY",
          date: "Sep 2023 - Present",
          description: "Developing front-end applications, software testing, and API integration. Acting as a connection between technical and non-technical stakeholders."
        },
        {
          title: "Frontend Developer",
          company: "Digital Assembly",
          date: "Jun 2023 - Sep 2023",
          description: "Developed responsive web applications with Vue.js, optimized performance, and collaborated with designers and back-end developers."
        },
        {
          title: "IT Help Desk Technician",
          company: "AKD d.o.o.",
          date: "Jan 2023 - Jun 2023",
          description: "Provided technical support, resolved software and network issues, configured systems, and ensured smooth IT operations."
        }
      ]
    };
  }
};
</script>

<style scoped>
.about-me {
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.898);
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 10px;
}

.about-icon {
  fill: #FFBF00;
  width: 50px;
  height: 50px;
}

h2 {
  font-size: 32px;
  color: #ffffff;
}

.description p {
  font-size: 18px;
  color: #dddddd;
  text-align: center;
}

.timeline {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 40px;
}

.line {
  position: absolute;
  left: 62px; /* Adjust this if needed */
  top: 0;
  width: 2px;
  height: 100%;
  background: white;
  z-index: 1; /* Ensure it's behind the dots */
}

.dot {
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 16px; /* Adjust to center the dot on the line */
  z-index: 2;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
}
.job-info {
  color: white;
  max-width: 600px;
  margin-left: 40px;
}

.job-info h3 {
  font-size: 22px;
  margin: 0;
}

.job-info h4 {
  font-size: 18px;
  margin: 5px 0;
  color: #ffbf00;
}

.job-info p {
  font-size: 16px;
  color: gray;
  line-height: 1.5;
}
</style>
