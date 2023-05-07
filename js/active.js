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