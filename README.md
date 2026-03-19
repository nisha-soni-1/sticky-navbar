# ⚡ Sticky Navbar Project
 
A beginner-friendly **Sticky Navbar** project built with pure HTML, CSS, and JavaScript.
 
## 🌟 Features
 
- ✅ Navbar transparent on top, white + shadow on scroll
- ✅ Smooth scroll to sections
- ✅ Mobile hamburger menu with animation
- ✅ Active link highlight on scroll
- ✅ Fully responsive design
- ✅ Heavily commented code (great for learning!)
 
## 📁 File Structure
 
```
sticky-navbar/
├── index.html    → Page structure
├── style.css     → All styling + sticky effect
├── script.js     → Scroll detection + mobile menu
└── README.md     → This file
```
 
## 🧠 How Sticky Navbar Works
 
```
User scrolls down 80px
       ↓
JS detects: window.scrollY > 80
       ↓
JS adds "sticky" class to navbar
       ↓
CSS .navbar.sticky applies:
  - White background
  - Box shadow
  - Slightly smaller height
```
 
## 🚀 How to Run
 
1. Clone this repo
2. Open `index.html` in browser
3. That's it! No setup needed.
 
```bash
git clone https://github.com/YOUR-USERNAME/sticky-navbar.git
cd sticky-navbar
# Open index.html in browser
```
 
## 📚 Concepts You'll Learn
 
| Concept | Where |
|---|---|
| `position: fixed` | style.css - Navbar |
| `window.scrollY` | script.js |
| `classList.add/remove/toggle` | script.js |
| CSS Transitions | style.css |
| Responsive Design | style.css - Media Query |
| Mobile Hamburger Menu | HTML + CSS + JS |
 
## 🛠️ Built With
 
- HTML5
- CSS3 (No framework!)
- Vanilla JavaScript (No library!)
 
---
 
Made with ❤️ while learning Web Development
