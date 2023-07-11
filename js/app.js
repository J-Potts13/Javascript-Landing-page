document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
    let activeNavItem = null; // Store the currently active navigation item
  
    // Build the navigation menu dynamically
    sections.forEach((section) => {
      const navItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.textContent = section.getAttribute('data-nav');
      anchor.setAttribute('href', `#${section.id}`);
      navItem.appendChild(anchor);
      navbar.appendChild(navItem);
    });
  
    // Add event listener to the navigation menu
    navbar.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default anchor click behavior
  
      const clickedNavItem = event.target;
      if (clickedNavItem.tagName === 'A') {
        const targetSectionId = clickedNavItem.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
  
        // Remove the active class from the previously active navigation item
        if (activeNavItem) {
          activeNavItem.classList.remove('active');
        }
  
        // Add the active class to the clicked navigation item
        clickedNavItem.classList.add('active');
        activeNavItem = clickedNavItem; // Update the active navigation item
      }
    });
  
    // Add CSS styles to the navigation menu
    navbar.style.background = '#333';
    navbar.style.color = '#fff';
    navbar.style.padding = '10px';
    navbar.style.listStyle = 'none';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'space-between';
  
    const navItems = document.querySelectorAll('nav a');
  
    navItems.forEach((navItem) => {
      navItem.style.color = '#fff';
      navItem.style.fontSize = '20px';
      navItem.style.margin = '0 10px';
      navItem.style.textDecoration = 'none';
      navItem.style.transition = 'color 0.3s';
  
      // Add hover styles for navigation items
      navItem.addEventListener('mouseenter', () => {
        navItem.style.backgroundColor = '#555';
      });
  
      navItem.addEventListener('mouseleave', () => {
        // Check if the current navigation item is not the active one
        if (navItem !== activeNavItem) {
          navItem.style.backgroundColor = 'transparent';
        }
      });
  
      // Add click event listener to the navigation items
      navItem.addEventListener('click', () => {
        // Remove the active class from the previously active navigation item
        if (activeNavItem) {
          activeNavItem.classList.remove('active');
          activeNavItem.style.backgroundColor = 'transparent';
        }
  
        // Add the active class to the clicked navigation item
        navItem.classList.add('active');
        navItem.style.backgroundColor = '#555';
        activeNavItem = navItem; // Update the active navigation item
      });
    });
  
    // Highlight the active section in the viewport using getBoundingClientRect()
    const highlightActiveSection = () => {
      let selectedSectionId = null;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navItem = document.querySelector(`nav a[href="#${section.id}"]`);
  
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Remove the active class from all sections
          sections.forEach((section) => {
            section.classList.remove('your-active-class');
          });
  
          // Add the active class to the current section
          section.classList.add('your-active-class');
  
          // Update the selected section id
          selectedSectionId = section.id;
        }
      });
  
      // Remove the active class from all navigation items
      navItems.forEach((navItem) => {
        navItem.classList.remove('active');
        navItem.style.backgroundColor = 'transparent';
      });
  
      // Add the active class and set the background color to the selected navigation item
      const selectedNavItem = document.querySelector(`nav a[href="#${selectedSectionId}"]`);
      if (selectedNavItem) {
        selectedNavItem.classList.add('active');
        selectedNavItem.style.backgroundColor = '#555';
        activeNavItem = selectedNavItem; // Update the active navigation item
      }
    };
  
    // Call the highlightActiveSection function initially
    highlightActiveSection();
  
    // Call the highlightActiveSection function on scroll
    window.addEventListener('scroll', highlightActiveSection);
  });
  
    
  
  