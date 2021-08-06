//select element function
const selectElement=function(element){
  return document.querySelector(element);
};

let menuToggler=selectElement('.menu-toggle');
let body=selectElement('body');

menuToggler.addEventListener('click',function(){
  body.classList.toggle('open');
});

//scroll reveal

window.sr = ScrollReveal();
		sr.reveal('.animate-left', {
			duration: 2000,
			origin: 'left',
			distance: '80px'
		});

    window.sr = ScrollReveal();
    		sr.reveal('.animate-top', {
    			duration: 2000,
    			origin: 'top',
    			distance: '80px'
    		});
        window.sr = ScrollReveal();
        		sr.reveal('.animate-right', {
        			duration: 2000,
        			origin: 'right',
        			distance: '80px'
        		});
            window.sr = ScrollReveal();
            		sr.reveal('.animate-bottom', {
            			duration: 2000,
            			origin: 'bottom',
            			distance: '80px'
            		});
