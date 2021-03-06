// ********************
// INIT GLOBAL VARIABLE
// ********************
var lightTheme = true // default theme is light
var themeToggle = document.querySelector("#flexSwitchCheckDefault");
var roleDropdownToggle = document.querySelectorAll('.role-dropdown');

// Bootstrap
var resumeModal = document.getElementById('resumeModal');
var resumeViewer = document.getElementById('resumeViewer')


// *******************
// ADD EVENT LISTENERS
//********************
themeToggle.addEventListener("click", function() {
    // swap between light-mode and dark-mode depending on current state
    if (lightTheme) {
        document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(0deg, #4d6680, #252525');
        document.documentElement.style.setProperty('--main-color-1', '#252525');
        document.documentElement.style.setProperty('--main-color-2', '#282828');
        document.documentElement.style.setProperty('--main-color-3', '#3d3d3d');
        document.documentElement.style.setProperty('--text-color-1', '#e8e8e8');
        document.documentElement.style.setProperty('--text-color-2', '#dedede');
        document.documentElement.style.setProperty('--main-blue', '#4d6680');
        lightTheme = false;
    } else {
        document.documentElement.style.setProperty('--header-gradient', 'linear-gradient(0deg, #96c8fa, #e8e8e8)');
        document.documentElement.style.setProperty('--main-color-1', '#e8e8e8');
        document.documentElement.style.setProperty('--main-color-2', '#dedede');
        document.documentElement.style.setProperty('--main-color-3', '#f0f0f0');
        document.documentElement.style.setProperty('--text-color-1', '#252525');
        document.documentElement.style.setProperty('--text-color-2', '#3b3b3b');
        document.documentElement.style.setProperty('--main-blue', '#96c8fa');
        lightTheme = true;
    }
});

for (let i=0; i<roleDropdownToggle.length; i++) {
    const btn = roleDropdownToggle[i]
    btn.addEventListener('click', function() {
        // HANDLE IF BUTTON IS CLICKED DIRECTLY
        if (!btn.children[0].classList.contains('open')) {
            // add open class to icon if not present
            btn.children[0].classList.add('open');
        } else if (btn.children[0].classList.contains('open')) {
            // remove open class from icon if present
            btn.children[0].classList.remove('open');
        };  
    });
};

// Bootstrap
resumeModal.addEventListener('shown.bs.modal', function () {
  resumeViewer.focus()
})