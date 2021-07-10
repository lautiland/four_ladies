new Splide( '.splide', {
	type     : 'loop',
	autoWidth: true,
	focus    : 'center',
} ).mount();

const dropdownButton = document.querySelector('.nav-menu-button');
const dropdownToggle = document.querySelector('.mobile-menu');

dropdownButton.addEventListener('click', e => {
    dropdownToggle.style.display = "display:block";
    
    
})
