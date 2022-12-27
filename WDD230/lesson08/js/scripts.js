const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

function openSection(event, sectionName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sectionName");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" highlightTab", "");
    }
    document.getElementById(sectionName).style.display = "block";
    event.currentTarget.className += " highlightTab";
  }

  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
