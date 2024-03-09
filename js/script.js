// Add some interactivity to the website
document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('toggle-img').src="images/Moon_fill.svg";
        document.getElementById('logo').src="images/logo.svg";

    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
        document.getElementById('toggle-img').src="images/Sun_fill.svg";
        document.getElementById('logo').src="images/logo.svg";
        document.getElementById('logo').src="images/logo-dark.svg";


    }
})