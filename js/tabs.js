function openSong(evt, songName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(songName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





  /*
    // Get the active song from p2.js
 function activeSong() {
  $('.player__author').text($('.active-song').attr('data-author'));
  $('.player__song').text($('.active-song').attr('data-song'));; // the function that gets the active song
  }
  // Loop through all the tabs in the HTML
  var tabs = document.querySelectorAll('.tabcontent');
  tabs.forEach(function (tab) {

  // Get the data-src attribute of the tab
  var tabSrc = tab.getAttribute('data-src');

  // If the tab's data-src attribute matches the active song, add the active class to the tab
  if (tabSrc === activeSong) {
      tab.classList.add('active');
  } else {
      // Otherwise, remove the active class from the tab
      tab.classList.remove('active');
  }
  })

  */
