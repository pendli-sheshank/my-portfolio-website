# 🌐 Sheshank Pendli — Portfolio Website

Personal portfolio for **Sheshank Pendli**, Java Full Stack Developer & Spring Boot/Microservices Specialist with 5+ years of experience in Fintech and E-commerce.

🔗 **Live:** [sheshank.info](https://sheshank.info)  
💼 **LinkedIn:** [linkedin.com/in/psheshank](https://linkedin.com/in/psheshank)  
🐙 **GitHub:** [github.com/pendli-sheshank](https://github.com/pendli-sheshank)

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with real stats: 5+ yrs, 65K events/day, 12 microservices, 100% audit ready |
| **About** | Timeline of Centene + Accenture experience, full skills breakdown, certifications |
| **Projects** | 6 real engineering projects with tech stacks and highlights, AI recommendations |
| **Resume** | Interactive resume — paste a JD to highlight matching skills |
| **Contact** | Contact form (Formspree) + email, phone, LinkedIn, GitHub |

---

## 🚀 Getting Started

```bash
git clone https://github.com/pendli-sheshank/my-portfolio-website.git
cd my-portfolio-website
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

```bash
npm run build
```

Auto-deploys to [sheshank.info](https://sheshank.info) via GitHub Pages (CNAME configured).

---

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with SmartSearch
│   ├── HomePage.jsx       # Hero, stats, tech badges
│   ├── AboutPage.jsx      # Bio, timeline, skills, certifications
│   ├── ProjectsPage.jsx   # 6 projects + AI recommendations
│   ├── ResumePage.jsx     # JD matching interactive resume
│   ├── ContactPage.jsx    # Contact info + form
│   ├── ContactForm.jsx    # Formspree-powered form
│   ├── ProjectCard.jsx    # Reusable project card
│   ├── AIAssistant.jsx    # Contextual tips popup
│   └── SmartSearch.jsx    # Navbar search with routing
├── context/
│   └── AIContext.js       # AI recommendations & search state
├── styles/
│   ├── ContactPage.css
│   └── ContactForm.css
└── index.css
```
