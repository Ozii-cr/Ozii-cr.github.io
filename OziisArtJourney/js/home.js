const never =  document.getElementById('never-ends');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      backToTopButton.style.display = 'block';
      never.classList.add("appear");
    } else {
      backToTopButton.style.display = 'none';
      never.classList.remove("appear");
    }
  }

import getUserCountry from " js-user-country";
 
console.log(getUserCountry().id); // Prints 'CA'
console.log(getUserCountry().name); // Prints 'Canada'
console.log(getUserCountry().timezones);