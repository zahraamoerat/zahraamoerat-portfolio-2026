<template>
  <div class="portfolio-container">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="nav-brand">
        <span class="brand-box">Z</span>
        <span class="brand-name">Zahraa Moerat</span>
      </div>
      <nav class="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#quests">QUESTS</a>
        <a href="#contact" class="nav-contact-btn">CONTACT</a>
      </nav>
    </header>

    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="badge player-badge">
          <span># PLAYER 1: AVAILABLE FOR HIRE</span>
        </div>
        <h1 class="hero-title">
          Zahraa<br />
          <span class="highlight-pink">Moerat</span>
        </h1>
        <p class="hero-subtitle">
          Building <strong>scalable web applications</strong> from concept to
          deployment. Specializing in high-performance digital experiences.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-pink">CONNECT &rarr;</a>
          <a href="#projects" class="btn btn-outline">VIEW PROJECTS &rarr;</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="retro-card profile-card">
          <div class="avatar-container">
            <img
              src="../assets/images/portfolio-profile-pic.jpg"
              alt="Zahraa Moerat"
            />
          </div>
          <div class="profile-lvl-badge">
            <span class="lvl-icon">🛠️</span>
            <div class="lvl-text">
              <small>LVL 99</small>
              <span>Full-Stack Dev</span>
            </div>
          </div>
          <div class="rocket-icon">🚀</div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="about-section">
      <div class="about-grid">
        <div class="retro-card image-retro-card">
          <img src="../assets/images/about-picture.jpg" alt="Workspace" />
        </div>
        <div class="about-text-content">
          <span class="section-tag">QUEST: PROFESSIONAL OVERVIEW</span>
          <h2 class="section-title">
            Creating digital solutions with a
            <span class="highlight-green">full-stack focus.</span>
          </h2>
          <p class="section-desc">
            I am a dedicated developer focused on building robust, maintainable,
            and user-centric web applications. My approach combines technical
            excellence with strategic design thinking to deliver solutions that
            scale.
          </p>
          <div class="feature-boxes-row">
            <div class="feature-mini-card">
              <span class="mini-icon">💻</span>
              <h4>SCALABLE APPS</h4>
              <p>Architecting platforms that grow.</p>
            </div>
            <div class="feature-mini-card">
              <span class="mini-icon">&lt;/&gt;</span>
              <h4>TECH FOCUS</h4>
              <p>Modern stack mastery.</p>
            </div>
            <div class="feature-mini-card">
              <span class="mini-icon">🚀</span>
              <h4>END-TO-END</h4>
              <p>Concept to deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="skills-section">
      <div class="section-header-centered">
        <span class="badge pink-badge">POWER-UPS & BUFFS</span>
        <h2 class="retro-heading">Core Technical Skills</h2>
      </div>
      <div class="skills-grid">
        <!-- Frontend -->
        <div class="retro-card skill-card">
          <div class="skill-card-header">
            <span>💻</span>
            <h3>FRONTEND</h3>
          </div>
          <ul class="skill-list">
            <li>Vue.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <!-- Backend -->
        <div class="retro-card skill-card">
          <div class="skill-card-header">
            <span>🗄️</span>
            <h3>BACKEND AND DATABASES</h3>
          </div>
          <ul class="skill-list">
            <li>Node.js</li>
            <li>MySQL</li>
            <li>PHP</li>
          </ul>
        </div>
        <!-- Design -->
        <div class="retro-card skill-card">
          <div class="skill-card-header">
            <span>🎨</span>
            <h3>DESIGN</h3>
          </div>
          <ul class="skill-list">
            <li>Figma (UI/UX)</li>
            <li>Responsive Design</li>
            <li>Wasmer</li>
          </ul>
        </div>
        <!-- Developer Tools -->
        <div class="retro-card skill-card">
          <div class="skill-card-header">
            <span>🛠️</span>
            <h3>DEVELOPER TOOLS</h3>
          </div>
          <ul class="skill-list">
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="projects-section">
      <div class="projects-title-wrap">
        <span class="sub-tag green-text">SELECT YOUR LEVEL</span>
        <h2 class="retro-heading">Featured Projects</h2>
        <p class="section-subdesc">
          A selection of high-impact web applications built with performance and
          user experience at the core.
        </p>
      </div>

      <!-- Main Featured Project -->
      <div class="retro-card main-project-card">
        <div class="project-preview">
          <img
            src="../assets/images/moderntech-desktop.jpg"
            alt="ModernTech Solutions Dashboard"
          />
        </div>
        <div class="project-details">
          <div class="tag-row">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">MySql</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">JavaScript</span>
          </div>
          <h3 class="project-title">ModernTech Solutions Dashboard</h3>
          <p class="project-desc">
            A comprehensive HR platform with real-time data visualization and
            secure password encryption.
          </p>
          <div class="project-links">
            <a
              href="https://hr-project-2-moderntech-solutions-1.onrender.com"
              class="project-link-item"
              >🔗 Live Demo</a
            >
            <a
              href="https://github.com/ihtishaamj63-web/HR-Project-2-ModernTech-Solutions.git"
              class="project-link-item"
              >🐙 GitHub</a
            >
          </div>
        </div>
      </div>

      <div class="retro-card main-project-card">
        <div class="project-preview">
          <img src="../assets/images/weconnect.jpg" alt="WeConnect Dashboard" />
        </div>
        <div class="project-details">
          <div class="tag-row">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">MySQL</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">JavaScript</span>
          </div>
          <h3 class="project-title">WeConnect Dashboard</h3>
          <p class="project-desc">
            A comprehensive Business-to-Business platform with real-time data
            visualization.
          </p>
          <div class="project-links">
            <a
              href="https://weconnect-bir9.onrender.com/landing"
              class="project-link-item"
              >🔗 Live Demo</a
            >
            <a
              href="https://github.com/zahraamoerat/Project-3-E-Commerce1.git"
              class="project-link-item"
              >🐙 GitHub</a
            >
          </div>
        </div>
      </div>

      <!-- Secondary Projects Grid -->
      <div class="secondary-projects-grid">
        <div
          class="retro-card sub-project-card"
          v-for="project in secondaryProjects"
          :key="project.title"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="sub-project-img"
          />
          <div class="sub-project-info">
            <h4>{{ project.title }}</h4>
            <p>{{ project.desc }}</p>
            <a
              :href="project.url"
              class="case-study-link"
              target="_blank"
              rel="noopener noreferrer"
              >VIEW PROJECT &rarr;</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS SECTION -->
    <section id="quests" class="certs-section">
      <div class="section-header-centered">
        <h2 class="retro-heading">Certified Excellence</h2>
        <p class="section-subdesc">
          Continuous learning and professional growth across key domains.
        </p>
      </div>
      <div class="certs-grid">
        <div class="retro-card cert-card">
          <div class="cert-icon green-icon">🎓</div>
          <h3>Life Choices Academy</h3>
          <p>FullStack Software Development</p>
          <span class="cert-badge green-bg">VERIFIED</span>
        </div>
        <div class="retro-card cert-card">
          <div class="cert-icon pink-icon">🛡️</div>
          <h3>Cybersecurity</h3>
          <p>Introduction to Cybersecurity</p>
          <span class="cert-badge pink-bg">CISCO CERTIFIED</span>
        </div>
        <div class="retro-card cert-card">
          <div class="cert-icon dark-icon">📊</div>
          <h3>Data Science</h3>
          <p>Introduction to Data Science</p>
          <span class="cert-badge dark-bg">CISCO CERTIFIED</span>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact-section">
      <div class="contact-grid">
        <div class="contact-left">
          <h2 class="retro-heading large-heading">
            Let's build<br />
            <span class="highlight-green">something<br />remarkable</span>
          </h2>
          <p class="contact-desc">
            Currently available for freelance projects and full-time
            opportunities. Drop a message to start a conversation.
          </p>

          <div class="contact-info-list">
            <div class="contact-info-item">
              <span class="icon-box green-bg">💌</span>
              <div>
                <small>EMAIL ME</small>
                <p>zahraamoerat70@gmail.com</p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="icon-box pink-bg">💼</span>
              <div>
                <small>LINKEDIN</small>
                <p>Zahraa Moerat</p>
              </div>
            </div>
          </div>
        </div>

        <div class="retro-card form-card">
          <form action="https://formspree.io/f/xvkkkkjv" method="POST">
            <div class="form-row">
              <div class="form-group">
                <label>FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label>PROJECT DETAILS</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-green-full">
              SEND MESSAGE 💌
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>
        &copy; 2026 Zahraa Moerat. All Rights Reserved. Built with precision.
      </p>
      <div class="social-icons">
        <a href="https://github.com/zahraamoerat">GitHub</a>
        <a href="https://www.linkedin.com/in/zahraa-moerat-0b17a2218"
          >LinkedIn</a
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import blushingBrushImage from "../assets/images/theblushingbrush.jpg";
import imageGalleryImage from "../assets/images/gallery.jpg";
import dripTheoryImage from "../assets/images/driptheory.jpg";

const secondaryProjects = [
  {
    title: "The Blushing Brush",
    desc: "A website made using HTML and CSS",
    image: blushingBrushImage,
    url: "https://the-blushing-brush.netlify.app/",
  },
  {
    title: "Image Gallery",
    desc: "A responsive Gallery",
    image: imageGalleryImage,
    url: "https://my-gallery-of-images.netlify.app/",
  },
  {
    title: "Drip Theory",
    desc: "A boostrap store CSS project",
    image: dripTheoryImage,
    url: "https://drip-theory.netlify.app/",
  },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Press+Start+2P&display=swap");

:root {
  --bg-color: #f7f9f6;
  --card-bg: #ffffff;
  --border-color: #1a1a1a;
  --green-accent: #00b074;
  --pink-accent: #ff6b8b;
  --dark-color: #1a1a1a;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a,
button {
  transition: filter 150ms ease;
}

a:hover,
button:hover {
  filter: brightness(0.8);
}

body {
  background-color: var(--bg-color);
  color: var(--dark-color);
  font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
.retro-heading,
.brand-name {
  font-family: "Press Start 2P", monospace;
}

.portfolio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* RETRO CARD STYLE */
.retro-card {
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  box-shadow: 4px 4px 0px var(--border-color);
  padding: 24px;
  position: relative;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border: 2px solid var(--border-color);
  box-shadow: 4px 4px 0px var(--border-color);
  background: white;
  margin-bottom: 60px;
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-box {
  background: var(--dark-color);
  color: white;
  padding: 6px 12px;
  font-family: "Press Start 2P";
  font-size: 14px;
}
.brand-name {
  font-size: 12px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links a {
  text-decoration: none;
  color: var(--dark-color);
  font-size: 12px;
  font-weight: 600;
}
.nav-contact-btn {
  border: 2px solid var(--border-color);
  padding: 8px 16px;
  background: var(--green-accent);
  color: white !important;
  box-shadow: 2px 2px 0px var(--border-color);
}

/* HERO SECTION */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 80px;
}
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 10px;
  font-family: "Press Start 2P";
  border: 2px solid var(--border-color);
  margin-bottom: 20px;
  box-shadow: 2px 2px 0px var(--border-color);
}
.player-badge {
  background: #d4edda;
  color: #155724;
}
.pink-badge {
  background: #f8d7da;
  color: #721c24;
}

.hero-title {
  font-size: 32px;
  line-height: 1.4;
  margin-bottom: 20px;
}
.highlight-pink {
  color: var(--pink-accent);
}
.highlight-green {
  color: var(--green-accent);
}

.hero-subtitle {
  font-size: 15px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
}
.hero-actions {
  display: flex;
  gap: 16px;
}
.btn {
  font-family: "Press Start 2P";
  font-size: 10px;
  padding: 12px 20px;
  text-decoration: none;
  border: 2px solid var(--border-color);
  box-shadow: 3px 3px 0px var(--border-color);
  cursor: pointer;
}
.btn-pink {
  background: var(--pink-accent);
  color: white;
}
.btn-outline {
  background: white;
  color: var(--dark-color);
}

.profile-card {
  padding: 12px;
  background: #e8f5e9;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.avatar-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: 2px solid var(--border-color);
}
.profile-lvl-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: white;
  border: 2px solid var(--border-color);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.rocket-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  border: 2px solid var(--border-color);
  padding: 6px;
}

/* ABOUT SECTION */
.about-section {
  margin-bottom: 80px;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.image-retro-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border: 2px solid var(--border-color);
}
.section-tag {
  font-family: "Press Start 2P";
  font-size: 9px;
  color: var(--pink-accent);
  display: block;
  margin-bottom: 12px;
}
.section-title {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.section-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 24px;
}
.feature-boxes-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.feature-mini-card {
  border: 2px solid var(--border-color);
  padding: 12px;
  background: white;
  box-shadow: 2px 2px 0px var(--border-color);
}
.feature-mini-card h4 {
  font-size: 8px;
  margin: 6px 0;
}
.feature-mini-card p {
  font-size: 10px;
  color: #666;
}

/* SKILLS SECTION */
.skills-section {
  margin-bottom: 80px;
}
.section-header-centered {
  text-align: center;
  margin-bottom: 40px;
}
.retro-heading {
  font-size: 22px;
  margin-top: 10px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.skill-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.skill-card-header h3 {
  font-size: 12px;
}
.skill-list {
  list-style: square;
  padding-left: 20px;
  margin: 0;
}
.skill-list li {
  padding: 8px 0;
  font-size: 12px;
  font-weight: 600;
}
.skill-list li::marker {
  color: var(--green-accent);
}

/* PROJECTS SECTION */
.projects-section {
  margin-bottom: 80px;
}
.projects-title-wrap {
  margin-bottom: 30px;
}
.sub-tag {
  font-family: "Press Start 2P";
  font-size: 10px;
}
.section-subdesc {
  font-size: 13px;
  color: #666;
  margin-top: 8px;
}

.main-project-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
  align-items: center;
}
.project-preview img {
  width: 100%;
  border: 2px solid var(--border-color);
}
.tag-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.tech-tag {
  font-family: "Press Start 2P";
  font-size: 8px;
  background: #eee;
  padding: 4px 8px;
  border: 1px solid var(--border-color);
}
.project-title {
  font-size: 16px;
  margin-bottom: 12px;
}
.project-desc {
  font-size: 13px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}
.project-links {
  display: flex;
  gap: 20px;
}
.project-link-item {
  font-size: 12px;
  font-weight: bold;
  color: var(--dark-color);
  text-decoration: none;
}

.secondary-projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.sub-project-card {
  padding: 16px;
}
.sub-project-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border: 2px solid var(--border-color);
  margin-bottom: 12px;
}
.sub-project-info h4 {
  font-size: 12px;
  margin-bottom: 6px;
}
.sub-project-info p {
  font-size: 11px;
  color: #666;
  margin-bottom: 12px;
}
.case-study-link {
  font-family: "Press Start 2P";
  font-size: 8px;
  color: var(--green-accent);
  text-decoration: none;
}

/* CERTIFICATIONS */
.certs-section {
  margin-bottom: 80px;
}
.certs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.cert-card {
  text-align: center;
  padding: 30px 20px;
}
.cert-icon {
  width: 50px;
  height: 50px;
  border: 2px solid var(--border-color);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.green-icon {
  background: #d4edda;
}
.pink-icon {
  background: #f8d7da;
}
.dark-icon {
  background: #e2e3e5;
}
.cert-card h3 {
  font-size: 12px;
  margin-bottom: 6px;
}
.cert-card p {
  font-size: 11px;
  color: #666;
  margin-bottom: 16px;
}
.cert-badge {
  font-family: "Press Start 2P";
  font-size: 8px;
  padding: 6px 12px;
  border: 2px solid var(--border-color);
  display: inline-block;
}
.green-bg {
  background: #d4edda;
  color: #155724;
}
.pink-bg {
  background: #f8d7da;
  color: #721c24;
}
.dark-bg {
  background: var(--dark-color);
  color: white;
}

/* CONTACT */
.contact-section {
  margin-bottom: 60px;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}
.large-heading {
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 20px;
}
.contact-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 30px;
}
.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-info-item {
  display: flex;
  align-items: center;
  gap: 16px;
}
.icon-box {
  width: 40px;
  height: 40px;
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.contact-info-item small {
  font-size: 9px;
  font-family: "Press Start 2P";
  color: #777;
}
.contact-info-item p {
  font-size: 13px;
  font-weight: bold;
}

.form-card {
  background: white;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  font-family: "Press Start 2P";
  font-size: 8px;
  margin-bottom: 6px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid var(--border-color);
  font-family: "Inter", sans-serif;
  font-size: 13px;
  background: #fff;
}
.btn-green-full {
  width: 100%;
  background: var(--green-accent);
  color: white;
  padding: 14px;
  margin-top: 10px;
}

/* FOOTER */
.footer {
  border-top: 2px solid var(--border-color);
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
}
.social-icons {
  display: flex;
  gap: 20px;
}
.social-icons a {
  color: var(--dark-color);
  font-weight: bold;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-section,
  .about-grid,
  .skills-grid,
  .main-project-card,
  .secondary-projects-grid,
  .certs-grid,
  .contact-grid,
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
