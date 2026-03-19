/* =====================================================
   STICKY NAVBAR PROJECT - script.js
   
   Is file mein 2 main features hain:
   
   1. STICKY NAVBAR
      - User scroll karta hai
      - Agar scroll 80px se zyada ho → "sticky" class add karo
      - Agar scroll 80px se kam ho → "sticky" class hatao
   
   2. MOBILE HAMBURGER MENU
      - Hamburger click karo → menu open/close
      - Menu ke bahar click karo → menu band
      - Kisi bhi link click karo → menu band
===================================================== */



// STEP 1: DOM ELEMENTS PAKDO
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');



//  STEP 2: STICKY NAVBAR LOGIC
window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
        navbar.classList.add('sticky');
    } else {
        // 80px se kam scroll → sticky class hatao
        // Navbar transparent ho jaayegi
        navbar.classList.remove('sticky');
    }

});




//  STEP 3: HAMBURGER MENU TOGGLE (Mobile) 
hamburger.addEventListener('click', function () {

    // toggle() = class hai toh hatao, nahi hai toh add karo
    // Ek hi line mein open/close dono kaam
    navLinks.classList.toggle('open');     // Menu slide in/out
    hamburger.classList.toggle('active'); // Hamburger → X animation

});


// STEP 4: NAV LINKS CLICK PE MENU BAND KARO 
const allNavLinks = document.querySelectorAll('.nav-links a');
allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');

    });

});



// STEP 5: OUTSIDE CLICK PE MENU BAND KARO
document.addEventListener('click', function (event) {

    // event.target = jahan click hua
    // .closest() = parent mein .navbar hai ya nahi check karo

    // Agar click navbar ke andar NAHI hua
    const clickedInsideNavbar = event.target.closest('.navbar');

    if (!clickedInsideNavbar) {
        // Menu band karo
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }

});




//   STEP 6: ACTIVE LINK HIGHLIGHT (BONUS FEATURE)
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function () {

    let currentSection = '';

    // Check karo konsa section currently visible hai
    sections.forEach(function (section) {

        // Section ka top position kahan hai
        const sectionTop = section.offsetTop;

        // Navbar ki height (70px) minus karo
        const navbarHeight = navbar.offsetHeight;

        // Agar scroll yahan tak pahuncha hai
        if (window.scrollY >= sectionTop - navbarHeight - 10) {
            // Is section ka id note karo (home, about, skills, contact)
            currentSection = section.getAttribute('id');
        }

    });

    // Sabhi links se 'active' class hatao
    allNavLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Current section ke link pe 'active' class lagao
    const activeLink = document.querySelector(`.nav-links a[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

});


/* =====================================================
   SUMMARY: KAISE KAAM KARTA HAI?
   
   1. User page open karta hai
      → Navbar transparent hoti hai (no .sticky class)
   
   2. User 80px scroll karta hai  
      → JS detects scrollY > 80
      → 'sticky' class add hoti hai
      → CSS: navbar white background + shadow dikhaata hai
   
   3. User upar scroll karta hai (< 80px)
      → 'sticky' class hatt jaati hai
      → Navbar transparent ho jaati hai
   
   4. Mobile pe hamburger click
      → 'open' + 'active' toggle hoti hai
      → Menu slide in/out, button X banta hai
===================================================== */
