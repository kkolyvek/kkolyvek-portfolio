// ********************
// INIT GLOBAL VARIABLE
// ********************
var lightTheme = true // default theme is light
var themeToggle = document.querySelector("#flexSwitchCheckDefault");

// Bootstrap
var resumeModal = document.getElementById('resumeModal');
var resumeViewer = document.getElementById('resumeViewer')


// *******************
// ADD EVENT LISTENERS
//********************
themeToggle.addEventListener("click", function() {
    // swap between light-mode and dark-mode depending on current state
    if (lightTheme) {
        document.documentElement.style.setProperty('--main-color-1', 'salmon');
        lightTheme = false;
    } else {
        document.documentElement.style.setProperty('--main-color-1', 'rgb(232, 232, 232');
        lightTheme = true;
    }
});

// Bootstrap
resumeModal.addEventListener('shown.bs.modal', function () {
  resumeViewer.focus()
})