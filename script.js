document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("home-link");
    var contactLink = document.getElementById("contact-link");
    var infoLink = document.getElementById("info-link");
    var guideLink = document.getElementById("guide-link");
    var contentArea = document.getElementById("content-area");
  
    function showHomeContent() {
      contentArea.innerHTML = `
        <h2>Home</h2>
        <p>Welcome to our website!</p>
        <p>We provide top-quality products and services to meet all your needs.</p>
        <p>Explore our website to learn more about what we offer.</p>
        <h3>Featured Products</h3>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      `;
    }
  
    function showContactContent() {
      contentArea.innerHTML = `
        <h2>Contact</h2>
        <p>If you have any questions or need assistance, please don't hesitate to reach out to us.</p>
        <h3>Contact Information</h3>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Street, City, Country</li>
        </ul>
      `;
    }
  
    function showInfoContent() {
      contentArea.innerHTML = `
        <h2>Information</h2>
        <p>Here, you'll find additional information about our services and offerings.</p>
        <h3>Our Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
        <h3>Our Offerings</h3>
        <ul>
          <li>Offering 1</li>
          <li>Offering 2</li>
          <li>Offering 3</li>
        </ul>
      `;
    }
  
    function showGuideContent() {
      contentArea.innerHTML = `
        <h2>Guide</h2>
        <p>Welcome to the guide section.</p>
        <p>Here, you'll find step-by-step instructions and tips to help you make the most of our products.</p>
        <h3>Getting Started</h3>
        <ol>
          <li>Step 1: Do this.</li>
          <li>Step 2: Do that.</li>
          <li>Step 3: Complete the process.</li>
        </ol>
      `;
    }
  
    function setActiveLink(link) {
      var links = [homeLink, contactLink, infoLink, guideLink];
      links.forEach(function(element) {
        element.classList.remove("active");
      });
      link.classList.add("active");
    }
  
    homeLink.addEventListener("click", function() {
      showHomeContent();
      setActiveLink(homeLink);
    });
  
    contactLink.addEventListener("click", function() {
      showContactContent();
      setActiveLink(contactLink);
    });
  
    infoLink.addEventListener("click", function() {
      showInfoContent();
      setActiveLink(infoLink);
    });
  
    guideLink.addEventListener("click", function() {
      showGuideContent();
      setActiveLink(guideLink);
    });
  
    // Show initial content
    showHomeContent();
    setActiveLink(homeLink);
  });
  