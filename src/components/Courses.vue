<template>
  <div class="courses">
    <!-- Content section -->
    <div class="content-section">
      <!-- Title with Icon -->
      <div class="title-with-icon">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="course-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"></path>
        </svg>
        <h2>Explore all Courses</h2>
      </div>
      <!-- Description Below -->
      <div class="description">
        <p>Browse our extremely comprehensive course collection to find exactly the right course for you.</p>
      </div>
    </div>

    <!-- Search and filter section -->
    <div class="search-filter-container">
      <input type="text" v-model="searchQuery" class="search-bar" placeholder="Search courses..." />
      <select v-model="categoryFilter" class="category-dropdown">
        <option value="">Select Category</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="Databases">Databases</option>
        <option value="DevOps">DevOps</option>
        <option value="Cybersecurity">Cybersecurity</option>
      </select>
    </div>

    <!-- Courses list -->
    <div class="courses-container">
      <template v-if="filteredCourses.length > 0">
        <div class="course-card" v-for="course in filteredCourses" :key="course.id">
          <div class="image-container">
            <img :src="course.image" :alt="course.title" class="course-image" />
          </div>
          <div class="course-info">
            <h2 class="course-title">{{ course.title }}</h2>
            <p class="course-description">{{ course.description }}</p>
            <button class="enroll-button" @click="goToUdemy">Enroll Now</button>
          </div>
        </div>
      </template>
      <p v-else class="no-courses-message">No available courses in this category.</p>
    </div>
  </div>
</template>


<script>
import angImage from '@/assets/angularica.png';
import javascriptImage from '@/assets/javascripta.png';
import pythonImage from '@/assets/python.jpeg';
import cyberPhoto from '@/assets/cybersec.jpg';
import nmapPhoto from '@/assets/nmap.png';
import reactNativePhoto from '@/assets/react_native.png';
import sqlPhoto from '@/assets/sql2.jpg';
import devopsPhoto from '@/assets/devops.jpeg';
import kubernetesPhoto from '@/assets/kubernetes.png';

export default {
  name: 'CoursesPage',
  data() {
  return {
    searchQuery: '',
    categoryFilter: '',
    courses: [
      {
        id: 1,
        title: 'Web Development Bootcamp',
        description: 'Learn HTML, CSS, JavaScript, and more!',
        category: 'Frontend',
        image: angImage
      },
      {
        id: 2,
        title: 'Javascript Mastery',
        description: 'Become proficient in Javascript programming language.',
        category: 'Frontend',
        image: javascriptImage
      },
      {
        id: 3,
        title: 'Python for Data Science',
        description: 'Master Python for data analysis and machine learning.',
        category: 'Data Analytics',
        image: pythonImage
      },
      {
        id: 4,
        title: 'Cybersecurity Essentials',
        description: 'Learn the fundamentals of cybersecurity, ethical hacking, and network security.',
        category: 'Cybersecurity',
        image: cyberPhoto
      },
      {
        id: 5,
        title: 'Nmap Network Scanning',
        description: 'Master Nmap for network scanning, reconnaissance, and security auditing.',
        category: 'Cybersecurity',
        image: nmapPhoto
      },
      {
        id: 6,
        title: 'Mobile App Development with React Native',
        description: 'Learn how to build cross-platform mobile apps using React Native.',
        category: 'Mobile Development',
        image: reactNativePhoto
      },
      {
        id: 7,
        title: 'Mastering SQL Databases',
        description: 'Learn how to design, manage, and query relational databases using SQL.',
        category: 'Databases',
        image: sqlPhoto
      },
      {
        id: 8,
        title: 'Introduction to DevOps',
        description: 'Learn the key principles of DevOps, CI/CD, and automation.',
        category: 'DevOps',
        image: devopsPhoto
      },
      {
        id: 9,
        title: 'Kubernetes for Beginners',
        description: 'Get hands-on experience with Kubernetes for containerized applications.',
        category: 'DevOps',
        image: kubernetesPhoto
      }
    ]
  };
},
  computed: {
    filteredCourses() {
      return this.courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || course.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.categoryFilter ? course.category === this.categoryFilter : true;
        return matchesSearch && matchesCategory;
      });
    }
  },
  methods:{
    goToUdemy() {
    window.open('https://www.udemy.com/user/marko-kucko/', '_blank');
  }
  },
};
</script>

<style scoped>
/* Main Courses Section */
.courses {
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.898);
}

/* Title with Icon (SVG & Heading in One Row) */
.title-with-icon {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and text */
  margin-left: 125px;
}

/* Icon Styling */
.course-icon {
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

/* Description Section */
.description {
  text-align: center;
  margin-top: 10px;
}

.course-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.description p {
  font-size: 18px;
  color: #dddddd;
  max-width: 600px; /* Keeps text readable */
}

/* Search & Filter Container */
.search-filter-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

/* Search Bar */
.search-bar {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Category Dropdown */
.category-dropdown {
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

/* Courses Container */
.courses-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

/* Course Card Styling */
.course-card {
  background: black;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 380px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 380px;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensures no white space around the edges */
}

.image-container {
  width: 100%;
  height: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  background-color: black;
}

.course-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Course Title */
.course-title {
  font-size: 22px;
  margin: 10px 0 5px;
  font-weight: bold;
}

/* Course Description */
.course-description {
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
}

.no-courses-message {
  font-size: 18px;
  color: #ffffff;
  margin-top: 20px;
  text-align: center;
}

/* Enroll Button */
.enroll-button {
  background-color: #393939;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.enroll-button:hover {
  background-color: #555;
}

.course-info {
  padding: 15px;
  flex: 1; /* Takes up the remaining space */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
