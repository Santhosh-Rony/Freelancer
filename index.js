
//menu overlay
  function myFunction() {

    var overlay = document.getElementById("menuOverlay");
    if (overlay.style.width === "100%") {
      overlay.style.width = "0";
    } else {
      overlay.style.width = "100%";
    }

  }

 //close menu
  function closeMenu() {
    document.getElementById("menuOverlay").style.width = "0";
  }



//auto image generator
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("photo");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 3 seconds
  }




//scroll reveal smootheis..
document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('h1, h2, h3, h4, img, .gap');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal');
        // Optionally, you can unobserve the element once it has been revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Adjust as needed
  });

  revealElements.forEach(el => observer.observe(el));
});



  //toggle menu
  function toggleMenu() {
      var menu = document.querySelector('.menu');
      menu.classList.toggle('show');
  }

  /////// auto typing in home page

  var typed = new Typed(".auto-type",{
    strings : ["Developer","Coder","Programmer","Debugger"],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
  });



  // JavaScript for smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


  // JavaScript for smooth scrolling and closing the menu overlay
  document.querySelectorAll('#menuOverlay .menu-content a').forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          document.querySelector('#menuOverlay').style.width = '0'; // Close the menu overlay

          targetElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
      });
  });

  // JavaScript to close the menu overlay when clicking on the close button
  document.querySelector('#menuOverlay .closebtn').addEventListener('click', function() {
      document.querySelector('#menuOverlay').style.width = '0';
  });








  ///////// scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }



  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) { // Adjust 300 to your desired scroll position
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
